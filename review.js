class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class binary{
    constructor() {
        this.root = null
    }

    isEmpty(){
        return this.root == null
    }

    insert(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.value < root.value){
            if(root.left == null){
                root.left = node
            }else{
                this.insertNode(root.left, node)
            }
        }else{
            if(root.right == null){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

    
}