// const fibonacci = n => {
//   let arr = [0, 1];
//   for (let i = 2; i < n + 1; i++) {
//     arr.push(arr[i - 2] + arr[i - 1]);
//   }
//   return arr[n];
// };

const fibonacci = (n, memory = {}) => {
  if (n in memory) return memory[n];
  if (n < 0) return 0;
  if (n < 3) return 1;
  return (memory[n] = fibonacci(n - 1, memory) + fibonacci(n - 2, memory));
};

console.log(fibonacci(10));
