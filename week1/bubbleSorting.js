function bubbleSorting(arr){
    let swapped 
    do {
        swapped = false 

    for (let i = 0; i < arr.length-1; i++){
        if(arr[i]>arr[i+1]){
            temp = arr[i]
            arr[i]= arr[i+1]
            arr[i+1]=temp
            swapped = true
        }
    }}
while (swapped)
}

let array = [-7,8,5,6,2,20]
bubbleSorting(array)
console.log(array);