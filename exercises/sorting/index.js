// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// function bubbleSort(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < (arr.length - i - 1); j++) {
//             if(arr[j] > arr[j + 1]) {
//                 const lesser = arr[j + 1];
//                 arr[j + 1] = arr[j];
//                 arr[j] = lesser;
//             }
//         }
//     }
//     return arr;
// }

// function selectionSort(arr) {

// }

// function mergeSort(arr) {

// }

// function merge(left, right) {

// }


// function reverseStr(str) {
//      return str.split('').reduce((reversed, character) => {
//           return character + reversed;
//       }, '');
// }



// module.exports = { bubbleSort, selectionSort, mergeSort, merge };














// create a function that takes in a string and reverses the characters


const reverseString6 = str => {
   let reverse = '';
   for(let i = str.length - 1; i >= 0; i--) {
       reverse += str[i];
   }
   return reverse;
}

// test cases
console.log(reverseString6('ym sdneirflrig evol taht gnos')); // year up is syrup
// stringReverse2('purys si pu raey');
// stringReverse3('purys si pu raey');
// stringReverse4('purys si pu raey');
// stringReverse5('purys si pu raey');
// stringReverse6('purys si pu raey');
