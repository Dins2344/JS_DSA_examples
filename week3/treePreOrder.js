class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class Tree{
    constructor() {
        this.root = null
    }
    insert(value){
        let node = new Node(value)
        if(this.root == null){
            this.root = node
        }
        else{
            this.insertion(node,this.root)
        }
    }
    insertion(node,root){
        if(node.value < root.value){
            if(!root.left){
                root.left = node
            }else{
                this.insertion(root.left,node)
            }
        }else{
            if(!root.right){
                root.right = node
            }else{
                this.insertion(root.right,node)
            }
        }
    }

    preOrder(root){
        if(!root){
            return []
        }
        let result = []
        result.push(root.value)
        if(root.left !== null){
            result.push(...this.preOrder(root.left))
        }
        if(root.right !== null){
            result.push(...this.preOrder(root.right))
        }
        return result
    }
}

const MyTree = new Tree()
MyTree.insert(20)
MyTree.insert(30)
MyTree.insert(40)
MyTree.insert(50)
console.log(MyTree.preOrder(MyTree.root))