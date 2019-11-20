const jumpingOnClouds = clouds => {
  let jump = 0;
  let cloud = 0;
  while (cloud < clouds.length - 1) {
    if (cloud + 2 < clouds.length && clouds[cloud + 2] !== 1) {
      cloud = cloud + 2;
    } else {
      cloud++;
    }
    jump++;
  }
  return jump;
};
console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]));
console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]) === 3); // 3
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]) === 4); // 4
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]) === 3); // 3
