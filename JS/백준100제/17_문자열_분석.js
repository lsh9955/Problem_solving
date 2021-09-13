let fs = require("fs");
// let input = require("fs").readFileSync("예제.txt").toString();
let input = fs.readFileSync("/dev/stdin").toString();
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//제출시 위에꺼로 제출
function solution(input) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let inputArr = [];
  //안에서 "\n을 사용할것"
  for (let i = 0; i < input.split("\n").length; i++) {
    if (input.split("\n")[i].length === 0) {
    } else {
      inputArr.push(input.split("\n")[i].split("").sort());
    }
  }
  let ansArr = Array(inputArr.length)
    .fill()
    .map((v, i) => [0, 0, 0, 0]);
  for (let i = 0; i < inputArr.length; i++) {
    for (let k = 0; k < inputArr[i].length; k++) {
      if (inputArr[i][k] === " ") {
        ansArr[i][3]++;
      } else if (number.includes(inputArr[i][k])) {
        ansArr[i][2]++;
      } else if (alphabet.includes(inputArr[i][k])) {
        ansArr[i][0]++;
      } else {
        ansArr[i][1]++;
      }
    }
  }
  for (let i = 0; i < ansArr.length; i++) {
    console.log(ansArr[i].join(" "));
  }
  //   console.log(returnAns.reduce((add, a) => `${add}\n` + `${a}`));
}
return solution(input);

//node 17_문자열_분석.js
