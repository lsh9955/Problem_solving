function solution(n, times) {
  const sortTimes = times.sort((a, b) => a - b);
  //그냥 sortTimes[0] * n;을 해버리면 안됨
  //이렇게 해버리면 한사람만 일한것으로 되어버리기 때문. 전체사람 수를 나눠줘야함
  let fir = (sortTimes[0] * n) / times.length;

  let last = (sortTimes[sortTimes.length - 1] * n) / times.length;
  let middle = Math.floor(
    (sortTimes[sortTimes.length - 1] * n + sortTimes[0] * n) / 2
  );
  let output = 0;

  function allCount(timelength) {
    for (let i = 0; i < sortTimes.length; i++) {
      output += Math.floor(timelength / sortTimes[i]);
    }
    //반드시 return전에 쓰기!
    if (output >= n) {
      output = 0;
      return true;
    } else {
      output = 0;
      return false;
    }
  }

  while (fir !== last) {
    if (allCount(middle) === false) {
      fir = middle + 1;
      middle = Math.floor((fir + last) / 2);
    } else if (allCount(middle) === true) {
      last = middle;
      middle = Math.floor((fir + last) / 2);
    }
  }
  return fir;
}
document.write(solution(6, [7, 10]));
