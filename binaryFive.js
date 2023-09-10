class Node{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}

class binary{
    constructor (){
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
            this.insertion(this.root,node)
        }
    }
    insertion(root,node){
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
    levelOrderOne(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    min(root){
        if(root.left == null){
            return root.value
        }
        this.min(root.left)
    }
    max(root){
        if(root.right == null){
            return root.value
        }
        this.max(root.right)
    }

    delete(value){
        this.root = this.deleteNode(this.root , value)
    }
    deleteNode(root,value){
        if(root == null){
            return root
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }
        else if(value > root.value){
            root.right = this.deleteNode(root.right, value)
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
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }

    deleteOne(value){
        this.root = this.deleteNodeOne(this.root,value)
    }
    deleteNodeOne(root,value){
        if(!root){
            return null
        }
        if(value < root.value){
            root.left = this.deleteNodeOne(root.left,value)
        }
        else if(value > root.right){
            root.right = this.deleteNodeOne(root.right, value)
        }
        else{
            if(!root.right && !root.left){
                return null
            }
            else if(!root.right){
                return root.left
            }
            else if(!root.left){
                return root.right
            }
            root.value = this.min(root.right)
            root.right = this.deleteNodeOne(root.right,root.value)
        }
        return root
    }

    validate(root){
        return this.validation(root,-Infinity,Infinity)
    }
    validation(root,left,right){
        if(!root){
            return true
        }
        if(!(root.value > left && root.value < right)){
            return false
        }
        return this.validation(root.left,left,root.value) && this.validation(root.right,root.value,right)
    }


}