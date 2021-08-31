let fs = require("fs");
// let input = require("fs").readFileSync("예제.txt").toString().split("\r\n");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//제출시 위에꺼로 제출

function solution(input) {
  let inputArr = input[1].split(" ").map((i) => Number(i));
  let countArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (!countArr[inputArr[i]]) {
      countArr[inputArr[i]] = 0;
    }
    countArr[inputArr[i]]++;
  }
  let resultArr = [];
  let unknownArr = [];
  for (let i = 0; i < Number(input[0]); i++) {
    if (
      i < Number(input[0]) - 1 &&
      countArr[inputArr[i]] < countArr[inputArr[i + 1]]
    ) {
      resultArr.push(inputArr[i + 1]);
      if (unknownArr) {
        for (let k = unknownArr.length - 1; k >= 0; k--) {
          if (
            countArr[inputArr[unknownArr[unknownArr.length - 1]]] <
            countArr[inputArr[i + 1]]
          ) {
            resultArr[unknownArr[unknownArr.length - 1]] = inputArr[i + 1];
            unknownArr.pop();
          } else {
            break;
          }
        }
      }
    } else {
      resultArr.push(0);
      unknownArr.push(i);
    }
  }
  for (let i = 0; i < unknownArr.length; i++) {
    resultArr[unknownArr[i]] = -1;
  }
  console.log(resultArr.join(" ").trim());
}
return solution(input);
//node 12_오등큰수.js
