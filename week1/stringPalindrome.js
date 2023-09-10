function isPalindrome(str){
string = str.split('')
let length = string.length-1
for(let i= 0;i<length; i++){
    if ( string[i]==' ' ){
        string.splice(i,1)

    }
}

console.log(string);
for(let i =0; i<string.length/2 ; i++){
    if(string[i]!==string[length-i]){
        console.log(i,string.length-1);
        return false
    }
}
return true
}

console.log(isPalindrome('malayalam')); 