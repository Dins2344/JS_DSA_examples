function selectionSort(array){
    for(let i =0; i<array.length-1;i++){
        let min =i
        for(let j = i+1;j<array.length;j++){
            if(array[j]<array[i]){
                min = j
            }
        }
        if(i!==min){
            [array[i],array[min]] = [array[min],array[i]]
        }
    }
    return array
}


function selectionSortOne(array){
    for(let i = 0; i<array.length;i++){
        let small = i
        for(let j = i+1;j<array.length; j++){
            if(array[j]<array[small]){
                small = j
            }
        }
        if(small!==i){
            [array[i],array[small]]=[array[small],array[i]]
        }
    }

    return array
}



function selectionSortTwo(array){
    for(let i =0;i<array.length;i++){
        let mini = i
        for(let j =i+1; j<array.length;j++){
            if(array[j]<array[mini]){
                mini = j
            }
        }
        if(mini !== i){
            [array[i],array[mini]]=[array[mini],array[i]]
        }
    }
    return array
}

let array = [-5,7,3,10,12,4,2,9]

console.log(selectionSortTwo(array));

function sort (array){
    for(let i =0 ;i<array.length-1;i++){
        for(let j= i+1;j<array.length;j++){
            if(array[i]>array[j]){
                temp = array[i]
                array[i]=array[j]
                array[j]=temp
            }
        }
    }
    return array
}

