class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class queue{
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    enqueue(value){
        const node = new Node(value)
        if(this.size == 0){
            this.first = node
            this.last = node
        }else{
            this.last.next = node
            this.last = node
        }
        this.size++
    }
    dequeue(){
        if(this.size == 0){
            return null
        }else{
            let remove = this.first
            this.first = remove.next
        }
    
    }
    peek(){
        
    }
    print(){
        if(this.size == 0){
            return null
        }else{
            let pointer = this.first
            while(pointer){
                console.log(pointer.value);
                pointer = pointer.next
            }
        }
    }
}
const myQueue = new queue()
myQueue.enqueue(10)
myQueue.enqueue(20)
myQueue.enqueue(30)
myQueue.enqueue(40)
myQueue.print()
myQueue.dequeue()
myQueue.print()