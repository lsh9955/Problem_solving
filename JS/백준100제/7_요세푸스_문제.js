//여러 줄 입력

let fs = require("fs");
const { kill } = require("process");
// let input = require("fs").readFileSync("예제.txt").toString().split("\r\n");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

function solution(input) {
  let returnAns = [];
  let roundArr = Array(Number(input[0].split(" ")[0]))
    .fill()
    .map((v, i) => i + 1);

  let killNum = Number(input[0].split(" ")[1]) - 1;
  const countNum = Number(input[0].split(" ")[1]) - 1;
  while (roundArr.length !== 0) {
    if (returnAns.length === 0) {
      returnAns.push(roundArr[killNum]);
    } else {
      returnAns.push(" " + roundArr[killNum]);
    }
    roundArr.splice(killNum, 1);
    //위치랑 길이의 차이때문에 헷갈리는 부분이었음
    killNum + countNum > roundArr.length - 1
      ? (killNum = (killNum + countNum) % roundArr.length)
      : (killNum = killNum + countNum);
  }

  console.log(`<${returnAns}>`);
  //   returnAns.reduce((add, a) => `${add}\n` + `${a}`);
}
return solution(input);

//node 5_에디터.js
