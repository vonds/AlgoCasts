const chunk= (array, size) => {
    const chunked = [];

    for(let element of array) {
        const last = chunked[chunked.length - 1];

        if(!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }
    return chunked;
}

const baby = arr => {
    const lastItem = arr[arr.length - 1];
    return lastItem * (lastItem * 1) / 2;
}

console.log(baby([1, 2, 3, 4, 5]));
