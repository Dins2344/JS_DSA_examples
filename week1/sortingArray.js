function sortingArray(array){
    for(let i = 0; i<array.length-1; i++){
        for(let j=i+1; j<array.length; j++){
            if(array[i]>array[j]){
                temp = array[i]
                array[i]=array[j]
                array[j]=temp

            }
        }
    }

    console.log(array)
}

function deleteDuplicate(array,val){
    for (let i =0; i<array.length; i++){
        if ( array[i]===val){
            array[i]=array[i+1]
        }
    }
    return array
}

// sortingArray([1,5,4,7,8,9,6,3,5,7,4,23,6,3,5,6,3,5,2,5,3,8,2,8,8,9])
console.log( deleteDuplicate([1,5,4,7,8,9,6,3,5,7,4,23,6,3,5,6,3,5,2,5,3,8,2,8,8,9],8))