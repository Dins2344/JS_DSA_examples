
function  buuble(Array){
do{
    let swapped = true
    for(let i=0;i<Array.length;i++){
        if(Array[i]>Array[i+1]){
            // swapped,,
            swapped = true
        }
    }}
while(swapped)
}


for(let i=0;i<Array.length-1;i++){
    let min = Array[i]
    for(let j=i+1;j<Array.length;j++){
        if()
    }
}


class Stack{
    constructor(){
        this.items = []
        
    }

    push(value){
        this.items[this.items.length]=value
    }
    pop(){
        let poped = this.items[this.items.length-1]
        this.items.length--
        return poped
    }

    peek(){
        
    }

    print(){
        console.log(this.items)
    }
}