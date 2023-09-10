function binarySearch(arr,target){
    return search (arr,target,0,arr.length)
}

function search(arr,target,left,right){

    if(left)

    let mid = Math.floor((left+right)/2)
    if(target = arr[mid]){
        return mid
    }
    if(target < arr[mid]){
        return search(arr,target,left,mid-1)
    }else{
        return search (arr,target,mid+1,right)
    }

    


}