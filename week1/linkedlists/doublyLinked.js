class Node{
    constructor(value){

        this.value = value
        this.next = null
        this.prev = null
    }
}

class List{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    append(value){
        const node = new Node(value)
        if(this.size==0){
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
        if(this.size == 0 ){
            return null
        }else{
            
        }
    }
    print(){
        if( this.size==0){
            console.log('list is empty');
        }else{
            let list = []
            let pointer = this.head
            while(pointer){
                list.push(pointer.value)
                pointer = pointer.next
            }
            console.log(list);
        }
    }
}

const myList = new List()

myList.append(20)
myList.append(30)
myList.append(40)
myList.append(50)
myList.print()

