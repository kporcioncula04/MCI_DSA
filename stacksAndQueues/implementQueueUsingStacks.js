//implement a queue using stacks
// Implement the following operations of a queue using stacks.

// push(x) -- Push element x to the back of queue.
// pop() -- Removes the element from in front of queue.
// peek() -- Get the front element.
// empty() -- Return whether the queue is empty.
// Example:

// MyQueue queue = new MyQueue();

// queue.push(1);
// queue.push(2);
// queue.peek();  // returns 1
// queue.pop();   // returns 1
// queue.empty(); // returns false
// Notes:

// You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
// You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).

//why do we need this?  They serve to reverse arrival order of the elements and one of them store the queue elements in their final order.
var MyQueue = function() {
  this.stack1 = [];
  this.stack2 = [];
}

MyQueue.prototype.push = function(x){
  return this.stack1.push(x)
}

MyQueue.prototype.pop = function(){
  //lets take it out of stack 2
  while(this.stack1.length !== 0){
    this.stack2.push(this.stack1.pop())
  }

  var pop = this.stack2.pop()

  while(this.stack2.length !== 0){
    this.stack1.push(this.stack2.pop())
  }

  return pop;
}

MyQueue.prototype.peek = function() {
	while(this.stack1.length !== 0){
		this.stack2.push(this.stack1.pop())
	}

	var pop = this.stack2.pop()
	this.stack2.push(pop)
	while(this.stack2.length !== 0){
		this.stack1.push(this.stack2.pop())
	}

	return pop
};

MyQueue.prototype.empty = function(){
  return this.stack1.length === 0 ? true : false
}
//for reference : https://leetcode.com/problems/implement-queue-using-stacks/solution/
