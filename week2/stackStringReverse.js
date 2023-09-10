class StackString {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items[this.items.length] = value;
  }
  pop() {
    let lastelement = this.items[this.items.length - 1];
    this.items.length--;
    return lastelement;
  }

  print() {
    console.log(this.items);
  }
}
let string = "dinson";
const myStack = new StackString();
for (let i = 0; i < string.length; i++) {
  myStack.push(string[i]);
}
myStack.print();

for (let i = 0; i < string.length; i++) {
  console.log(myStack.pop());
}
