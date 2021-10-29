function solution(lines) {
  let timeArr = Array(lines.length)
    .fill()
    .map((v, i) => [0, 0]);

  for (let i = 0; i < lines.length; i++) {
    timeArr[i][1] = Number(lines[i].slice(11, 13)) * 3600 + Number(lines[i].slice(14, 16)) * 60 + Number(lines[i].slice(17, 23));
    if (lines[i][25] === "s") {
      timeArr[i][0] = Math.round(timeArr[i][1] * 1000 - Number(lines[i].slice(24, 25)) * 1000 + 1) / 1000;
    } else if (lines[i][27] === "s") {
      timeArr[i][0] = Math.round(timeArr[i][1] * 1000 - Number(lines[i].slice(24, 27)) * 1000 + 1) / 1000;
    } else if (lines[i][28] === "s") {
      timeArr[i][0] = Math.round(timeArr[i][1] * 1000 - Number(lines[i].slice(24, 28)) * 1000 + 1) / 1000;
    } else {
      timeArr[i][0] = Math.round(timeArr[i][1] * 1000 - Number(lines[i].slice(24, 29)) * 1000 + 1) / 1000;
    }
  }
  let maxNum = 0;
  for (let k = 0; k < timeArr.length; k++) {
    let a = [(timeArr[k][0] * 1000 - 999) / 1000, timeArr[k][0]];
    let aCount = 0;

    let b = [timeArr[k][0], (timeArr[k][0] * 1000 + 999) / 1000];
    let bCount = 0;
    let c = [(timeArr[k][1] * 1000 - 999) / 1000, timeArr[k][1]];
    let cCount = 0;
    let d = [timeArr[k][1], (timeArr[k][1] * 1000 + 999) / 1000];
    let dCount = 0;
    for (let p = 0; p < timeArr.length; p++) {
      if (a[0] > timeArr[p][1] || a[1] < timeArr[p][0]) {
        ("");
      } else {
        aCount++;
      }
      if (b[0] > timeArr[p][1] || b[1] < timeArr[p][0]) {
        ("");
      } else {
        bCount++;
      }
      if (c[0] > timeArr[p][1] || c[1] < timeArr[p][0]) {
        ("");
      } else {
        cCount++;
      }
      if (d[0] > timeArr[p][1] || d[1] < timeArr[p][0]) {
        ("");
      } else {
        dCount++;
      }
    }
    if (maxNum < aCount) {
      maxNum = aCount;
    }
    if (maxNum < bCount) {
      maxNum = bCount;
    }
    if (maxNum < cCount) {
      maxNum = cCount;
    }
    if (maxNum < dCount) {
      maxNum = dCount;
    }
  }

  var answer = maxNum;

  return answer;
}
document.write(solution(["2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"]));
