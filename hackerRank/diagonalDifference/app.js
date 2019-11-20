function diagonalDifference(arr) {
  const size = 3;
  const parts = [];
  for (let i = 0; i < arr.length; i += size) {
    parts.push(arr.slice(i, i + size));
  }
  console.log(parts[1][1]);
  const rightDiagonal = parts[0][2] + parts[1][1] + parts[2][0];
  const leftDiagonal = parts[0][0] + parts[1][1] + parts[2][2];
  return Math.abs(leftDiagonal - rightDiagonal);
}

diagonalDifference([11, 2, 4, 4, 5, 6, 10, 8, -12]);
