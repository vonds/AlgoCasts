const breakingRecords = scores => {
  let max = scores[0];
  let min = scores[0];
  let highScore = 0;
  let lowScore = 0;

  for (let score of scores) {
    if (score > max) {
      max = score;
      highScore++;
    }
    if (score < min) {
      min = score;
      lowScore++;
    }
  }

  return [highScore, lowScore];
};
