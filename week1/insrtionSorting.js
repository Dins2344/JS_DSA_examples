function insertionSorting(arr) {
    for(let i = 1;i<arr.length;i++){
        let unsorted = arr[i]
        let sorted = i-1

        while(sorted >=0 && arr[sorted]>unsorted){
            arr[sorted +1]=arr[sorted]
            sorted = sorted -1
        }
        arr[sorted+1]= unsorted
    } 
}

array = [4,9,4,-1,0,0,3,4,2,5,3,1,5,8,9,4,1,1]
insertionSorting(array)
console.log(array);