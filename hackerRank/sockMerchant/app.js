const sockMerchant = (arr, match = {}) => {
  let counter = 0;
  for (let sock of arr) {
    match[sock] = match[sock] + 1 || 1;
    if (match[sock] % 2 === 0) counter++;
  }
  return counter;
};
