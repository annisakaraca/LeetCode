function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var invertTree = function(root) {
// base case
if (!root.right && !root.left) {
  return new TreeNode(root.val);
}
let newTree = new TreeNode(root.val);
if (root.right) {
  newTree.left = invertTree(root.right);
}
if (root.left) {
  newTree.right = invertTree(root.left);
}
return newTree;
};

// tests
let tree = new TreeNode(4);
tree.left = new TreeNode(2);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(3);
tree.right = new TreeNode(7);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(9);

let testTree = invertTree(tree);
console.log(testTree);