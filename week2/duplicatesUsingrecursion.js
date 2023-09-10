function recursionDupe(arr,j){
    let find = true

    let i 

    if(i==arr.length-1){
        return 
    }
   
     
    if(j==arr.length-1||j===undefined&&i===undefined){
        i++
        j=i+1
        console.log('i:'+i,'j :'+j);
    }
    if(arr[i]==arr[j]){
        find = false
        return false
    }
    return find
    recursionDupe(arr,j++)
}

console.log(recursionDupe([3,4,2,5]))