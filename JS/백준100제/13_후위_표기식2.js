let fs = require("fs");
// let input = require("fs").readFileSync("예제.txt").toString().trim().split("\r\n");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//제출시 위에꺼로 제출

function solution(input) {
  let inputArr = input[1].split("");
  let ansArr = [];
  const arr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65)).slice(0, Number(input[0]));
  const calculate = ["*", "/", "+", "-"];
  for (let i = inputArr.length - 1; i >= 0; i--) {
    if (!calculate.includes(inputArr[i])) {
      for (let k = 0; k < arr.length; k++) {
        if (arr[k] === inputArr[i]) {
          inputArr[i] = String(input[k + 2]);
        }
      }
    }
  }
  let addArr = [];
  while (inputArr.length !== 1) {
    for (let i = 0; i < inputArr.length; i++) {
      if (calculate.includes(inputArr[i])) {
        if (inputArr[i] === "*") {
          let calNum = Number(inputArr[i - 2]) * Number(inputArr[i - 1]);
          inputArr.splice(i - 2, 3, calNum);
          break;
        } else if (inputArr[i] === "/") {
          let calNum = Number(inputArr[i - 2]) / Number(inputArr[i - 1]);
          inputArr.splice(i - 2, 3, calNum);
          break;
        } else if (inputArr[i] === "+") {
          let calNum = Number(inputArr[i - 2]) + Number(inputArr[i - 1]);
          inputArr.splice(i - 2, 3, calNum);
          break;
        } else if (inputArr[i] === "-") {
          let calNum = Number(inputArr[i - 2]) - Number(inputArr[i - 1]);
          inputArr.splice(i - 2, 3, calNum);
          break;
        }
      }
    }
  }
  console.log(inputArr[0].toFixed(2));

  //   console.log(resultArr.join(" ").trim());
}
return solution(input);
//node 13_후위_표기식2.js
