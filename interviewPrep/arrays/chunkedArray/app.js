const capitalize2 = str => {
    if(typeof str !== 'string') return;
    const words = [];
    for(let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');
}
const reverseStr = str => {
    if(typeof str !== 'string') return;
    return str.split('').reverse().join('');
}