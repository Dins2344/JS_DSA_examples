class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    Hash (key){
        let total = 0
        for(let i =0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        let index = this.Hash(key)
        let bucket = this.table[index]
        if(!bucket){
            this.table[index]= [[key,value]]
        }else{
            let sameKey = bucket.find(items =>items[0]===key)
            if(sameKey){
                sameKey[1]= value
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        let index = this.Hash(key)
        let bucket = this.table[index]
        if(bucket){
            let sameKey = bucket.find(items => items[0]===key)
            if(sameKey){
                return sameKey[1]
            }
        }
    }

    display(){
        for(let i =0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

const myTable = new HashTable(10)
myTable.set('hayy','heeyy')
myTable.set('see','you')
console.log( myTable.get('hayy'))

myTable.display()