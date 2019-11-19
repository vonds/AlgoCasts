const countingValleys = (n, s) => {
  let up = 0;
  let valleys = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "D") --up;
    if (s[i] === "U") ++up === 0 ? valleys++ : null;
  }
  return valleys;
};
