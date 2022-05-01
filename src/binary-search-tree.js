const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor(data) {
    this.roots = null;
    this.data = data;
  }

  root() {
    this.roots === null;
    return this.roots;
  }

  add(data) {
    const node = this.roots;
    if (node === null) {
      this.roots = new Node(data);
      return;
    } else {

      const tree = (node) => {
        if (data < node.data) {
          if (node.left !== null) {
            return tree(node.left);
          } else if (node.left === null) {
            node.left = new Node(data);
            return;            
          }
        } else if (data > node.data) {
          if (node.right !== null) {
            return tree(node.right);
          } else if (node.right === null) {
            node.right = new Node(data);
            return;            
          }
        } else {
          return null;
        }
      };
      return tree(node);
    }
  }

  has(data) {
    let current = this.roots;
    while (current) {
      if (data === current.data) {
        return true;
      } else if (data > current.data) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return false;
  }

  find(data) {
    let actual = this.roots;
    while (actual.data !== data) {
      if (data < actual.data) {
        actual = actual.left;
      } else {
        actual = actual.right;
      }
      if (actual === null) {
        return null;
      }
    }
    return actual;
  }

  remove(data) {
    const nodRemove = (node, data) => {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        if (node.right == null && node.left == null) {
          return null;
        }
        else if (node.right == null) {
          return node.left;
        }
        else if (node.left == null) {
          return node.right;
        }        
        let provNode = node.right;
        while (provNode.left !== null) {
          provNode = provNode.left;
        }
        node.data = provNode.data;
        node.right = nodRemove(node.right, provNode.data);
        return node;
      } else if (data > node.data) {
        node.right = nodRemove(node.right, data);
        return node;
      } else {
        node.left = nodRemove(node.left, data);
        return node;
      }
    };
    this.roots = nodRemove(this.roots, data);
  }

  min() {
    let actual = this.roots;
    while (actual.left !== null) {
      actual = actual.left;
    }
    return actual.data;
  }

  max() {
    let actual = this.roots;
    while (actual.right !== null) {
      actual = actual.right;
    }
    return actual.data;
  }
}

module.exports = {
  BinarySearchTree,
};
