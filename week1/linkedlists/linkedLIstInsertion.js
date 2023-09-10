class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class List {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    append (value){
        const node = new Node(value)
        if (this.size ==0){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }


    prepend(value){
        const node = new Node(value)
        if(this.size==0){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    insertAt(value,index){
        if(index<0||index>this.size){
            return null
        }
        else if(index == 0){
            this.prepend(value)
        }
        else{
            const node = new Node(value)
            let pointer = this.head
            for(let i = 0; i<index-1; i++){
                pointer = pointer.next
            }
            node.next = pointer.next
            pointer.next = node
            this.size++

        }
        
    }

    removeIndex(index){
        let removeIndex
        if(index<0||index>this.size){
            return null
        }
        if(index == 0){
            removeIndex = this.head
            this.head = this.head.next
        }else{
            let pointer = this.head
            for(let i =0; i<index-1; i++){
                pointer = pointer.next
            }
            removeIndex = pointer.next
            pointer.next = removeIndex.next
        }
        this.size--
    }
    removeAllValue(value){
        let remove
        let pointer = this.head
        while(pointer.next&&pointer.next.value !== value){
            pointer = pointer.next
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
        }else{
            let pointer = this.head
            while (pointer.next&&pointer.next.value !== value){
                pointer = pointer.next
            }
            remove = pointer.next
            pointer.next = remove.next
            this.size--
        }
        return null

    }
    print(){
        if(this.size==0){
            console.log('list is empty');
        }else{
            let pointer = this.head
            let list = []
            while(pointer){
                list.push(pointer.value)
                pointer = pointer.next
            }
            console.log(list);
        }
    }
}

const myList = new List()

myList.prepend(50)
myList.prepend(40)
myList.prepend(30)
myList.prepend(20)

myList.append(10)
myList.append(20)
myList.append(30)
myList.append(40)
myList.append(50)

// myList.print()

myList.insertAt(12,5)
myList.print()
// myList.removeIndex(5)
// myList.print()
// myLiremoveValue(40)
// myList.print()
// myList.removeValue(40)
myList.removeAllValue(40)
myList.print()



