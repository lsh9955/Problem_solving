function solution(number, k) {
  let nowIndex = 0;
  let numArr = number.split("").map((v, i) => Number(v));
  let ansArr = [];
  let allarrLength = [numArr.length];

  while (k !== 0) {
    if (nowIndex > numArr.length - 1) {
      numArr = ansArr;
      allarrLength.push(numArr.length);
      ansArr = [];
      nowIndex = 0;
      //1. 중복되는 수가 계속 남아있으면 k가 지워지지 않으므로 오류가 난다고 생각했음.
      //11111의 경우 오류가 남.
      //수가 같은 경우를 고려=>더 이상 지워지지 않는, 중복되는 수를 삭제
      //2. 444433332222 같은 경우, 4가 먼저 지워짐. 맨 마지막부터 중복되는 경우의 수를 세어야 맞음
      //3. ansArr.reverse().join("");을 쓰면, 다른 숫자인 경우 낮은 숫자가 남아 있게 됨.
      //"444433332222", 4인 경우, 4444332로 답이 나오게 됨.
      if (allarrLength.length >= 2 && allarrLength[allarrLength - 1] === allarrLength[allarrLength - 2]) {
        // for (let i = numArr.length - 1; i >= 0; i--) {
        //4. 여기 for문에서 i = numArr.length - 2가 되면 맨 마지막 요소를 지나치게 됨. 실수하지 말것.
        // if (numArr[i] === numArr[i - 1]) {
        //   k--;
        //   if (k === 0) {
        //     return numArr.slice(0, i + 1).join("");
        //   }
        // } else {
        // }
        // }
        //5. 생각해 보니 어차피 더이상 줄일 수 있는 수가 없으므로, 굳이 for문으로 찾을 필요가 없음
        return numArr.slice(0, numArr.length - k).join("");
      }
    } else {
      if (ansArr.length === 0 && numArr[nowIndex] < numArr[nowIndex + 1]) {
        ansArr.push(numArr[nowIndex + 1]);
        k--;
        nowIndex += 2;
      } else if (ansArr && ansArr[ansArr.length - 1] < numArr[nowIndex]) {
        while (ansArr && ansArr[ansArr.length - 1] < numArr[nowIndex]) {
          ansArr.pop();
          k--;

          if (k === 0 || ansArr.length === 0) {
            break;
          }
        }

        ansArr.push(numArr[nowIndex]);
        //index에 값을 추가해 줄 필요가 없음 nowIndex의 값이 변하는 게 아니므로.
        nowIndex += 1;
      } else {
        ansArr.push(numArr[nowIndex]);
        nowIndex++;
      }
    }
  }

  const ans = ansArr.join("") + numArr.slice(nowIndex).join("");

  var answer = ans;
  return answer;
}

document.write(solution("444433332222", 5));
