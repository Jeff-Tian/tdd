import assert = require('assert');
import ArrayHelper from '../ArrayHelper';

describe('ArrayHelper 检查两个数组是否含有相同的元素', ()=>{
    it('空数组', ()=>{
        assert(ArrayHelper.overlaps([], []) === false);
    });
    
    it('含有相同元素的数组', () => {
        assert(ArrayHelper.overlaps([1], [1]) === true);
    });
    
    it('长度不同的数组', ()=> {
        assert(ArrayHelper.overlaps([1, 2], [1, 4]) === true);
    });
});