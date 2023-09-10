class MinHeap{
    constructor(){
        this.data = []
    }

    getParent(i){
        return Math.floor((i-1)/2)
    }
    getLeftChild(i){
        return i*2+1
    }
    getRightChild(i){
        return i*2+2
    }

    push(value){
        this.data[this.data.length] = value
        this.heapifyUp()
    }

    swap(i,j){
        let temp = this.data[i]
        this.data[i]=this.data[j]
        this.data[j]= temp
    }

    heapifyUp(){
        let curr = this.data.length-1
        while(this.data[curr] < this.data[this.getParent(curr)]){
            this.swap(curr,this.getParent(curr))
            curr = this.getParent(curr)
        }
    }

    pull(){
        let removed = this.data[0]
        this.data[0]= this.data[this.data.length-1]
        this.data.length --
        this.heapifyDown()
        return removed
    }

    heapifyDown(){
        let curr = 0
        while(this.data[this.getLeftChild(curr)]!==null){
            let lowest = this.getLeftChild(curr)
            if(this.data[this.getRightChild(curr)]!==null &&
            this.data[this.getLeftChild(curr)]>this.data[this.getRightChild(curr)]){
                 lowest = this.getRightChild(curr)
            }
            if(this.data[curr]>this.data[lowest]){
                this.swap(curr,lowest)
            }else{
                return
            }

        }
    }
}

const myHeap = new MinHeap()

myHeap.push(5)
myHeap.push(4)
myHeap.push(12)
myHeap.push(15)
myHeap.push(1)
console.log(myHeap.data.join(','))
let a = []
a.push(myHeap.pull())
a.push(myHeap.pull())
a.push(myHeap.pull())
a.push(myHeap.pull())
a.push(myHeap.pull())

console.log(a)