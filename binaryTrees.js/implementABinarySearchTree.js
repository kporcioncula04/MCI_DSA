class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  insert(value){
    const newNode = new Node(value)

    if(!this.root){
      this.root = newNode
    } else {
      let currNode = this.root;

      while(currNode){
               //left
        if(value < currNode.value){
          //assign it to the new node
          if(!currNode.left){
            currNode.left = newNode;
            return this
          }
          //if there is sometihng to the left
          //currnode = currnode.left
          //update and shift over
          currNode = currNode.left;
        } else {
          if(!currNode.right){
            currNode.right = newNode;
            return this;
          }
          currNode = currNode.right
        }
      }
    }
  }
}
