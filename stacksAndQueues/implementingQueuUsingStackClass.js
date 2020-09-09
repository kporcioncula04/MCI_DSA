// push(x) -- Push element x to the back of queue.
// pop() -- Removes the element from in front of queue.
// peek() -- Get the front element.
// empty() -- Return whether the queue is empty.

class CrazyQueue{
  constructor(){
    this.first = [];
    this.last = [];
  }

  //adding elem to the end of the queue -- push(x)
  enqueue(value){
    const length = this.first.length

    for(let i = 0; i < length; i++){
      this.last.push(this.first.pop())
    }

    this.last.push(value)
    return this;
  }

  //remove the first elem in the queue -- pop()
  dequeue(){
    const length = this.last.length;

    for(let i = 0; i < length; i++){
      this.first.push(this.last.pop())
    }

    this.first.pop()
    return this;
  }

  peek(){
    if(this.last.length > 0){
      return this.last[0];
    }

    return this.first[this.first.length - 1];
  }
}
