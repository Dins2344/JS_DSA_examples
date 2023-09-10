function Heaping(arr,length,parentInd){
    let largest = parentInd
    let left = parentInd * 2 +1
    let right = left +1
    if(left < length && arr[left]>arr[largest]){
        largest = left
    }
    if(right < length && arr[right]>arr[largest]){
        largest = right
    }
    if(largest !== parentInd){
        [arr[largest],arr[parentInd]] = [arr[parentInd],arr[largest]]
        Heaping(arr,length,largest)
    }
    // console.log(arr)
    return arr
}

function heapSorting(arr){
    let length = arr.length
    let lastParent = Math.floor((length/2)-1)
    let lastChild = length-1

    while(lastParent >= 0){
        Heaping(arr,length,lastParent)
        lastParent--
    }

    while(lastChild >= 0){
        [arr[0],arr[lastChild]] = [arr[lastChild],arr[0]]
        Heaping(arr,lastChild,0)
        lastChild --
    }

    return arr
}


function HeapingOne(arr,length,parentInd){
    let largest = parentInd
    let left = parentInd * 2 +1
    let right = left +1

    if(left < length && arr[left]>arr[largest]){
        largest = left
    }
    if(right < length && arr[right]> arr[largest]){
        largest = right
    }

    if(largest !== parentInd){
        [arr[largest],arr[parentInd]] = [arr[parentInd],arr[largest]]
        HeapingOne(arr,length,largest)
    }
    return arr
}

function heapSort(arr){
    let length = arr.length
    let lastParent = Math.floor((length/2)-1)
    let lastChild = length -1

    while(lastParent >= 0){
        HeapingOne(arr,length,lastParent)
        lastParent--
    }
    while(lastChild >= 0){
        [arr[0],arr[lastChild]] = [arr[lastChild],arr[0]]
        HeapingOne(arr,lastChild,0)
        lastChild--
    }
    return arr
}

let a = [
    2, 4, 2, 6,
    7, 9, 5, 6
  ]
  console.log(heapSort(a))