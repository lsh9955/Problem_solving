function solution(jobs) {
  let nowTime = 0;
  const firJob = jobs
    .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))
    .shift();
  const jobsNum = jobs.length;
  nowTime = firJob[0] + firJob[1];
  let timeLengthArr = [firJob[0] + firJob[1]];
  jobs.sort((a, b) => nowTime + a[1] - a[0] - (nowTime + b[1] - b[0]));
  for (let i = 0; i < jobsNum; i++) {
    if (nowTime < jobs[0][0]) {
      jobs.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
      let thisJob = jobs.shift();

      timeLengthArr.push(thisJob[1] + nowTime - thisJob[0]);
      nowTime = thisJob[0] + thisJob[1];
      jobs.sort((a, b) => nowTime + a[1] - a[0] - (nowTime + b[1] - b[0]));
    } else {
      let thisJob = jobs.shift();

      timeLengthArr.push(thisJob[1] + nowTime - thisJob[0]);
      nowTime += thisJob[1];
    }
    jobs.sort((a, b) => nowTime + a[1] - a[0] - (nowTime + b[1] - b[0]));
  }
  const allLength =
    Number(timeLengthArr.reduce((a, b) => a + b)) / (jobsNum + 1);

  return Math.floor(allLength);
}
document.write(
  solution([
    [0, 3],
    [1, 9],
    [2, 6],
  ])
);
