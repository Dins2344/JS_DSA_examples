class Node{
    constructor(value){
        this.value = value
        this.next = null

    }
}

class list{
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    prepend(value){
        const node = new Node(value)
        if(this.size == 0){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.size==0){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    smallest(){
        if(this.size==0){
            return null
        }else{
            let pointer = this.head
            var smallest =pointer.value
            while(pointer.next){
                if(smallest>pointer.next.value){
                    smallest = pointer.next.value
                }
                pointer = pointer.next
            }
            return smallest
        }
        
    }

    largest(){
        if(this.size == 0){
            return null
        }else{
            let pointer = this.head
            let largest = pointer.value
            while(pointer.next){
                if(largest<pointer.next.value){
                    largest = pointer.next.value
                }
                pointer = pointer.next
            }
            return largest
        }
    }

    print(){
        if(this.size == 0 ){
            console.log('list is empty');
        }else{
            let pointer = this.head
            let list = []
            while(pointer){
                list.push(pointer.value)
                pointer = pointer.next
            }
            console.log(`your linked list is : ${list}`)
        }
    }
}

const myList = new list()

myList.append(10)
myList.append(20)
myList.append(60)
myList.append(30)
myList.append(50)
myList.prepend(5)
myList.prepend(8)
myList.prepend(9)

myList.print()

console.log(myList.largest());
console.log(myList.smallest());