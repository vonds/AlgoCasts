// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.
// If the value isn't in the tree return null.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) return this;
    
    if (this.data < data && this.right) {
      return this.right.contains(data);
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }

    return null;
  }
}

module.exports = Node;

class Stack {
  peek() {
    return this.data[this.data.length - 1];
  }
}

class Node {
  add(data) {
    this.children.push(new Node(data));
  }
}

class LinkedList {
  removeFirst() {
    if(!this.head) return;
    this.head = this.head.next;
  }

  getLast() {
    if(!this.head) return null;
    let node = this.head;
    while(node) {
      if(!node.next) return node;
      node = node.next;
    }
  }

  removeAt(index) {
    if(!this.head) return;
    if(index === 0) return this.removeFirst();
    let previous = this.getAt(index - 1);
    if(!previous || !previous.next) return;
    previous.next = previous.next.next;
  }

  removeLast() {
    if(!this.head) return;
    if(!this.head.next) return this.clear();
    let previous = this.head;
    let node = this.head.next;
    while(node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertAt(data, index) {
    if(!this.head) return new Node(data);
    if(index === 0) this.head = new Node(data, this.head);
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while(node) {
      yield node;
      node = node.next;
    }
  }

  midPoint() {
    let slow = this.head;
    let fast = this.head;
    while(fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
} 

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if(data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if(data > this.data && this.right) {
      this.right.insert(data);
    } else if(data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if(this.data === data) return this;

    if(this.data < data && this.right) {
      return this.right.contains(data);
    } else if(this.data > data && this.left) {
      return this.left.contains(data);
    }

    return null;
  }
}
