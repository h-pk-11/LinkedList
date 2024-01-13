import Node from "./Node.js";
class LinkedList {
  constructor(head) {
    if (head instanceof Node) {
      this.head = head;
    } else {
      this.head = null;
    }
  }

  preprend(node) {
    try {
      if (node instanceof Node) {
        if (this.head === null) {
          node.setNextNode(null);
        } else {
          node.setNextNode(this.head);
        }
        this.head = node;
      } else {
        throw Error("node is invalid");
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  append(node) {
    try {
      if (node instanceof Node) {
        if (this.head === null) {
          this.head = node;
        } else {
          let newNode = this.head;
          while (newNode.getNextNode() !== null) {
            newNode = newNode.getNextNode();
          }
          newNode.setNextNode(node);
        }
        node.setNextNode(null);
      } else {
        throw Error("node is invalid");
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  size() {
    if (this.head === null) {
      return 0;
    }
    let count = 0;
    let newNode = this.head;
    while (newNode !== null) {
      newNode = newNode.getNextNode();
      count++;
    }
    return count;
  }

  getHead() {
    return this.head;
  }

  tail() {
    if (this.head === null) {
      return this.head;
    }
    let newNode = this.head;
    while (newNode.getNextNode() !== null) {
      newNode = newNode.getNextNode();
    }
    return newNode;
  }

  at(index) {
    if (index === 0) {
      return this.head;
    }
    if (this.head === null) {
      return null;
    }
    let i = 1;
    let newNode = this.head.getNextNode();
    while (newNode !== null) {
      if (i === index) {
        return newNode;
      }
      newNode = newNode.getNextNode();
      i++;
    }
    return null;
  }

  pop() {
    if (this.head === null) {
      return;
    }
    let newNode = this.head;
    let nextNewNode = newNode.getNextNode();
    while (nextNewNode.getNextNode() !== null) {
      newNode = nextNewNode;
      nextNewNode = nextNewNode.getNextNode();
    }
    newNode.setNextNode(null);
    return nextNewNode;
  }

  contains(value) {
    if (this.head === null) {
      return false;
    }
    let newNode = this.head;
    while (newNode !== null) {
      if (newNode.getValue() === value) {
        return true;
      }
      newNode = newNode.getNextNode();
    }
    return false;
  }

  find(value) {
    if (this.head === null) {
      return null;
    }
    let valueStr = value.toString();
    let newNode = this.head;
    let count = 0;
    while (newNode !== null) {
      if (newNode.toString() === valueStr) {
        return count;
      }
      count++;
      newNode = newNode.getNextNode();
    }
    return null;
  }

  toString() {
    if (this.head === null) {
      return "null";
    }
    let newNode = this.head;
    let listString = "";
    while (newNode !== null) {
      listString += "(" + newNode.getValue() + ") --> ";
      newNode = newNode.getNextNode();
    }
    listString += "null";
    return listString;
  }

  insertAt(value, index) {
    let size = this.size();
    let node = new Node(value);
    if (index < 0 || index > size - 1) {
      console.log(`cant not insert out of range index`);
      return;
    }
    if (index === 0) {
      this.preprend(node);
      return;
    }
    if (this.head === null) {
      console.log(`can not insert an empty list at index ${index} > 0`);
      return;
    }
    let newNode = this.head;
    let nextNewNode = newNode.getNextNode();
    let i = 0;
    while (nextNewNode !== null) {
      if (i === index - 1) {
        node.setNextNode(nextNewNode);
        newNode.setNextNode(node);
        return;
      }
      newNode = nextNewNode;
      nextNewNode = nextNewNode.getNextNode();
      i++;
    }
  }

  remove(index) {
    let size = this.size();
    if (index < 0 || index > size - 1) {
      console.log(`can not remove out of range`);
      return null;
    }
    if (this.head === null) {
      console.log(`can not remove an empty list`);
      return null;
    }
    if (index === 0) {
      let removeNode = this.head;
      this.head = this.head.getNextNode();
      return removeNode;
    }
    let node = this.head;
    let nextNode = node.getNextNode();
    let i = 0;
    while (nextNode !== null) {
      if (i === index - 1) {
        node.setNextNode(nextNode.getNextNode());
        return nextNode;
      }
      node = nextNode;
      nextNode = nextNode.getNextNode();
      i++;
    }
    return null;
  }
}

let list = new LinkedList(new Node(25));
console.log(list.toString());
console.log("Current size: ", list.size(), "\n");

list.preprend(new Node(35));
list.append(new Node([0, 1]));
list.preprend(new Node("Sjk"));
console.log(list.toString());
console.log("Current size: ", list.size(), "\n");

list.append(new Node("A"));
list.append(new Node(21));
console.log(list.toString());
console.log("Current size: ", list.size(), "\n");

console.log("Current head: ", list.getHead().toString(), "\n");

console.log(list.toString());
console.log("Current tail: ", list.tail().toString(), "\n");

console.log(list.toString());
console.log("at index 1: ", list.at(1).toString(), "\n");

console.log(list.toString());
console.log("pop: ", list.pop().toString());
console.log(list.toString(), "\n");

console.log(list.toString());
console.log("pop: ", list.contains("A"), "\n");

console.log(list.toString());
console.log("find [1, 0]: ", list.find([0, 1]), "\n");

console.log("before: ", list.toString());
console.log('insert "misty" at index 3');
list.insertAt("misty", 3);
console.log("after: ", list.toString(), "\n");

console.log("before: ", list.toString());
console.log("remove at index 2");
list.remove(2);
console.log("after: ", list.toString(), "\n");
