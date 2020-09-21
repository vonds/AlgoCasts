function rotLeft(a, d) {
    const length = a.length;
    const newArr = [...a];
    for (let i = 0; i < length; i++) {
                                     0 + 5 - 4
        let newIndex = (i + length - d) % length;
        console.log('newIndex: ', newIndex, 'i: ', i);
        console.log(2 % 5);
        newArr[newIndex] = a[i];
    }
    return newArr;
}

console.log(rotLeft([1, 2, 3, 4, 5], 4));