const fibonacci = (n, memory = {}) => {
  if (n in memory) return memory[n];
  if (n < 0) return 0;
  if (n < 3) return 1;
  return (memory[n] = fibonacci(n - 1, memory) + fibonacci(n - 2, memory));
};

console.log(fibonacci(900));
