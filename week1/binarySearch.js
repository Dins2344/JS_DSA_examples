function indexFinder(arr,target){
    let leftIndex = 0
    let rightIndex = arr.length-1
    while(leftIndex<= rightIndex){
        let middleIndex = Math.floor((leftIndex+rightIndex)/2)
        if ( target == arr[middleIndex]){
            return msg = `index is ${middleIndex}`
        }
        if (target < arr[middleIndex]){
            rightIndex = middleIndex -1
        }
        if (target > arr[middleIndex]){
            leftIndex = middleIndex +1
        }
    }
    return msg = 'there is no searching index'
}

let array = [2,5,8,9,10,12,14]
let array1 = [5,6,9,10,14,16]

console.log(indexFinder(array,5)); 

function binarySearch(arr,target){
    let left = 0
    let right = arr.length-1
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(target == arr[mid]){
            return mid
        }
        if(target < arr[mid]){
            right= mid-1
        }
        if(target > arr[mid])[
            left = mid+1
        ]
    }
    return 'there is no target you are searching'
}

console.log(binarySearch(array,10)); 


