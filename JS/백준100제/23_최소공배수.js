//여러 줄 입력

let fs = require("fs");
// let input = require("fs").readFileSync("예제.txt").toString().split("\r\n");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//제출시 위에꺼로 제출

function solution(input) {
  let returnAns = [];
  let leastMultiple = [];

  for (let i = 1; i < Number(input[0]) + 1; i++) {
    let numArr = input[i].split(" ").map((v, i) => Number(v));

    let nowNum = numArr[0];
    let multipleArr = [];
    let multiNum = 2;
    while (nowNum !== 1) {
      if (nowNum % multiNum === 0) {
        !multipleArr[multiNum] ? (multipleArr[multiNum] = 1) : multipleArr[multiNum]++;
        nowNum = nowNum / multiNum;
      } else {
        multiNum++;
      }
    }
    nowNum = numArr[1];
    multiNum = 2;
    let biggerNum = 1;
    while (nowNum !== 1) {
      if (nowNum % multiNum === 0) {
        !multipleArr[multiNum] ? (multipleArr[multiNum] = 1) : multipleArr[multiNum] >= biggerNum ? "" : multipleArr[multiNum]++;
        nowNum = nowNum / multiNum;
        biggerNum++;
      } else {
        multiNum++;
        biggerNum = 1;
      }
    }
    leastMultiple.push(multipleArr);
  }

  for (let j = 0; j < leastMultiple.length; j++) {
    let multipleIndex = 1;
    for (let k = 0; k < leastMultiple[j].length; k++) {
      if (leastMultiple[j][k]) {
        multipleIndex = multipleIndex * k ** leastMultiple[j][k];
      }
    }
    returnAns.push(multipleIndex);
  }

  console.log(returnAns.reduce((add, a) => `${add}\n` + `${a}`));
}
return solution(input);
//node 23_최소공배수.js
