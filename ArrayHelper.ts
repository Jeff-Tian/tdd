export default class ArrayHelper {
    static overlaps (a1: number[], a2: number[]) : boolean {
        if(a1.length <= 0 || a2.length <= 0) {
            return false;
        }
    
        for (const e1 of a1) {
            if(a2.indexOf(e1) >= 0) {
                return true;
            }
        }
        
        return false;
    }
}