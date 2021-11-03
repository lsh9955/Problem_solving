function solution(n, t, m, timetable) {
  let nowTime = 540;
  let timeArr = [];
  for (let i = 0; i < timetable.length; i++) {
    timeArr.push(Number(timetable[i].slice(0, 2)) * 60 + Number(timetable[i].slice(3)));
  }
  timeArr.sort((a, b) => a - b);
  if (n >= 2) {
    for (let i = 0; i < n - 1; i++) {
      let nowtime = 540 + i * t;
      for (let k = 0; k < m; k++) {
        if (nowtime >= timeArr[0]) {
          timeArr.shift();
        }
      }
    }
  }
  nowTime = 540 + (n - 1) * t;
  let hour = Math.floor(nowTime / 60) < 10 ? `0${Math.floor(nowTime / 60)}` : `${Math.floor(nowTime / 60)}`;
  let min = nowTime % 60 < 10 ? `0${nowTime % 60}` : `${nowTime % 60}`;
  console.log(hour);
  if (timeArr.length <= m - 1) {
    return `${hour}:${min}`;
  } else {
    let lastMan = timeArr[m - 1];
    if (lastMan > nowTime) {
      return `${hour}:${min}`;
    } else {
      nowTime = lastMan - 1;
      let hour = Math.floor(nowTime / 60) < 10 ? `0${Math.floor(nowTime / 60)}` : `${Math.floor(nowTime / 60)}`;
      let min = nowTime % 60 < 10 ? `0${nowTime % 60}` : `${nowTime % 60}`;
      return `${hour}:${min}`;
    }
  }
}
document.write(solution(2, 1, 2, ["09:00", "09:00", "09:00", "09:00"]));
