// add a method remove() to the linked list that deletes a node to the specified index.
class Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value)
    this.tail = this.head;
    this.length = 1; // why is this one? do we always assume that this is one?
  }
  append(value) {
    const newNode = new Node(value)
    //what is going to be the previous one?
    //this.tail.prev = ???
     newNode.prev = this.tail // we add a previous proprty to equal it
    this.tail.next = newNode; // we update it first
    // --> what? so this means that our new node prev has a value of the this.tail
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value)
    //what is going to be the prev one?
    //newNode.prev = null??
    newNode.next = this.head;
    this.head.prev = newNode
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
        array.push(currentNode.value)
        currentNode = currentNode.next
    }
    return array;
  }
  insert(index, value){
    //Check for proper parameters;
    if(index >= this.length) {
      console.log('yes')
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    const leader = this.traverseToIndex(index-1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    // Check Parameters
    //find the leader
    const leader = this.traverseToIndex(index-1);
    //points to the deleted node
    const unwantedNode = leader.next;
    //points to the next node prev pointer
    let nextNode = unwantedNode.next.prev;
    //set the next to the next node
    leader.next = unwantedNode.next;
    //set tht next node previous pointer to the leader;
    nextNode = leader;

    this.length--;
    return this.printList();
  }
}

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
// myLinkedList.remove(2);

