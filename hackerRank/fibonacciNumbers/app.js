const fibonacci = (number, memory = {}) => {
  if (number < 0) return 0;
  if (number === 1 || number === 2) return 1;
  if (number === 3) return 2;
  return (memory[number] = fibonacci(number - 1) + fibonacci(number - 2));
};
console.log(fibonacci(5));
