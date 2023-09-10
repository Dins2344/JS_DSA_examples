function validParenthesis(arr){
    let stack = []
    for(let i=0;i<arr.length;i++){
        if(arr[i]=='{'){
            stack.push('}')
        }else if(arr[i]=='['){
            stack.push(']')
        }else if(arr[i]=='('){
            stack.push(')')
        }
        else if(stack.pop()!==arr[i]){
            return false
        }
    }
    return !stack.length
}

let array =['[',']',]
console.log(validParenthesis(array))
console.log(array);