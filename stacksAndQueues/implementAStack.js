class Stack(){
  constructor(){
    this.data = [];
  };

  peek(){
    return this.data[this.data.length - 1]
  }

  push(value){
    return this.data.push(value)
  }

  pop(){
    this.data.pop()
    return this;
  }

}
const myStack = new Stack();
myStack.peek();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();


// for reference: https://medium.com/better-programming/implementing-a-stack-in-javascript-73d1aa0483c1
