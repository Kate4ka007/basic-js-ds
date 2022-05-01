const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.unit = {};
  }

  getUnderlyingList() {
 //return this.unit[this.head]
  }

  enqueue(unit) {
    this.unit[this.tail] = unit;
    
  }

  dequeue() {
   let elem = this.unit[this.head]
   delete this.unit[this.head]  
   return elem
  }
}

module.exports = {
  Queue
};
