class Heap{
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
    swap(ind1,ind2){
        let temp = this.data[ind1]
        this.data[ind1] = this.data[ind2]
        this.data[ind2] = temp
    }

    push (value){
        this.data[this.data.length] = value
        this.heapifyUp()
    }

    heapifyUp(){
        let curr = this.data.length - 1
        while(this.data[curr] > this.data[this.getParent(curr)]){
            this.swap(curr,this.getParent(curr))
            curr = this.getParent(curr)
        }
    }

    pull(){
        let pulled = this.data[0]
        this.data[0] = this.data[this.data.length -1]
        this.data.length--
        this.heapifyDown()
        return pulled
    }

    heapifyDown(){
        let curr = 0
        while(this.data[this.getLeftChild(curr)]!==null){
            let biggestIndex = this.getLeftChild(curr)
            if(this.data[this.getRightChild(curr)] !== null &&
            this.data[this.getRightChild(curr)] > this.data[this.getLeftChild(curr)]){
                biggestIndex = this.getRightChild(curr)
            }

            if(this.data[curr] < this.data[biggestIndex]){
                this.swap(curr,biggestIndex)
            }else{
                return
            }
        }
    }
  
}

const myHeap = new Heap()
myHeap.push(10)
myHeap.push(12)
myHeap.push(60)
myHeap.push(05)
myHeap.push(14)
console.log(myHeap.data.join(','))

let pulled = []

pulled.push(myHeap.pull())
pulled.push(myHeap.pull())
pulled.push(myHeap.pull())
pulled.push(myHeap.pull())
pulled.push(myHeap.pull())

console.log(pulled)