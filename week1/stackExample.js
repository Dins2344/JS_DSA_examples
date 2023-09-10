class Stack {
    constructor (){
        this.items= []
    }

    push(ele){
        this.items.push(ele)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length===0
    }

    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
}


const stack = new Stack()

stack.push(30)
stack.push([40,50,60,78])
stack.push([50,60,80,70,10,20,30,60])
console.log(stack.peek())
console.log(stack.isEmpty())
stack.print()