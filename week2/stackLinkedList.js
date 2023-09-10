class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
        this.size = 0
    }

    push(value){
        const node = new Node(value)
        if(this.size==0){
            this.top = node
        }
        else{
            node.next = this.top
            this.top = node
        }
        this.size++
    }
    pop(){
        let temp = this.top
        this.top = this.top.next
        temp = null

    }
    peek(){
    return this.top.value
    }
    print(){
        if(this.size == 0){
            return null
        }else{
            let pointer = this.top
            while(pointer){
                console.log(pointer.value)
                pointer = pointer.next
            }
        }
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(60)
stack.print()
stack.pop()
stack.print()
console.log( 'last element is : '+stack.peek())
