function sumOfNumbers(limit){
    if(limit===100){
        return limit
    }
    
    return limit + sumOfNumbers(limit+1)

}

console.log(sumOfNumbers(1));


// what if it was an array
