class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size===0
    }

    size(){
        return this.size
    }
     prepend(value){
        const node = new Node(value)
        if (this.isEmpty()){
            this.head = node
        }else{  
            node.next = this.head
            this.head = node
        }
        this.size++
     }

     arrayConversion(arr){
        for(let item of arr){
            this.append(item)
        }
     }
        append(value){
            const node = new Node(value)
            if (this.isEmpty()){
                this.head = node
            }else{
                let prev = this.head
                while(prev.next){
                    prev = prev.next
                }
                prev.next = node
            }
            this.size++
        }

     print (){
        if(this.isEmpty()){
            console.log("list is empty")
        }else{
            let curr = this.head
            let list = ""
            while(curr){
                list+= `${curr.value},`
                curr = curr.next
            }
            console.log(list)
        }
     }
}

const myLinkedList = new linkedList()

console.log('is linked list empty..?'+myLinkedList.isEmpty())
myLinkedList.prepend(30)
myLinkedList.prepend(20)
myLinkedList.prepend(60)
myLinkedList.prepend(50)

console.log( 'is linked list empty..?'+myLinkedList.isEmpty())
console.log(myLinkedList.size);

myLinkedList.prepend(20)
myLinkedList.prepend(60)
myLinkedList.prepend(50)
myLinkedList.append(70)
myLinkedList.append(100)
myLinkedList.append(110)
myLinkedList.append(120)

myLinkedList.print()
