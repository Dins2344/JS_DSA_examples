function splitting(array){
    if(array.length<2){
        return array
    }
    let mid = Math.floor(array.length/2)
    let leftArr = array.slice(0,mid)
    let right = array.slice(mid)
    return merge(splitting(leftArr),splitting(right))
}

function merge(left,right){
    const sortedArr=[]
    while(left.length&&right.length){
        if(left[0]<=right[0]){
            sortedArr.push(left.shift())
        }else{ 
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...left,...right]
}


// next

function splittingTwo (array){
    if(array.length<2){
        return array
    }
    let mid = Math.floor(array.length/2)
    let left= array.slice(0,mid)
    let right = array.slice(mid)
    return mergeTwo (splittingTwo(left),splittingTwo(right))
}

function mergeTwo(left,right){
    const sortedArr = []
    while(left.length&&right.length){
        if(left[0]<right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...left,...right]
}


// next

function splittingThree(array){
    if(array.length < 2){
        return array
    }
    let mid = Math.floor(array.length/2)
    let left = array.slice(0,mid)
    let right = array.slice(mid)
    return mergeThree(splittingThree(left),splittingThree(right))
}

function mergeThree(left,right){
    const sorted = []
    while(left.length&&right.length){
        if(left[0]>right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}

// next

function splittingFour(array){
    if(array.length < 2){
        return array
    }
    let mid = Math.floor(array.length/2)
    let left = array.slice(0,mid)
    let right = array.slice(mid)
    return mergeFour(splittingFour(left),splittingFour(right))
}

function mergeFour(left,right){
    let sorted = []
    while(left.length&&right.length){
        if(left[0]<=right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]

}

function splittingSample(arr){
    if(arr.length<2){
        return arr
    }
    let mid = Math.floor(array.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return merging(splitting(left),splitting(right))
}
function merging(left,right){
    let sorted=[]
    while(left.length&&right.length){
        if(left[0]<right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}

function splittingSampleOne(array){
    if(array.length<2){
        return array
    }
    let mid = Math.floor(array.length/2)
    let left = array.slice(0,mid)
    let right = array.slice(mid)
    return mergingOne(splittingSampleOne(left),splittingSampleOne(right))
}
function mergingOne(left,right){
    let sorted = []
    while(left.length&&right.length){
        if(left[0]<right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return[...sorted,...left,...right]
}

function splittingSampleTwo (array){
    if(array.length<2){
        return array
    }
    let mid = Math.floor(array.length/2)
    let left = array.slice(0,mid)
    let right = array.slice(mid)
    return mergingTwo(splittingSampleTwo(left),splittingSampleTwo(right))
}
function mergingTwo(left,right){
    let sorted = []
    while(left.length&&right.length){
        if(left[0]<right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted]
}

function splittingArray(arr){
    if(arr.length<2){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return merging(splittingArray(left),splittingArray(right))
}
function merging(left,right){
    let sorted = []
    while(left.length&&right.length){
        if(left[0]<right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}

let array  = [10,1,-3,8,5,6,9,4]
console.log(splittingArray(array));

