const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  // Your code here
  let currentNode = rootNode;
  while (currentNode.left) {
    currentNode = currentNode.left;
  }
  return currentNode.val;
}

function findMaxBST(rootNode) {
  // Your code here
  let currentNode = rootNode;
  while (currentNode.right) {
    currentNode = currentNode.right;
  }
  return currentNode.val;
}

function findMinBT(rootNode) {
  // Your code here
  let currentMin = rootNode;
  let currentNode;
  let queue = [rootNode];

  while (queue.length) {
    currentNode = queue.shift();
    if (currentNode.val <= currentMin.val) {
      currentMin = currentNode;
    }
    if (currentNode.left) {
      queue.push(currentNode.left)
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  return currentMin.val;
}

function findMaxBT(rootNode) {
  let currentMax = rootNode;
  let currentNode;
  let queue = [rootNode];

  while (queue.length) {
    currentNode = queue.shift();
    if (currentNode.val >= currentMax.val) {
      currentMax = currentNode;
    }
    if (currentNode.left) {
      queue.push(currentNode.left)
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  return currentMax.val;
}

function getHeight(rootNode) {
  let stackLeft = [];
  let stackRight = [];
  let currentLeft = rootNode;
  // let currentLeft;
  let currentRight = rootNode;
  while (currentLeft.left) {
    stackLeft.push(currentLeft.left);
    currentLeft = currentLeft.left;
  }
  while (currentRight.right) {
    stackRight.push(currentRight.right);
    currentRight = currentRight.right;
  }
  if (stackLeft.length > stackRight.length) return stackLeft.length;
  else return stackRight.length;
}

function countNodes(rootNode) {
  let currentNode;
  let stack = [rootNode];
  let counter = 0;
  while (stack.length) {
    currentNode = stack.pop()
    counter++;
    if (currentNode.left) {
      stack.push(currentNode.left);
    }
    if (currentNode.right) {
      stack.push(currentNode.right);
    }
  }
  return counter;
}

function balancedTree(rootNode) {
  let stackLeft = [];
  let stackRight = [];
  let currentLeft = rootNode;
  let currentRight = rootNode;

  while (currentLeft.left) {
    stackLeft.push(currentLeft.left);
    currentLeft = currentLeft.left;
  }
  while (currentRight.right) {
    stackRight.push(currentRight.right);
    currentRight = currentRight.right;
  }
  return stackLeft.length === stackRight.length;
}

function getParentNode(rootNode, target) {
  let queue = [rootNode];
  if (rootNode.val === target) return null;

  while (queue.length) {
    let node = queue.shift();
    if(node.left){
    if (node.left.val === target) return node;
    else queue.push(node.left);
    }
    if(node.right){
    if (node.right.val === target) return node;
    else queue.push(node.right)
    }
  }
  return undefined;
}


function inOrderPredecessor(rootNode, target) {
  // Your code here
  let array = [];
  const helper = currentNode => {
    if (!currentNode) return;
    helper(currentNode.left);
    array.push(currentNode.val);
    helper(currentNode.right);
  }
  helper(rootNode);
  if(array.indexOf(target)){
    return array[array.indexOf(target) - 1];
  }
  else return null;
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  let parentNode = getParentNode(rootNode, target);
  // Undefined if the target cannot be found
  if (parentNode === undefined) {
    return undefined;
  }

  let node;
  let bool;

  // Set target based on parent

  if (parentNode && parentNode.left.val === target) node = parentNode.left;
  else if (parentNode && parentNode.right.val === target) node = parentNode.right;

  if (node = parentNode.left) {
    bool = true;
  } else {
      bool = false;
  }

  // Case 0: Zero children and no parent:
  //   return null
  if (!parentNode && !node.left && !node.right) {
    return null;
  }
  // Case 1: Zero children:
  //   set the parent that points to it to null
  if (parentNode && !node.left && !node.right) {
    if (parentNode.left.val === target) {
      parentNode.left = null;
    } else if (parentNode.right.val === target) {
        parentNode.right = null;
    }
  }
  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor
  if (parentNode && node.right && node.left) {
    let inOrder = inOrderPredecessor(rootNode, target);
    deleteNodeBST(rootNode, inOrder);
    node.val = inOrder;
  }
  // Case 3: One child:
  //   Make the parent point to the child
  if (parentNode && (node.left || node.right)) {
    if (node.left) {
      parentNode.right = node.left;
    } else {
        parentNode.left = node.right;
    }
  }
}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST
}
