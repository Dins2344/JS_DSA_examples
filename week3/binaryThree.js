class Node{
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}

class binary{
    constructor() {
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }
    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left == null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right==null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    levelOrder(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    delete(value){
        this.root = this.delNode(this.root,value)
    }
    deleteNode(root,value){
        if(root === null){
            return root
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.right&&!root.left){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }

    delNode(root,value){
        if(root == null){
            return root
        }
        if(value < root.value){
            root.left = this.delNode(root.left,value)
        }else if(value > root.value){
            root.right = this.delNode(root.right,value)
        }else{
            if(!root.right&&!root.left){
                return null
            }else if(!root.left){
                return root.right
            }else if (!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.delNode(root.right,root.value)
        }
        return root
    }

    DelNodeOne(root,value){
        if(root == null){
            return root
        }
        if(value < root.value){
            root.left = this.DelNodeOne(root.left,value)
        }else if(value > root.value){
            root.right = this.DelNodeOne(root.right, value)
        }else{
            if(!root.right&&!root.left){
                return null
            }else if(!root.left){
                return root.right
            }else if (!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.DelNodeOne(root.right,root.value)
        }
        return root
    }
    search(root,value){
        if(!root){
            return false
        }
        if(root.value == value){
            return true
        }else if(value < root.value){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }
    }
}

class BinaryNode{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root ===null
    }
    insert(value){
        let node = new BinaryNode(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.value < root.value){
            if(!root.left){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(!root.right){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
 
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    levelOrder(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }
        if(root.value == value){
           return true
        }
        else if(value < root.value){
            return this.search(root.left,value)
        }else if (value > root.value){
            return this.search(root.right,value)
        }
        
    }
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root == null){
            return root
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }else if (value > root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            else if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.value)
        }
        return root
    }


}
const myBinary = new BinaryTree()

myBinary.insert(20)
myBinary.insert(10)
myBinary.insert(5)
myBinary.insert(25)
myBinary.insert(11)


console.log(myBinary.root)

console.log(myBinary.search(myBinary.root,11));
myBinary.preOrder(myBinary.root)
myBinary.delete(5)
myBinary.levelOrder()
