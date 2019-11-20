const countingValleys = (steps, slopes) => {
  let up = 0;
  let valleys = 0;
  for (let i = 0; i < steps; i++) {
    if (slopes[i] === "D") --up;
    if (slopes[i] === "U") ++up === 0 ? valleys++ : null;
  }
  return valleys;
};
