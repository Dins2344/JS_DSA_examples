function binarySearch(array,target){
    let leftIndex = 0
    let rightIndex = array.length-1
    while(leftIndex<=rightIndex){
        let mid = Math.floor((leftIndex+rightIndex)/2)
        if(array[mid]===target){
            return mid
        }
        if(target < array[mid]){
            rightIndex = mid-1
        }else{
            leftIndex = mid+1
        }
    }
    return msg = 'value is not in this array'
}

// Binary Search recursion

function binaryRecursion(array,target){
    return search(array,target,0,array.length-1)
}

function search (array,target,left,right){
    let mid = Math.floor((left+right)/2)
if(array[mid]==target){
    return mid
}
if(target<array[mid]){
    return search(array,target,left,mid-1)
}else{
    return search(array,target,mid+1,right)
}
}


console.log(binarySearch([2,4,5,6,8,9,10],5))
console.log( binaryRecursion([1,3,4,5,6,8,9,10,15],10))