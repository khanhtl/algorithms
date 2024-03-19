const arr=[7, 1, 3, 2, 8, 5];

function qs(arr: number[]): any {

    if (arr.length <= 1) {
        return arr;
    }

    const p=arr[0];
    const left: number[]=[];
    const right: number[]=[];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i]<p) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }        
    }
    return [...qs(left), p, ...qs(right)]
}

function partion(arr: number[], lo: number, hi: number) {
    const p=arr[hi];
    let idx=lo-1;
    for (let i=lo; i<hi; i++) {
        if (arr[i]<p) {
            idx++;
            const temp=arr[i];
            arr[i]=arr[idx];
            arr[idx]=temp;
        }
    }
    idx++;
    arr[hi]=arr[idx]
    arr[idx]=p;
    return idx
}

function qs2(arr: number[], lo: number, hi: number) {
    if (lo>=hi) {
        return
    }
    let pIdx=partion(arr, lo, hi);
    console.log(pIdx);
    
    qs2(arr, lo, pIdx-1);
    qs2(arr, pIdx+1, hi);
}

function quick_sort(arr: number[]) {
    // console.log(qs(arr));
    qs2(arr, 0, arr.length -1);
    console.log(arr);
    
}

quick_sort(arr)