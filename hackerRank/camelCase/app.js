function camelcase(s) {
  let counter = 1;
  const arr = s.split("");
  arr.forEach(char => {
    if (char === char.toUpperCase()) counter++;
  });
  return counter;
}
