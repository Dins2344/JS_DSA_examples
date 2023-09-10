function elementDel(arr,val){
    let array = []
   for (let i=0; i<arr.length;i++){
    
        if(arr[i]===val){
            continue
        }else{
            array.push(arr[i])
        }
    
   }
   return array
}

console.log( elementDel([1,2,3,43,2,43,43,43,43,5,3],43))


let array = [1,2,3]
let array2 = []

for(let i =0; i<array.length;i++){
    array2[i] = array[i]
    array2[i + array.length] = array[i]
}

console.log(array2);