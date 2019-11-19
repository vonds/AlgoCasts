const countingValleys = (steps, slope) => {
  let up = 0;
  let valleys = 0;
  for (let i = 0; i < steps; i++) {
    if (slope[i] === "D") --up;
    if (slope[i] === "U") ++up === 0 ? valleys++ : null;
  }
  return valleys;
};
