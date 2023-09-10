function recursiveFactorial(n){
    if ( n===0){
        return 1
    }
    return n* recursiveFactorial(n-1)
}


console.log(recursiveFactorial(5));

function sumOf100(n){
    if(n===100){
        return 100 
    }

    return n+sumOf100(n+1)
}

console.log( sumOf100(1))

function insertElement(array,value,index){
    for(let i=array.length ;i>=index; i--){
        array[i]=array[i-1]
    }

    array[index]=value
    console.log(array);

}
insertElement([2,3,5,4,8,6],7,2)