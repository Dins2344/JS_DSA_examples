class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        let index = this.hash(key)
        this.table[index] = value
    }
    get(key){
        let index = this.hash(key)
        return this.table[index]
    }
    remove(key){
        let index = this.hash(key)
        this.table[index] = null
    }

    display(){
        for(let i = 0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i+':'+this.table[i])
            }
        }
    }
}

class HashTableOne{
    constructor(size) {
        this.table = new Array(size)
        this.size = size   
    }
    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        let index = this.hash(key)
        this.table[index]= value
    }

    get(key){
        let index = this.hash(key)
        return this.table[index]
    }
    display(){
        for(let i = 0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i+' : '+this.table[i]);
            }
        }
    }
}

const Hash = new HashTableOne(50)
const MyHash = new HashTable(10)
Hash.set('namee','dinson')
Hash.set('age','18')
Hash.set('place','thrissur')
Hash.set('sample','dinson')
console.log(Hash.get('age'))
Hash.display()

// console.log('this is myHash : '+ MyHash.display());