class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hashing(key){
        let total = 0
        for(let i = 0;i<key.length;i++){
            total =+ key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        let index = this.hashing(key)

        let bucket = this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            let sameKey = bucket.find(item => item[0]===key)
            if(sameKey){
                sameKey[1]=value
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        let index = this.hashing(key)
        let bucket = this.table[index]
        if(bucket){
            let sameKey = bucket.find(item=>item[0]===key)
            if(sameKey){
                return sameKey[1]
            }
        }
        return undefined
    }

    remove(key){
        let index = this.hashing(key)
        let bucket = this.table[index]
        if(bucket){
            let sameKey = bucket.find(item => item[0]===key)
            if(sameKey){
                bucket.splice(bucket.indexOf(sameKey),1)
            }
        }
    }
    display(){
        for(let i =0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i+' : '+this.table[i]);
            }
        }
    }
}


class HashTableOne{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    Hashing(key){
        let total = 0
        for(let i =0;i<key.length;i++){
            total+= key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        let index = this.Hashing(key)
        let bucket = this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            let sameKey = bucket.find(items=> items[0]===key)
            if(sameKey){
                console.log('samekey:'+sameKey);
                sameKey[1]=value
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        let index = this.Hashing(key)
        let bucket = this.table[index]
        if(bucket){
            let sameKey = bucket.find(items => items[0]===key)
            if(sameKey){
                return sameKey[1] 
            }
        }
        return undefined
    }
    remove(key){
        let index = this.Hashing(key)
        let bucket = this.table[index]
        if(bucket){
            let sameKey = bucket.find(items => items[0]===key)
            if(sameKey){
                bucket.splice(bucket.indexOf(sameKey),1)
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




const table = new HashTableOne(50)

table.set('njaan','dinson')
table.set('nee','arraa..?')
table.set('nee','tharas')

console.log( table.get('een'))
table.display()