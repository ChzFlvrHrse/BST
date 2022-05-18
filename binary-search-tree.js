// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    } else if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = new TreeNode(val);
        } else {
            this.insert(val, currentNode.left);
        }
    } else if (val > currentNode.val) {
        if (!currentNode.right) {
          currentNode.right = new TreeNode(val);
        } else {
            this.insert(val, currentNode.right);
        }
    }

  }

  search(val, currentNode = this.root) {
    if (currentNode === null) return false;
    if (val === currentNode.val) return true;
    if (val < currentNode.val) return this.search(val, currentNode.left);
    if (val >= currentNode.val) return this.search(val, currentNode.right);
  }


  preOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    console.log(currentNode.val)
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }


  inOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }


  postOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val)
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal(currentNode=this.root) {
    if (!currentNode) return;

    let queue = []
    queue.push(currentNode);

    while (queue.length) {

      let node = queue.shift();
      console.log(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right)
      }
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal(currentNode=this.root) {
    if (!currentNode) return;

    let stack = [];
    stack.push(currentNode);

    while (stack.length) {

      let node = stack.pop();
      console.log(node.val);

      if (node.left) {
        stack.push(node.left);
      }

      if (node.right) {
        stack.push(node.right);
      }
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
