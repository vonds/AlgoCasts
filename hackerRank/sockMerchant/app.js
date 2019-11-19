// 1
const sockMerchant = (arr, match = {}) => {
  let counter = 0;
  arr.forEach(sock => {
    match[sock] = match[sock] + 1 || 1;
    if (match[sock] % 2 === 0) counter++;
  });
  return counter;
};

console.log(sockMerchant([10, 10, 20, 10, 50, 50, 60]));
