// https://www.codewars.com/kata/functional-binary-trees
// https://www.codewars.com/kata/527c1fc78699012e43000cc8

function BinaryTree() {};

function BinaryTreeNode(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
  Object.freeze(this);
}

BinaryTreeNode.prototype = new BinaryTree();
BinaryTreeNode.prototype.constructor = BinaryTreeNode;

Object.assign(BinaryTreeNode.prototype, {
  isEmpty: function() {
    return false
  },
  depth: function () {
    return 1 + Math.max(this.left.depth(), this.right.depth());
  },
  count: function () {
    return 1 + this.left.count() + this.right.count();
  },
  inorder: function (fn) {
    this.left.inorder(fn);
    fn.call(null, this.value);
    this.right.inorder(fn);
  },
  preorder: function (fn) {
    fn.call(null, this.value);
    this.left.preorder(fn);
    this.right.preorder(fn);
  },
  postorder: function (fn) {
    this.left.postorder(fn);
    this.right.postorder(fn);
    fn.call(null, this.value);
  },
  contains: function (x) {
    return (this.value === x) || (x <= this.value ? this.left.contains(x) : this.right.contains(x));
  },
  insert: function (x) {
    if (x < this.value) {
      return new BinaryTreeNode(this.value, this.left.insert(x), this.right);
    } else {
      return new BinaryTreeNode(this.value, this.left, this.right.insert(x));
    }
  },
  max: function () {
    return this.right.value == null ? this.value : this.right.max();
  },
  remove: function (x) {
    if (!this.contains(x)) {
      return this;
    } else if (x === this.value) {
      if (!(this.left instanceof EmptyBinaryTree)) {
        const max = this.left.max();
        return new BinaryTreeNode(max, this.left.remove(max), this.right);
      } else if (!(this.right instanceof EmptyBinaryTree)) {
        return this.right;
      } else {
        return new EmptyBinaryTree();
      }
    } else if (x < this.value) {
      return new BinaryTreeNode(this.value, this.left.remove(x, true), this.right);
    } else {
      return new BinaryTreeNode(this.value, this.left, this.right.remove(x, true));
    }
  }
});

function EmptyBinaryTree() {
  Object.freeze(this);
}

EmptyBinaryTree.prototype = new BinaryTree();
EmptyBinaryTree.prototype.constructor = EmptyBinaryTree;

function truthy() { return true; }
function falsy() { return false; }
function zeroth() { return 0; }
function noop()   { return; }

Object.assign(EmptyBinaryTree.prototype, {
  isEmpty: truthy,
  depth: zeroth,
  count: zeroth,
  max: noop,
  inorder: noop,
  preorder: noop,
  postorder: noop,
  contains: falsy,
  insert: function(x) {
    return new BinaryTreeNode(x, this, this);
  },
  remove: function () {
    return this;
  }
});
