class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class List{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    prepend(value){
        const node = new Node(value)
        if ( this.size==0){
            this.head = node
            this.tail = node 
        }
        else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    reverse(){
        if(this.size == 0){
            return null
        }else{
            let prev = null
            let curr = this.head
            while(curr){
                let next = curr.next
                curr.next = prev
                prev = curr
                curr = next
            }
            this.head = prev
        }
    }
    isPalindrome() {
        let last = this.head
        let mid = this.head
        // founding the middle node
        while(last&&last.next){
            last = last.next.next
            mid = mid.next   
        }
    
        // reversing the second half
    
        let pre =null
        let secondHead = mid
        while(secondHead){
            let next = secondHead.next
            secondHead.next = pre
            pre = secondHead
            secondHead = next
        }
    
        // comparing elements of both halfs
    
        let h1 = this.head
        let h2 = pre
        while(h2){
            if(h1.value !== h2.value){
                return false
            }
            h1 = h1.next 
            h2 = h2.next
        }
        return true
    
        
    };
    print(){
        if ( this.size==0){
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

const myList = new List

myList.prepend(30)
myList.prepend(40)
myList.prepend(50)
myList.prepend(40)
myList.prepend(30)

myList.print()
myList.reverse()
myList.print()
console.log( myList.isPalindrome())