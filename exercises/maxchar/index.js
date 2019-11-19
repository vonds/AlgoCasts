// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
// const maxChar = str => {
//     const charMap = {}
//     let max = 0
//     let maxChar = ''
//     for (let char of str) {
//         charMap[char] = charMap[char] + 1 || 1
//     }
//     for (let char in charMap) {
//         if (charMap[char] > max) {
//             max = charMap[char]
//             maxChar = char
//         }
//     }
//     return maxChar
// }

// // 1
// const maxChar = str => {
//     const charMap = {}
//     let max = 0
//     let maxChar = ''

//     for (let char of str) {
//         charMap[char] = charMap[char] + 1 || 1
//     }
// }

// // 2
// const maxChar = str => {
//     const charMap = {}
//     let max = 0
//     let maxChar = ''

//     for (let char of str) {
//         charMap[char] = charMap[char] + 1 || 1
//     }
// }

// // 3
// const maxChar = str => {
//     const charMap = {}
//     let max = 0
//     let maxChar = ''

//     for (let char of str) {
//         charMap[char] = charMap[char] + 1 || 1
//     }
// }

// // 4
// const maxChar = str => {
//     const charMap = {}
//     let max = 0
//     let maxChar = ''

//     for (let char of str) {
//         charMap[char] = charMap[char] + 1 || 1
//     }
// }

// // 5
// const maxChar = str => {
//     const charMap = {}
//     let max = 0
//     let maxChar = ''

//     for (let char of str) {
//         charMap[char] = charMap[char] + 1 || 1
//     }
// }

// // 6
// const maxChar = str => {
//     const charMap = {}
//     let max = 0
//     let maxChar = ''

//     for (let char of str) {
//         charMap[char] = charMap[char] + 1 || 1
//     }
// }

// // 7
// const maxChar = str => {
//     const charMap = {}
//     let max = 0
//     let maxChar = ''
// }

// // 8
// const maxChar = str => {
//     const charMap = {}
//     let max = 0
//     let maxChar = ''
// }

// // 9
// const maxChar = str => {
//     const charMap = {}
//     let max = 0
//     let maxChar = ''
// }

// // 10
// const maxChar = str => {
//     const charMap = {}
//     let max = 0
//     let maxChar = ''
// }


// **************************** 1 ****************************
// if String is "Java" then the program should print "a". 
// Bonus points if your program is robust and handles different
// kinds of input e.g. String without duplicate, null or empty String etc.

// const createMapDataStructure = str => {
//     const charMap = {}
//     for (let char of str.toString()) {
//         charMap[char] = charMap[char] + 1 || 1
//     }
//     return charMap
// }

// const maxCharacters = str => {

//     let max = 0
//     let maxChar = ''
//     const charMap = createMapDataStructure(str)

//     for (let char in charMap) {
//         if (charMap[char] > max) {
//             max = charMap[char]
//             maxChar = char
//         }
//     }
//     return charMap[maxChar] > 1 ? maxChar : 'there is no duplicate'


// }

// tests
// console.log(maxCharacters('javascript'))
// numbers:  console.log(maxCharacters(123456))
// numbers and letters: console.log(maxCharacters(12345dskfkfsd6))

// **************************** 2 ****************************
// You need to write a javascript program to check if two given strings are anagrams of Each other. 
// Two strings are anagrams if they are written using the same exact letters, 
// ignoring space, punctuation, and capitalization. 
// Each letter should have the same count in both strings. 
// For example, the Army and Mary are an anagram of each other.

const createMapDataStructure = str => {
    const charMap = {}
    for (let char of str.toString()) {
        console.log(char.charCodeAt())
        if ((char.charCodeAt() >= 97 && char.charCodeAt() <= 122) || typeof number) {
            charMap[char] = charMap[char] + 1 || 1
        }
    }
    return charMap

}


// const isAnagram = (str1, str2) => {
//     const string1 = createMapDataStructure(str1)
//     const string2 = createMapDataStructure(str2)
//     for (let char in string1) {
//         string1[char] === string2[char]
//     }
// }

console.log(isAnagram('poop', 'poop'))




// module.exports = maxChar;
