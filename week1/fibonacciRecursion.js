function fibonacci(n){
    if(n<2){
        return n
    }
    return fibonacci(n-1)+fibonacci(n-2)
}

function fibonacciLoop(n){
    let list = [0,1]
    if ( n<2){
        return  list
    }else{
        for(let i =2; i<n;i++){
            list[i]=list[i-1]+list[i-2]
        }
    }
    return list
}

// console.log(fibonacci(8))
console.log(fibonacciLoop(8));