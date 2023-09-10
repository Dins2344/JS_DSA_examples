class Node{
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
        return this.size === 0
    }

    size(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if ( this.isEmpty()){
            this.head = node
            this.tail = this.head
        }else{
            node.next = this.head
            this.head = node 
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail=node
        }
        this.size++
    }

    insert(value,index){
        if(index < 0 || index >this.size){
            return 
        }
        if(index===0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let pre= this.head
            for(let i = 0; i<index-1;i++){
                pre=pre.next
            }
            node.next = pre.next
            pre.next = node
            this.size++
        }
    }

    removeFromIndex(index){
        if(index <0 ||index >this.size){
            return null
        }
        let removeIndex

        if (index===0){
            removeIndex = this.head
            this.head = this.head.next
            this.size--
        }else{
            let pre = this.head
            for(let i = 0;i<index-1;i++){
                pre = pre.next
            }
            removeIndex = pre.next
            pre.next = removeIndex.next
            this.size--
        }
    }
    removeFromValue(value){
        if(this.isEmpty()){
            return null
        }
        if (this.head.value == value){
            this.head = this.head.next
            this.size--
            return value
        }else{
            let pre = this.head
            while(pre.next && pre.next.value !== value){
                pre = pre.next
            }
            if(pre.next){
                let remove = pre.next
                pre.next = remove.next
                this.size--
                return value
            }
        }
        return null
    }

    searchByValue(value){
        if(this.isEmpty()){
            return null
        }
        let i =0
        let curr = this.head
        while(curr){
            if(curr.value === value){
                return i
            }
            i++
            curr = curr.next
        }
        
        return null
    }
    reverse(){
        let curr = this.head
        let prev = null
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next

        }
        this.head = prev
    }

    print(){
        if (this.isEmpty()){
            console.log("list is empty");
        }else{
            let curr = this.head
            let list = []
            while(curr){
                list.push(curr.value)
                curr = curr.next
            }
            console.log(list);
        }

    }

}

let list = new linkedList()
list.prepend(5)
list.prepend(10)
list.prepend(15)

list.append(20)
list.append(25)
list.append(30)
list.append(35)
list.append(40)
list.insert(22,3)
// list.removeFromIndex(-1)
console.log(list.searchByValue(10));
list.print()
list.reverse()
list.print()
console.log(list.size);