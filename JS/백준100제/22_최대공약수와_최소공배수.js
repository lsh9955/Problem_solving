let fs = require("fs");

// let input = require("fs").readFileSync("예제.txt").toString();
let input = fs.readFileSync("/dev/stdin").toString();
// let input = fs.readFileSync("/dev/stdin").toString().trim();
//제출시 위에꺼로 제출
function solution(input) {
  //.split("\n");에다 변수로 받을 때는  input[0]
  let inputArr = input.split(" ").map((v, i) => Number(v));

  let ansArr = [[], []];
  for (let i = 0; i < 2; i++) {
    let thisNum = inputArr[i];
    if (thisNum === 1) {
      ansArr[i].push(1);
    } else {
      while (thisNum !== 1) {
        for (let k = 2; k <= thisNum; k++) {
          if (thisNum % k === 0) {
            ansArr[i].push(k);
            thisNum = thisNum / k;
            break;
          }
        }
      }
    }
  }
  for (let i = 0; i < 2; i++) {
    //숫자인 경우 sort 주의
    ansArr[i].sort((a, b) => a - b);
  }
  let returnArr = [[], []];
  while (ansArr[0].length !== 0 || ansArr[1].length !== 0) {
    if (ansArr[0][0] === ansArr[1][0]) {
      returnArr[0].push(ansArr[0][0]);
      returnArr[1].push(ansArr[0][0]);
      ansArr[0].shift();
      ansArr[1].shift();
    } else if ((ansArr[0][0] !== ansArr[1][0] && ansArr[0][0] > ansArr[1][0]) || (ansArr[1].length !== 0 && ansArr[0].length === 0)) {
      returnArr[1].push(ansArr[1][0]);
      ansArr[1].shift();
    } else if ((ansArr[0][0] !== ansArr[1][0] && ansArr[0][0] < ansArr[1][0]) || (ansArr[0].length !== 0 && ansArr[1].length === 0)) {
      returnArr[1].push(ansArr[0][0]);
      ansArr[0].shift();
    }
  }

  returnArr = returnArr.map((v, i) => (v.length === 0 ? 1 : v.reduce((add, a) => add * a)));
  //Number로 제출
  console.log(Number(returnArr[0]));
  console.log(Number(returnArr[1]));
  //   console.log(ansArr.reduce((add, a) => `${add}\n` + `${a}`));
}
return solution(input);
//node 22_최대공약수와_최소공배수.js
