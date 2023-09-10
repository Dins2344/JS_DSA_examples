function binaryRecursion(arr, target){
    let mid =search(arr,target,0,arr.length-1)
    return mid
}

function search(arr,target,left,right){
    if (left>right){
        return null
    }
    let mid = Math.floor((left+right)/2)

    if(target === arr[mid]){
        return mid
    }

    if ( target < arr[mid]){
        return search(arr,target,left,mid-1)
    }else{
        return search(arr,target,mid+1,right)
    }
}

console.log('your value at index ' + binaryRecursion([1,2,3,4,5,6,7,8,9,10],9))

function binaryOne(arr,target){
    let index = searchOne(arr,target,0,arr.length-1)
    return index
}

function searchOne(arr,target,left,right){
    if(left>right){
        return null
    }
    let mid = Math.floor((left+right)/2)
    if(target ===arr[mid]){
        return mid
    }
    if(target<arr[mid]){
        return search(arr,target,left,mid-1)
    }
    if(target > arr[mid]){
        return search(arr,target,mid+1,right)
    }
}

console.log('your value at index ' + binaryOne([1,2,3,4,5,6,7,8,9,10],9))

function binarySecond(arr,target){
    let index = searchTwo(arr,target,0,arr.length-1)
    return index
}

function searchTwo(arr,target,left,right){
    if(left>right){
        return null
    }
    let mid = Math.floor((left+right)/2)
    if(target ===arr[mid]){
        return mid
    }
    if(target < arr[mid]){
        return searchTwo(arr,target,left,mid-1)
    }
    if(target > arr[mid]){
        return searchTwo(arr,target,mid+1,right)
    }
}
console.log('your value at index ' + binarySecond([1,2,3,4,5,6,7,8,9,10],9))

