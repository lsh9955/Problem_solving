function solution(jobs) {
  let nowTime = 0;
  let finishTime = [];
  let jobsSort = jobs
    .slice()
    .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
  console.log(jobsSort);
  for (let k = 0; k < jobs.length; k++) {
    let nowAmount = jobsSort.length;
    for (let i = 0; i < jobsSort.length; i++) {
      if (jobsSort[i][0] <= nowTime) {
        finishTime.push(nowTime + jobsSort[i][1] - jobsSort[i][0]);
        nowTime += jobsSort[i][1];
        jobsSort.splice(i, 1);
        break;
      }
    }

    if (nowAmount === jobsSort.length) {
      jobsSort.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
      finishTime.push(jobsSort[0][1]);
      nowTime = jobsSort[0][0] + jobsSort[0][1];
      jobsSort.splice(0, 1);
      jobsSort.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
    }
  }

  return Math.floor(finishTime.reduce((a, b) => a + b) / jobs.length);
}

document.write(
  solution([
    [10, 10],
    [30, 10],
    [50, 2],
    [51, 2],
  ])
);
document.write(
  solution([
    [0, 3],
    [1, 9],
    [2, 6],
    [30, 3],
  ])
);
