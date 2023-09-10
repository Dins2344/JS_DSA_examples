class TrieNode{
    constructor(){
        this.children = new Map()
        this.endOfNode = false
    }
}

class MyTrie{
    constructor (){
        this.root = new TrieNode()
    }

    insert(word){
        let curr = this.root
        for(let i = 0; i<word.length;i++){
            let char = word.charAt(i)
            let node = curr.children.get(char)
            if(!node){
                node = new TrieNode()
                curr.children.set(char,node)
            }
            curr = node
        }
        this.endOfNode = true
    }

    insertTwo(word){
        let curr = this.root
        for(let i=0;i<word.length;i++){
            let char = word[i]
            let node = curr.children.get(char)
            if(!node){
                node = new TrieNode()
                curr.children.set(char,node)
                curr = node
            }
            this.endOfNode = false
        }

    }
    search(word){
        let curr = this.root
        for(let i =0;i<word.length;i++){
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

const trie = new MyTrie()
trie.insert('dinson')


console.log(trie.search('vinson'))