function bubble_sort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j=0; j<arr.length-i-1; j++) {
            if (arr[j]>arr[j+1]) {
                arr[j]=arr[j]^arr[j+1];
                arr[j+1]=arr[j]^arr[j+1];
                arr[j]=arr[j]^arr[j+1];
            }
        }
        
    }
    console.log(arr);
    
}

bubble_sort([1,4,7,2,3,5])