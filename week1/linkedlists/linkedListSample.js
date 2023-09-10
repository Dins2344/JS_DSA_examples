class Node {
    constructor(value){
    this.value = value
    this.next = null
    }
}

class linkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size ===0
    }
    size(){
        return this.size
    }

    prepend(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.head= newNode
            this.tail = newNode
            
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }

    append(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.prepend(value)
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log('list is empty')
        }else{
            let curr = this.head
            let list = []
            while(curr){
                list.push(curr.value)
                curr= curr.next
            }
            console.log(list)
        }
    }
}


const newLinkedList = new linkedList()

newLinkedList.prepend(12)
newLinkedList.prepend(15)

newLinkedList.append(30)
newLinkedList.append(10)
newLinkedList.append(20)
newLinkedList.append(40)

newLinkedList.print()