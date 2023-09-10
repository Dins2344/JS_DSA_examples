class Node{
    constructor(value) {
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
        return this.root ===null
    }

    insert(value){
        const node = new Node(value)
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
                this.insertNode(root.left,node)
            }
        }else {
            if(root.right == null){
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
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value);
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
    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

    delete(value){
        this.root= this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root == null){
            return root
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.right){
                return root.left
            }else if(!root.left){
                return root.right
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }
    validation(root){
        return this.validate(root,-Infinity,Infinity)
    }
    validate(root,left,right){
        if(!root){
            return true
        }
        if(!(root.value > left && root.value < right)){
            return false
        }
        return this.validate(root.left,left,root.value) && this.validate(root.right,root.value,right)
    }

    search(root,value){
        if(!root){
            return false
        }
        if(root.value === value){
            return true
        }else if(value < root.value){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }
    }

    closestValue(root,target){
        let curr = root
        let closest = root.value

        while(curr !== null){
            if(Math.abs(target - closest)>Math.abs(target - curr.value)){
                closest = curr.value
            }
            if(target < curr.value){
                curr = curr.left
            }else if(target > curr.value){
                curr = curr.right
            }else{
                break
            }
        }
        console.log(closest)
    }

    
}
const myBinary = new binary()
myBinary.insert(20)
myBinary.insert(10)
myBinary.insert(9)
myBinary.insert(30)

// console.log(myBinary.root)
// console.log(myBinary.search(myBinary.root,10))

// myBinary.preOrder(myBinary.root)
// myBinary.inOrder(myBinary.root)
// myBinary.postOrder(myBinary.root)
myBinary.levelOrder()
myBinary.delete(9)
myBinary.levelOrder()
console.log(myBinary.validation(myBinary.root))
myBinary.closestValue(myBinary.root,8)


class NodeOne{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}
class BinaryOne{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root == null
    }
    insert(value){
        const node = new NodeOne(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertAgain(this.root,node)
        }
    }
    insertAgain(root,node){
        if(node.value < root.value){
            if(root.left == null){
                root.left = node
            }else{
                this.insertAgain(root.left,node)
            }
        }else{
            if(root.right == null){
                root.right = node
            }else{
                this.insertAgain(root.right,node)
            }
        }
    }

    searchOne(root,value){
        if(!root){
            return false
        }
        if(root.value == value){
            return true
        }else if (value < root.value){
            return this.searchOne(root.left , value)
        }else{
            return this.searchOne(root.right ,value)
        }
    }

    min (root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
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

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(!root){
            return root
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }else if(!root.left){
                return root.right
            }else if (!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }
}

