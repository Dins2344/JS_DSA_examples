class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class List {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    append(value){
        const node = new Node(value)
        if(this.size ==0){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail= node
        }
        this.size++
    }

    prepend ( value){
        const node = new Node(value)
        if(this.size==0){
            this.prepend(value)
        }else{
            node.next = this.head
            this.head  = node
        }
        this.size++
    }

    insertAt(value,index){
        if(index<0 || index >this.size){
            return null
        }
        if(index ==0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let pointer = this.head

            for(let i=0;i<index-1;i++){
                pointer = pointer.next
            }
            node.next = pointer.next
            pointer.next = node
            this.size++
        }
    }
    removeIndex(index){
        let remove
        if(index<0||index>this.size){
            return null
        }
        if(index==0){
            remove = this.head
            this.head= remove.next
            this.size--
        }else{
            let pointer = this.head
            for(let i=0;i<index-1;i++){
                pointer = pointer.next
            }
            remove = pointer.next
            pointer.next = remove.next
            this.size--
        }
    }
    removeValue(value){
        let remove
        if(this.size == 0){
            return null
        }
        if(this.head.value == value){
            remove = this.head
            this.head = remove.next
            this.size--
        }
        else{
            let pointer = this.head
            while(pointer.next&&pointer.next.value !== value){
                pointer=pointer.next
            }
            remove = pointer.next
            pointer.next = remove.next
            this.size--

        }
    }

    removeDuplicate(value){
        let p1 = this.head
        let p2 = this.head
        while(p2){
            if(p1.value !== p2.value){
                p1.next = p2
                p1 = p2
            }
            if(p2 == this.tail && s.value == this.tail.value){
                this.tail = p1
                this.tail.next=null
            }
            p2 = p2.next
        }
    }
    print(){
        if(this.size==0){
            return null
        }else{
            let pointer = this.head
            let list =[]
            while(pointer){
                list.push(pointer.value)
                pointer = pointer.next
            }
            console.log(list)
        }
    }
}

const myList = new List()
myList.append(30)
myList.append(40)
myList.append(50)
myList.append(50)
myList.append(50)
myList.append(50)


myList.insertAt(60,2)
myList.print()
// myList.removeValue(30)
myList.removeDuplicate()
myList.print()

