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
//     for(let i = 0; i < arr.length; i++) {
//         let indexOfMin = i;

//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[j] < arr[indexOfMin]) {
//                 indexOfMin = j;
//             }
//         }

//         if(indexOfMin !== i) {
//             let lesser = arr[indexOfMin];
//             arr[indexOfMin] = arr[i];
//             arr[i] = lesser;
//         }
//     }

//     return arr;
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

// // 1
const isPalindrome = str => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}


// // 2
// const isPalindrome2 = str => {
//     return  str.split('').every((character, index) => {
//         return character === str[str.length - index - 1];
//     }); 
// }

// // 3
// const isPalindrome3 = str => {
//     for(let i = 0; i < str.length / 2; i++) {
//         return str[i] === str[str.length - 1 - i]
//     }
// }


// console.log(isPalindrome('miim')) // false
// console.log(isPalindrome('leonnoel')) // true


// const isPalindrome = str => {
//     for (let i = 0; i < str.length / 2; i++) {
//         return str[i] === str[str.length - i - 1]
//     }
// }

const largestPalindrome = () => {
    for (var i = 999; i > 100; i--) {
        for (var j = 999; j > 100; j--) {
            const product = j * i;
            if (isPalindrome(product.toString())) {
                return product;
            }
        }
    }
}

console.log(largestPalindrome());





