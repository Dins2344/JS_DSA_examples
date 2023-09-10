class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructor (){
        this.head = null
        this.tail = null
        this.size = 0 
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

    arrayConversion(arr){
        for(let value of arr){
            this.append(value)
        }
    }
    append(value){
        const node = new Node(value)
        if(this.size==0){
            this.prepend(value)
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    print(){
        if(this.size==0){
            return null
        }else{
            let pointer = this.head
            let list = []
            while(pointer){
                list.push(pointer.value)
                pointer=pointer.next
            }
            return list        

        }

    }
    
}

const myList = new linkedList()
myList.arrayConversion([1,3,5,6,4,6,5])
console.log(myList.print())