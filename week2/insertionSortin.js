function insertionSorting(array){
    for(let i = 1;i<array.length;i++){
        let numberto = array[i]
        let j = i-1
        while(j>=0&&array[j]>numberto){
            array[j+1]=array[j]
            j= j-1 
        }
        array[j+1]= numberto
    }
}


function insertionSort(array){
    for(let i = 0;i<array.length;i++){
        let number = array[i]
        let j = i-1
        while(j>=0&&array[j]>number){
            array[j+1]=array[j]
            j=j-1
        }
        array[j+1]= number
    }
}


function insertion(array){
    for(let i=0;i<array.length;i++){
        let number = array[i]
        let j = i-1
        while(j>=0&&array[j]>number){
            array[j+1]=array[j]
            j=j-1
        }
        array[j+1]=number
    }
}


function InsSorting(array){
    for(let i=1;i<array.length;i++){
        let number = array[i]
        let j = i-1
        while(j>=0&&array[j]>number){
            array[j+1]=array[j]
            j=j-1
        }
        array[j+1]=number
    }
}


function insertionOne(array){
    for(let i=0;i<array.length;i++){
        let number = array[i]
        let j = i-1
        while(j>=0&&array[j]<number){
            array[j+1]=array[j]
            j=j-1
        }
        array[j+1]=number
    }
}

function insertionOne(arr){
    for(let i=0;i<arr.length;i++){
        let numberTo = arr[i]
        let sorted = i-1
        while(sorted>=0&&arr[sorted]>numberTo){
            arr[sorted+1]=arr[sorted]
            sorted = sorted-1
        }
        arr[sorted+1]=numberTo
    }
}

function insertionTwo(arr){
    for(let i=0;i<arr.length;i++){
        let numberTo = arr[i]
        let sorted = i-1
        while(sorted>=0&&arr[sorted]>numberTo){
            arr[sorted+1]=arr[sorted]
            sorted = sorted-1
        }
        arr[sorted+1]=numberTo
    }
}

function insertionThree(arr){
    for(let i=0;i<arr.length;i++){
        let numberTo = arr[i]
        let sorted = i-1
        while(sorted>=0&&arr[sorted]>numberTo){
            arr[sorted+1]=arr[sorted]
            sorted = sorted-1
        }
        arr[sorted+1]=numberTo
    }
}

function ins(arr){
    for(let i =0;i<arr.length;i++){
        let numberTo = arr[i]
        let sorted = i-1
        while(sorted>=0&&arr[sorted]>numberTo){
            arr[sorted+1]=arr[sorted]
            sorted = sorted-1
        }
        arr[sorted+1]=numberTo
    }
}
function insOne(arr){
    for(let i=0;i<arr.length;i++){
        let numberTo = arr[i]
        let sorted = i-1
        while(sorted >=0&&arr[sorted]>numberTo){
            arr[sorted+1]=arr[sorted]
            sorted = sorted-1
        }
        arr[sorted+1]=numberTo
    }
}

let array = [1,2,-2,42,1,3,10]
insOne(array)
console.log(array);