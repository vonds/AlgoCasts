// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    add(data) {
        this.children.push(new Node(data));
    }
}

class Tree {
    traverseBF(fn) {
        const arr = [this.root];
        while(arr.length) {
            const node = arr.shift();
            arr.push(...node.children);
            fn(node);
        }
    }
}



const merge = (left, right) => {
    const results = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }
    return [...results, ... left, ...right];
}

const mergeSort = arr => {
    if (arr.length === 1) return arr;
    const center = Max.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);
    return merge(mergeSort(left), mergeSort(right));
}

module.exports = { Tree, Node };
