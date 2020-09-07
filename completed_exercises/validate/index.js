// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  if (max !== null && node.data > max) return false;
  if (min !== null && node.data < min) return false;
  if (node.left && !validate(node.left, min, node.data)) return false;
  if (node.right && !validate(node.right, node.data, max)) return false;
  
  return true;
}

// 1
function validate(node, min = null, max = null) {
  if(max !== null && node.data > max) return false;
  if(min !== null && node.data < min) return false;
  if(node.left && !validate(node.left, min, node.data)) return false;
}

// 2
function validate(node, min = null, max = null) {
  if(max !== null && node.data > max) return false;
  if(min !== null && node.data < min) return false;
  if(node.left && !)
}

// 3
function validate(node, min = null, max = null) {
  if(max !== null && node.data > max) return false;
  if(min !== null && node.data < min) return false;
}

// 4
function validate(node, min = null, max = null) {
  if(max !== null && node.data > max) return false;
  if(min !== null && node.data < min) return false;
}

// 5
function validate(node, min = null, max = null) {
  if(max !== null && node.data > max) return false;
  if(min !== null && node.data < min) return false;
}

// 6
function validate(node, min = null, max = null) {
  if(max !== null && node.data > max) return false;
  if(min !== null && node.data < min) return false;
}

// 7
function validate(node, min = null, max = null) {
  if(max !== null && node.data > max) return false;
  if(min !== null && node.data < min) return false;
}

// 8
function validate(node, min = null, max = null) {
  if(max !== null && node.data > max) return false;
  if(min !== null && node.data < min) return false;
}

// 9
function validate(node, min = null, max = null) {
  if(max !== null && node.data > max) return false;
  if(min !== null && node.data < min) return false;
}

// 10
function validate(node, min = null, max = null) {
  if(max !== null && node.data > max) return false;
  if(min !== null && node.data < min) return false;
}

module.exports = validate;
