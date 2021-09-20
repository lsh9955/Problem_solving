function solution(number, k) {
  let nowIndex = 0;
  let numArr = number.split("").map((v, i) => Number(v));
  let ansArr = [];
  while (k !== 0) {
    console.log(ansArr, nowIndex);
    //ansArr.length === 0으로 하면 앞의 수들이 다 지워졌을 때(ansArr에 아무 값이 없을 때)
    //뒤에 동일한 값이 나올 때 numArr[nowIndex]가 무시되는 경우의 수가 생김.
    //nowIndex===0으로 해줘야함.
    if (nowIndex === 0 && numArr[nowIndex] < numArr[nowIndex + 1]) {
      ansArr.push(numArr[nowIndex + 1]);
      k--;
      nowIndex += 2;
    } else if (ansArr && ansArr[ansArr.length - 1] < numArr[nowIndex]) {
      let whileCount = 0;

      while (ansArr && ansArr[ansArr.length - 1] < numArr[nowIndex]) {
        ansArr.pop();
        k--;
        whileCount++;
        if (k === 0 || ansArr.length === 0) {
          break;
        }
      }

      ansArr.push(numArr[nowIndex]);
      nowIndex += whileCount;
    } else {
      ansArr.push(numArr[nowIndex]);
      nowIndex++;
    }
  }
  console.log(nowIndex);
  console.log(ansArr);
  const ans = ansArr.join("") + numArr.slice(nowIndex).join("");
  console.log(ans);
  var answer = "";
  return answer;
}
document.write(solution("4177252841", 4));
