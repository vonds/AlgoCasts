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

// 1
const jumpingOnClouds = clouds => {
  let jump = 0
  let cloud = 0
  while (cloud < clouds.length - 1) {
    (cloud + 2 < clouds.length) && (clouds[cloud + 2] !== 1) ? 
    clount += 2 : cloud++
    jump++
  }
  return jump
}

// 2
const jumpingOnClouds = clouds => {
  let jump = 0
  let cloud = 0
  while (cloud < clouds.length - 1) {
    (cloud + 2 < clouds.length)
  }
}

// 3
const jumpingOnClouds = clouds => {
  let jump = 0
  let cloud = 0
  while (cloud < clouds.length - 1) {

  }
}

// 4
const jumpingOnClouds = clouds => {
  let jump = 0
  let cloud = 0
  while (cloud < clouds.length - 1) {

  }
}

// 5
const jumpingOnClouds = clouds => {
  let jump = 0
  let cloud = 0
  while (cloud < clouds.length - 1) {

  }
}

// 6
const jumpingOnClouds = clouds => {
  let jump = 0
  let cloud = 0
  while (cloud < clouds.length - 1 ) {

  }
}

// 7
const jumpingOnClouds = clouds => {
  let jump = 0
  let cloud = 0
  while (cloud < clouds.length - 1) {

  }
}

// 8
const jumpingOnClouds = clouds => {
  let jump = 0
  let cloud = 0
  while (cloud < clouds.length - 1) {

  }
}

// 9
const jumpingOnClouds = clouds => {
  let jump = 0
  let cloud = 0
  while (cloud < clouds.length - 1) {

  }
}

// 10
const jumpingOnClouds = clouds => {
  let jump = 0
  let cloud = 0
  while (cloud < clouds.length - 1) {

  }
}

console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]));
console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]) === 3); // 3
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]) === 4); // 4
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]) === 3); // 3
