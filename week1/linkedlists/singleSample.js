class Node {
    constructor(value){
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

    prepend(value){
        const node = new Node(value)
        if ( this.size == 0){
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
        if (this.size==0){
            this.prepend(value)
        }else{
            this.tail.next = node
            this.tail = node 
        }
        this.size++
    }

    isPalindrome(){
        let last = this.head
        let mid = this.head
        while(last&&last.next){
            last = last.next.next
            mid = mid.next
        }

        let prev = null
        let pointer = mid
        while(pointer){
            let next = pointer.next
            pointer.next = prev
            prev = pointer
            pointer = next

        }

        let h1 = this.head
        let h2 = prev
        while(h2){
            if(h1.value !== h2.value){
                return false
            }
            h1 = h1.next
            h2 = h2.next
        }
        return true
    }

    reverse (){
        if(this.size==0){
            return null
        }else{
            let prev = null
            let pointer = this.head
            while(pointer){
                let next = pointer.next
                pointer.next = prev
                prev = pointer
                pointer = next
            }
            this.head = prev
        }
    }

    print(){
        if(this.size == 0 ){
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
myList.append(30)
myList.append(70)
myList.print()
// console.log( myList.isPalindrome())
myList.reverse()
myList.print()