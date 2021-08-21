function solution(jobs) {
  let nowTime = 0;
  const firJob = jobs
    .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))
    .shift();
  const jobsNum = jobs.length;
  nowTime = firJob[0] + firJob[1];
  let timeLengthArr = [firJob[0] + firJob[1]];

  for (let i = 0; i < jobsNum; i++) {
    let thisJob = jobs.shift();
    console.log(thisJob);

    timeLengthArr.push(thisJob[1] + nowTime - thisJob[0]);
    nowTime += thisJob[1];
  }

  const allLength =
    Number(timeLengthArr.reduce((a, b) => a + b)) / (jobsNum + 1);

  return Math.floor(allLength);
}
document.write(
  solution([
    [0, 10],
    [2, 10],
    [9, 10],
    [15, 2],
  ])
);
