
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    // 1

    // 2

    // 3

    // 4

    // 5

    // 6

    // 7

    // 8

    // 9

    // 10

    get(index) {
        return this.data[index];
    }

    // 1

    // 2

    // 3

    // 4

    // 5

    // 6

    // 7

    // 8

    // 9

    // 10

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    // 1

    // 2

    // 3

    // 4

    // 5

    // 6

    // 7

    // 8

    // 9

    // 10

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    // 1

    // 2

    // 3

    // 4

    // 5

    // 6

    // 7

    // 8

    // 9

    // 10

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    // 1

    // 2

    // 3

    // 4

    // 5

    // 6

    // 7

    // 8

    // 9

    // 10

    shiftItems(index) {
        for(let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1] 
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    // 1

    // 2

    // 3

    // 4

    // 5

    // 6

    // 7

    // 8

    // 9

    // 10

}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
// newArray.pop();
// newArray.pop();
newArray.delete(1);
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

function mergeSortedArrays(left, right) {
    if(!Array.isArray(left) || !Array.isArray(right)) return;
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

console.log(mergeSortedArrays([], [4, 6, 30]));
