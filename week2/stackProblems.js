class Stack{
    constructor(){
        this.undo = []
        this.redo = []
    }

    reading(value){
        this.undo[this.undo.length]=value
    }
    undoAdd(){
        this.redo[this.redo.length]=this.undo[this.undo.length-1]
        this.undo.length--
    }
    redoAdd(){
        this.undo[this.undo.length]=this.redo[this.redo.length-1]
        this.redo.length--
    }
    peek(){
        console.log(this.undo[this.undo.length-1]);
    }

    printUndo(){
        console.log(this.undo);
    }
    printRedo(){
        console.log(this.redo);
    }
}
const myStack = new Stack()
myStack.reading('d')
myStack.reading('i')
myStack.reading('n')
myStack.reading('s')
myStack.printUndo()
myStack.undoAdd()
myStack.printUndo()
myStack.printRedo()
myStack.redoAdd()
myStack.printUndo()
