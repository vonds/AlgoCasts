// A graph is set of values that are related in a pair like relationship
// each item is called a node or vertex
// each node is connected by an edge
// graphs represent networks/connections
// there are directed and undirected graphs
// directed graphs go in only one direction // twitter
// undirected graphs can guy either way // facebook
// graphs can be weighted or unweighted
// graphs can be cyclic or acyclic

// const merge = (left, right) => {
//     const results = [];
//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             results.push(left.shift());
//         } else {
//             results.push(right.shift());
//         }
//     }
//     return [...results, ...left, ...right];
// }

// const mergeSort = arr => {
//     if(arr.length === 1) return arr;
//     const center = Math.floor(arr.length / 2);
//     const left = arr.slice(0, center);
//     const right = arr.slice(center); 
//     return merge(mergeSort(left), mergeSort(right)); 
// }

// const removeDuplicates = arr => {
//     if(!Array.isArray(arr)) return `this is not an array. It is a ${typeof arr}`
//     const set = new Set(arr);
//     if(arr.length === set.size) return arr;
//     const results = [];
//     set.forEach(number => {
//         results.push(number);
//     })
//     return mergeSort(results);
// }


// console.log('test 1', removeDuplicates([6, 1, 10, 9, 2, 1, 8, 12]));
// console.log('test 2', removeDuplicates({}));
// console.log('test 3', removeDuplicates(''));
// console.log('test 4', removeDuplicates(1));

// class MyArray {
//     pop() {
//         delete this.data[]
//     }
// }

const isPalindrome3 = str => {
    if(typeof str !== 'string') return 'this is not a string';
    for(let i = 0; i < str.length / 2; i++) {
        return str[i] === str[str.length - 1 - i];
    }
}

console.log(isPalindrome3('leonnoel')); // true;
console.log(isPalindrome3('milkboi')); // false
console.log(isPalindrome3('cowwow')); // false
console.log(isPalindrome3('blloopoollb')); // true
