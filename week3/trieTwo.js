class Node {
    constructor(){
        this.children = new Map()
        this.endOfNode = false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let curr = this.root
        for(let i=0;i<word.length;i++){
            let char = word[i]
            let node = curr.children.get(char)
            if(!node){
                node = new Node()
                curr.children.set(char,node)
            }
            curr = node
        }
        this.endOfNode = true
    }
    search(word){
        let curr = this.root
        for(let i = 0;i<word.length;i++){
            let char = word[i]
            let node = curr.children.get(char)
            if(!node){
                return false
            }
            curr = node
        }
        return true
    }
}

const myTrie = new Trie()
myTrie.insert('brototype')

console.log(myTrie.search('broto'))