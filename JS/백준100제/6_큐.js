//여러 줄 입력

let fs = require("fs");
// let input = require("fs").readFileSync("예제.txt").toString().split("\r\n");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//제출시 위에꺼로 제출
function solution(input) {
  let returnAns = [];
  let command = [];
  let firIndex = -1;
  let lastIndex = -1;
  for (let i = 1; i < Number(input[0]) + 1; i++) {
    if (input[i][5]) {
      command.push(Number(input[i].split(" ")[1]));
      firIndex === -1 ? (firIndex = 0) : "";
      lastIndex++;
    } else if (input[i] === "front") {
      firIndex > lastIndex || lastIndex === -1
        ? returnAns.push(-1)
        : returnAns.push(Number(command[firIndex]));
    } else if (input[i] === "back") {
      firIndex > lastIndex || lastIndex === -1
        ? returnAns.push(-1)
        : returnAns.push(Number(command[lastIndex]));
    } else if (input[i] === "pop") {
      firIndex > lastIndex || lastIndex === -1
        ? returnAns.push(-1)
        : returnAns.push(Number(command[firIndex])) && firIndex++;
    } else if (input[i] === "size") {
      if (lastIndex === -1) {
        returnAns.push(0);
      } else {
        returnAns.push(lastIndex - firIndex + 1);
      }
    } else if (input[i] === "empty") {
      firIndex > lastIndex || lastIndex === -1
        ? returnAns.push(1)
        : returnAns.push(0);
    }
  }

  console.log(returnAns.reduce((add, a) => `${add}\n` + `${a}`));
}
return solution(input);

//node 6_큐.js
