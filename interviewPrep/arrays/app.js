
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }
}

const newArray = new MyArray();
// newArray.push('hi');
// newArray.push('you');
// newArray.push('!');
// newArray.pop();
// newArray.pop();
// newArray.delete(1);
// console.log(newArray);

function reverseStr(str) {
    return str.split('').reverse().join('');
}

function reverseStr2(str) {
    return str.split('').reduce((reversed, character) => {
        return character + reversed;
    })
}

function reverseStr3(str) {
    let reversed = '';
    for(let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}

function reverseStr4(str) {
    if(str === '') return '';
    return reverseStr4(str.substr(1)) + str.charAt(0);
    // return (str === '') ? '' : reverseStr4(str.substr(1)) + str.charAt(0);
}

function reverseStr5(str) {
    let reversed = '';
    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

function reverseStr6(str) {
    if (!str || str.length < 2 || typeof str !== 'string') return;

}

// console.log(reverseStr4('Alex'))

// function merge(left, right) {
//     if(!Array.isArray(left) || !Array.isArray(right)) return;
//     const results = [];
//     while(left.length && right.length) {
//         if(left[0] < right[0]) {
//             results.push(left.shift());
//         } else {
//             results.push(right.shift());
//         }
//     }
//     return [...results, ...left, ...right];
// }

// function mergeSort(arr) {
//     if(arr.length === 1) return arr;
//     const center = Math.floor(arr.length / 2);
//     const left = arr.slice(0, center);
//     const right = arr.slice(center);
//     return merge(mergeSort(left), mergeSort(right));
// }

// class Tree {
//     traverseDF(fn) {
//         const arr = [this.root];
//         while(arr.length) {
//             const node = arr.shift();
//             arr.unshift(...node.children);
//             fn(node);
//         }
//     }
// }



// console.log(mergeSort([6, -13, 7, 29, 5980], [4, 6, 30]));

// const isPalindrome = num => {
//     const str = num.toString(); 
//     const reversed = str.split('').reverse().join('')
//     return str === reversed;
// }

// const isPalindromeOfTheProductOfTwoThreeDigitNumbers = () => {
//     // 999 - 100
//     for(let i = 999; i >= 100; i--) {
//         for(let j = 999; j >= 100; j--) {
//             const product = j * i;
//             if(isPalindrome(product)) {
//                 return product;
//             }
//         }
//     }
// }

// console.log(isPalindromeOfTheProductOfTwoThreeDigitNumbers());

// const reverseInt = num => {
//     let reversed = '';
//     const str = [...num.toString()]; // num + '';
//     for(let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
    
//     if(!Math.sign(num)) return parseInt(reversed) * -1;
//     return parseInt(reversed)
// }

// console.log('type: ', typeof reverseInt(-50)); // number
// console.log('answer: ', reverseInt(-50)); // 321


// const createCharacterHash = str => {
//     if (typeof str !== 'string') return;
//     const characterHash = {};
//     for (let char of str) {
//         characterHash[char] = characterHash[char] + 1 || 1;
//     }
//     return characterHash;
// }

// const maxChar = str => {
//     if (typeof str !== 'string') return;
//     let max = 0;
//     let maxChar = '';
//     const characterHash = createCharacterHash(str);
//     for (let char in characterHash) {
//         if (characterHash[char] > max) {
//             max = characterHash[char];
//             maxChar = char;
//         }
//     }
//     return maxChar;
// }

// console.log(maxChar('dictionaries are the same as hashmaps/tables'));

// input arr
// output arr
// removeDuplicates

// const hasDuplicates = arr => {
//     return new Set(arr).size !== arr.length;
// }

// const merge = (left, right) => {
//     const results = [];
//     while(left.length && right.length) {
//         if(left[0] < right[0]) {
//             results.push(left.shift());
//         } else {
//             results.push(right.shift())
//         }
//     }
//     return [...results, ...left, ...right];
// }


// const mergeSort = arr => {
//     if(!Array.isArray(arr)) return 'not an array';
//     if(arr.length <= 1) return arr;
//     const center = Math.floor(arr.length / 2);
//     const left = arr.slice(0, center); 
//     const right = arr.slice(center); 
//     return merge(mergeSort(left), mergeSort(right));
// }


// const removeDuplicates = arr => {
//     if(!hasDuplicates(arr)) return arr;
//     const sortedArr = mergeSort(arr.slice());
//     const results = [];
//    for(let i = 0; i < sortedArr.length; i++) {
//        if(sortedArr[i + 1] !== sortedArr[i]) {
//            results.push(sortedArr[i]);
//        }
//    }
//    return results;
// }


// class MyArray {
//     constructor(data) {
//         this.data = data;
//         this.length = 0;
//     }
//     delete(index) {
//         const item = this.data[index];
//         this.shiftItmes(index);
//         return item;
//     }

//     shiftItems(index) {
//         for(let i = index; i < this.length - 1; i++) {
//             this.data[i] = this.data[i + 1];
//         }
//         delete this.data[this.length - 1];
//         this.length--;
//     }
// }

const merge = (left, right) => {
    const results = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }
    return [...results, ...left, ...right];
}

const mergeSort = arr => {
    if(arr.length === 1) return arr;
    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);
    return merge(mergeSort(left), mergeSort(right));
}

const removeDuplicates = arr => {
    if(!Array.isArray(arr)) return `This is not an array. It is a ${typeof arr}`;
    const set = new Set(arr);
    if(set.size === arr.length) return 'there are no duplicates'
    const results = [];
    set.forEach(item => results.push(item));
    return mergeSort(results);
}

console.log(removeDuplicates([1, 2, 3, 1, 1, 1, -10, 500, 1, 1, 4]));