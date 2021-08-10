function solution(jobs) {
  let nowTime = 0;
  const firJob = jobs
    .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))
    .shift();
  const jobsNum = jobs.length;
  nowTime = firJob[0] + firJob[1];
  let timeLengthArr = [firJob[0] + firJob[1]];

  for (let i = 0; i < jobsNum; i++) {
    if (jobs[1] && nowTime >= jobs[1][0]) {
      let delayJobs = 0;
      for (let p = 1; p <= jobs.length; p++) {
        if (jobs[p - 1][0] > nowTime) {
          break;
        } else if (jobs[p - 1][0] <= nowTime) {
          delayJobs = p;
        }
      }

      let thisJob = jobs
        .slice(0, delayJobs)
        .sort((a, b) => +a[1] - a[0] - (b[1] - b[0]))
        .shift();
      let jobsin;
      for (let k = 0; k < jobs.length; k++) {
        if (jobs[k][0] === thisJob[0] && jobs[k][1] === thisJob[0]) {
          jobsin = k;
        }
      }
      console.log(thisJob);
      timeLengthArr.push(thisJob[1] + nowTime - thisJob[0]);
      nowTime += thisJob[1];
      jobs.splice(jobsin, 1);
    } else {
      let thisJob = jobs.shift();

      timeLengthArr.push(thisJob[1] + nowTime - thisJob[0]);
      nowTime += thisJob[1];
    }
  }

  console.log(timeLengthArr);
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
