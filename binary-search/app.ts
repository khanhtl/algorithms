function binarySearchList(arr: number[], needle: number) : boolean {
    let lo = 0;
    let hi = arr.length;
    do {
        const m = Math.floor(lo + (hi - lo) / 2);
        const v = arr[m];
        if(v == needle) return true;
        else if(v > needle) hi = m;
        else lo = m + 1;
    } while(lo < hi)
    return false;
}

console.log(binarySearchList([1,2,3,4,5,6], 6));
console.log(binarySearchList([1,2,3,4,5,6], 7));
