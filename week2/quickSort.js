function quickSort(array){
    if(array.length<2){
        return array
    }
    let pivot = array[array.length-1]
    let left = []
    let right = []
    for(let i=0; i<array.length-1;i++){
        if(array[i]<pivot){
            left.push(array[i])
        }else{
            right.push(array[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}


function quickSorting(arr){
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    for(let i = 0;i < arr.length-1; i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

function quick(arr){
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    for(let i = 0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quick(left),pivot,...quick(right)]
}

function quicky(arr){
    if(arr.length<2){
        return arr
    }
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quicky(left),pivot,...quicky(right)]
}

function quickSample(arr){
    if(arr.length<2){
        return arr
    }
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    for(let i = 0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...quickSample(left),pivot,...quickSample(right)]
}

function quickSampleOne(arr){
    if(arr.length<2){
        return arr
    }
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    for(let i = 0; i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSampleOne(left),pivot,...quickSampleOne(right)]
}


let array = [2,3,4,1,2,3,6,4]
console.log(quickSampleOne(array));

