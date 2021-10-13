function solution(s) {
  let resultArr = Array(Math.floor(s.length / 2) + 1)
    .fill()
    .map((v, i) => []);
  let resultNumArr = Array(Math.floor(s.length / 2) + 1)
    .fill()
    .map((v, i) => [0]);
  let beforeIndex = "";

  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    let k = 0;
    while (k <= s.length - 1) {
      if (k + i <= s.length - 1) {
        let p = s.slice(k, k + i);

        if (p !== resultArr[i][resultArr[i].length - 1]) {
          resultArr[i].push(p);
          k = k + i;
        } else {
          if (
            (p !== resultArr[i][resultArr[i].length - 2] && p === resultArr[i][resultArr[i].length - 1] && resultArr[i].length >= 2) ||
            (p === resultArr[i][resultArr[i].length - 1] && resultArr[i].length === 1)
          ) {
            resultNumArr[i].push(2);
          } else if (p === resultArr[i][resultArr[i].length - 2] && p === resultArr[i][resultArr[i].length - 1]) {
            resultNumArr[i][resultNumArr[i].length - 1]++;
          }

          k = k + i;
        }
        beforeIndex = p;
      } else if (k + i > s.length - 1) {
        let p = s.slice(k);
        if (p !== resultArr[i][resultArr[i].length - 1]) {
          resultArr[i].push(p);
          break;
        } else {
          if (
            (p !== resultArr[i][resultArr[i].length - 2] && p === resultArr[i][resultArr[i].length - 1] && resultArr[i].length >= 2) ||
            (p === resultArr[i][resultArr[i].length - 1] && resultArr[i].length === 1)
          ) {
            resultNumArr[i].push(2);
          } else if (p === resultArr[i][resultArr[i].length - 2] && p === resultArr[i][resultArr[i].length - 1]) {
            resultNumArr[i][resultNumArr[i].length - 1]++;
          }

          break;
        }
      }
    }
  }
  let minLength = 1000;
  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    let thisLength = 0;
    for (let j = 0; j < resultArr[i].length; j++) {
      thisLength += resultArr[i][j].length;
    }
    resultNumArr[i][0] === 0 ? (thisLength += resultNumArr[i].length - 1) : (thisLength += resultNumArr[i].length);
    thisLength < minLength ? (minLength = thisLength) : "";
  }
  console.log(resultArr);
  console.log(resultNumArr);
  return minLength;
}
document.write(solution("aabbaccc"));
