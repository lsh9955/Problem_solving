//여러 줄 입력

let fs = require("fs");
// let input = require("fs").readFileSync("예제.txt").toString();
let input = fs.readFileSync("/dev/stdin").toString().trim();
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//제출시 위에꺼로 제출
function solution(input) {
  let inputArr = input.split("");

  let barNum = 0;
  let dividedBarnum = 0;
  for (let i = 0; i < inputArr.length; i++) {
    if (
      i < inputArr.length - 1 &&
      inputArr[i] === "(" &&
      inputArr[i + 1] === ")"
    ) {
      dividedBarnum += barNum;
      i++;
    } else if (inputArr[i] === "(") {
      barNum++;
    } else if (inputArr[i] === ")") {
      barNum--;
      dividedBarnum++;
    }
  }
  let returnAns = [];
  console.log(dividedBarnum);
  //   console.log(returnAns.reduce((add, a) => `${add}\n` + `${a}`));
}
return solution(input);

//node 10_쇠막대기.js
