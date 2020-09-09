class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value){
    const newNode = new Node(value);

    if(this.length === 0){
      this.fist = newNode;
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode;
    }

    this.length++;
    return this;
  }
  dequeue(){
    if(!this.first){
      return null
    }

    if(this.first === this.last){
      this.last = null;
    }

    this.first = this.first.next
    this.length--;
    return this;
  }

  //another possible solution
  // if(this.length > 0){
  //   this.first = this.first.next
  // this.length--;
  // }

  // if(this.length === 1){
  //   this.last = null;
  // }

  isEmpty(){
    if(this.first){
      return false;
    } else{
      return true
    }
  }
}

const myQueue = new Queue();
myQueue.peek()
myQueue.enqueue(10)
myQueue.enqueue(12)


//Joy
//Matt
//Pavel
//Samir

