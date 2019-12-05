// function findFactorialIterative(number) {
//   let answer = 1;
//   if (number === 2) answer = 2;
//   for (let i = 2; i <= number; i++) {
//     answer *= i;
//   }
//   return answer;
// }

function findFactorialRecursive(number, memory = {}) {
  if (number in memory) return memory[number];
  if (number === 2) return 2;
  return (memory[number] = number * findFactorialRecursive(number - 1));
}

console.log(findFactorialRecursive(100));
