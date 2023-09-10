function reverse(string){
    
    console.log(string)
    let reversed = ''
    for(i=string.length-1; i>=0 ; i--){
        reversed+=string[i]

    }
    console.log(reversed);
}

reverse('brototype')