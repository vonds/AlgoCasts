// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '');
// }

// module.exports = reverse;

// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// const reverse = str => {
//   let reversed = ''

//   for (let character of str) {
//     reversed = character + reversed
//   }
//   return reversed
// }

// reversed('milk')

// const reverse = str => {
//   return str ? reverse(str.substr(1)) + str[0] : str
// }

const reverse = str => {
  return str ? reverse(str.substring(1)) + str[0] : str
}


const reverse = str => {
  let reversed = ''
  for (let char of str) {
    reversed = char + reversed
  }
  return reversed
}

const reverse = str => {
  return str ? reverse(str.substring(1)) + str[0] : str
}

console.log(reverse('madam I am adam'))

// load balancing
// optimization
// storage
// latency 

// system design interview 

// trees 
// binary trees
// breadth v depth
// tris 

// dikastras