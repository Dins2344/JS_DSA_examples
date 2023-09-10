class MaxHeap{
    constructor() {
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
    swap(i,j){
        let temp = this.data[i]
        this.data[i]=this.data[j]
        this.data[j]=temp
    }

    push(value){
        this.data[this.data.length]= value
        this.heapUp()
    }

    heapUp(){
        let curr = this.data.length-1
        while(this.data[curr]>this.data[this.getParent(curr)]){
            this.swap(curr,this.getParent(curr))
            curr = this.getParent(curr)
        }
    }

    pull(){
        let pulled = this.data[0]
        this.data[0]= this.data[this.data.length-1]
        this.data.length--
        this.heapDown()
        return pulled
    }

    heapDown(){
        let curr = 0
        while(this.data[this.getLeftChild(curr)]!== null){
            let biggest = this.getLeftChild(curr)
            if(this.data[this.getRightChild(curr)] !== null &&
            this.data[this.getLeftChild(curr)]<this.data[this.getRightChild(curr)]){
                biggest = this.getRightChild(curr)
            }
            if(this.data[curr]<this.data[biggest]){
                this.swap(curr,biggest)
            }else{
                return
            }
        }
    }

    sorting(){
        let length = this.data.length
        let sorted = []
        for(let i = 0;i<length;i++){
            sorted.push(this.pull())
        }
        console.log(sorted)  
    }
}

const myHeap = new MaxHeap()
myHeap.push(20)
myHeap.push(10)
myHeap.push(60)
myHeap.push(30)
myHeap.push(50)

console.log(myHeap.data)
myHeap.sorting()