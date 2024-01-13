export default class Node {
  constructor(value) {
    this.value = value;
    this.pNext = null;
  }

  getValue() {
    return this.value;
  }

  setValue(value) {
    this.value = value;
  }

  getNextNode() {
    return this.pNext;
  }

  setNextNode(node) {
    this.pNext = node;
  }

  toString() {
    return `${this.value}`;
  }
}
