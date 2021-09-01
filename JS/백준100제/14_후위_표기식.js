let fs = require("fs");

// let input = require("fs").readFileSync("예제.txt").toString();
let input = fs.readFileSync("/dev/stdin").toString().trim();
//제출시 위에꺼로 제출

function solution(input) {
  let inputArr = input.split("");
  const calculateArr = ["+", "-", "/", "*"];
  let divideNum = 0;
  let resultArr = [];

  for (let i = inputArr.length - 1; i >= 0; i--) {
    if (inputArr[i] === ")") {
      if (divideNum === 0) {
        resultArr.unshift([]);
      }
      divideNum++;
    } else if (inputArr[i] === "(") {
      divideNum--;
    } else if (
      (i >= 1 &&
        calculateArr.includes(inputArr[i]) &&
        inputArr[i - 1] === ")") ||
      (calculateArr.includes(inputArr[i]) && inputArr[i + 1] === "(")
    ) {
      resultArr[0].push(inputArr[i]);
      resultArr.unshift([]);
    } else if (calculateArr.includes(inputArr[i])) {
      resultArr[0].push(inputArr[i]);
    } else {
      resultArr[0].unshift(inputArr[i]);
    }
  }
  console.log(resultArr.flat().join("").trim());
  //   console.log(resultArr.join(" ").trim());
}
return solution(input);
//node 14_후위_표기식.js
