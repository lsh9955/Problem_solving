//여러 줄 입력

let fs = require("fs");
let input = require("fs").readFileSync("예제.txt").toString().split("\r\n");

// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//제출시 위에꺼로 제출

function solution(input) {
  let ansArr = [];
  let returnAns = [];
  while (input.length !== 0) {
    let command = input.shift();
    if (command.includes("push")) {
      ansArr.push(Number(command.slice(5)));
    } else if (command === "pop") {
      ansArr.length !== 0 ? returnAns.push(ansArr.pop()) : returnAns.push(-1);
    } else if (command === "size") {
      returnAns.push(ansArr.length);
    } else if (command === "empty") {
      ansArr.length === 0 ? returnAns.push(1) : returnAns.push(0);
    } else if (command === "top") {
      ansArr.length === 0
        ? returnAns.push(-1)
        : returnAns.push(ansArr.slice().pop());
    }
  }
  console.log(returnAns.reduce((add, a) => `${add}\n` + `${a}`));
}
return solution(input);
