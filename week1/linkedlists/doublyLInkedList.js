class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class linkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    prepend(value){
        const node = new Node(value)
        if(this.size==0){
            this.head=node
            this.tail = node
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if (this.size == 0){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }
    reverse(){
        if(this.size==0){
            return null
        }else{
            let pointer = this.tail
            let list =[]
            while(pointer){
                list.push(pointer.value)
                pointer=pointer.prev
            }
            console.log(list)
        }
    }

     print(){
        if (this.size==0){
            console.log('your list is empty');
        }else{
            let pointer = this.head
            console.log(this.head);
            let list =[]
            while(pointer){
                list.push(pointer.value)
                pointer=pointer.next
            }
            console.log(list);

        }
    }
}

const myList = new linkedList()
myList.prepend(1)
myList.prepend(5)
myList.prepend(9)

myList.append(10)
myList.append(15)
myList.append(20)

myList.reverse()