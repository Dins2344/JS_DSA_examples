function linearSearch(arr,num){
    for(let i =0; i<arr.length-1 ;i++){
        if (num == arr[i]){
            console.log(`your value at index ${i}`)
            return
        }
    }
    console.log('searched value is not in this Array')
}

linearSearch([5,8,7,4,2,3,6,9,5],3)