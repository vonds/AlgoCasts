const twoSum = (arr, target) => {
    const numObject = {};
    for (let i = 0; i < arr.length; i++) {
        const thisNum = arr[i];
        console.log('thisNum', thisNum);
        numObject[thisNum] = i;
        console.log(numObject)
    }
    for (var i = 0; i < arr.length; i++) {
        const diff = target - arr[i];
        if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
            return [i, numObject[diff]];
        }
    }
}
console.log(twoSum([2, 7, 11, 15], 9));