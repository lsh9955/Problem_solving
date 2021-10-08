function solution(enter, leave) {
  let meetArr = Array(enter.length)
    .fill()
    .map((v, i) => [0, 0, 0]);
  let ansArr = [];
  for (let i = 0; i < enter.length; i++) {
    meetArr[enter[i] - 1][0] = i;
    meetArr[leave[i] - 1][1] = i;
    meetArr[i][2] = i + 1;
  }
  let sortArr = meetArr.slice().sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < enter.length - 1; i++) {
    for (let k = i + 1; k < enter.length; k++) {
      if (meetArr[k][0] < meetArr[i][0] && meetArr[k][1] > meetArr[i][1]) {
        ansArr.push([meetArr[i][2], meetArr[k][2]]);
      } else if (meetArr[k][1] < meetArr[i][1] && meetArr[k][0] > meetArr[i][0]) {
        ansArr.push([meetArr[k][2], sortArr[i][2]]);
        let firNum = meetArr[k][0] - meetArr[i][0] < 0 ? meetArr[k][0] : meetArr[i][0];
        let lastNum = meetArr[k][0] - meetArr[i][0] < 0 ? meetArr[i][0] : meetArr[k][0];
        if (lastNum - firNum > 1) {
          for (let j = firNum + 1; j < lastNum; j++) {
            ansArr.push([meetArr[i][2], sortArr[j][2]]);
          }
        }
      }
    }
  }
  let countNum = Array(meetArr.length)
    .fill()
    .map((v, i) => 0);
  for (let i = 0; i < meetArr.length; i++) {
    for (let k = 0; k < ansArr.length; k++) {
      if (ansArr[k].includes(i + 1)) {
        countNum[i]++;
      }
    }
  }
  console.log(countNum);
  console.log(meetArr);
  return countNum;
}
document.write(solution([3, 2, 1], [1, 3, 2]));
// if [1]이 뒷자리가 더 빠르다면,
// =[0]에 있는 숫자보다 이하의 element는 다 만나게 됨
// if [0]이 뒷자리가 더 빠르다면,
// 무조건 만남
