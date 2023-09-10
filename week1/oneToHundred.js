let array  = []
for ( let i = 2; i<=100;i+=2){
    array.push(i)
}

let sum = 0
for(let i =0;i<array.length;i++){
    sum +=array[i]
}

console.log(array);
console.log('sum of the alternative array is '+sum);