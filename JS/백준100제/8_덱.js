//여러 줄 입력

let fs = require("fs");

// let input = require("fs").readFileSync("예제.txt").toString().split("\r\n");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

function solution(input) {
  let returnAns = [];
  let frontArr = [];
  let backArr = [];
  let frontIndex = 0;
  let backIndex = 0;
  for (let i = 1; i < Number(input[0]) + 1; i++) {
    if (input[i].includes("push_front")) {
      frontArr.push(Number(input[i].split(" ")[1]));
    } else if (input[i].includes("push_back")) {
      backArr.push(Number(input[i].split(" ")[1]));
    } else if (input[i] === "pop_front") {
      if (frontArr.length - frontIndex !== 0) {
        returnAns.push(frontArr.pop());
      } else if (
        frontArr.length - frontIndex === 0 &&
        backArr.length - backIndex !== 0
      ) {
        returnAns.push(backArr[backIndex]);
        backIndex++;
      } else if (
        frontArr.length - frontIndex === 0 &&
        backArr.length - backIndex === 0
      ) {
        returnAns.push(-1);
      }
    } else if (input[i] === "pop_back") {
      if (backArr.length - backIndex !== 0) {
        returnAns.push(backArr.pop());
      } else if (
        backArr.length - backIndex === 0 &&
        frontArr.length - frontIndex !== 0
      ) {
        returnAns.push(frontArr[frontIndex]);
        frontIndex++;
      } else if (
        backArr.length - backIndex === 0 &&
        frontArr.length - frontIndex === 0
      ) {
        returnAns.push(-1);
      }
    } else if (input[i] === "size") {
      returnAns.push(backArr.length - backIndex + frontArr.length - frontIndex);
    } else if (input[i] === "empty") {
      if (backArr.length - backIndex + frontArr.length - frontIndex === 0) {
        returnAns.push(1);
      } else {
        returnAns.push(0);
      }
    } else if (input[i] === "front") {
      //맨 마지막 부분을 넣어야 함.([frontArr.length-1])
      if (frontArr.length - frontIndex !== 0) {
        returnAns.push(frontArr[frontArr.length - 1]);
      } else if (
        frontArr.length - frontIndex === 0 &&
        backArr.length - backIndex !== 0
      ) {
        returnAns.push(backArr[backIndex]);
      } else if (
        frontArr.length - frontIndex === 0 &&
        backArr.length - backIndex === 0
      ) {
        returnAns.push(-1);
      }
    } else if (input[i] === "back") {
      if (backArr.length - backIndex !== 0) {
        returnAns.push(backArr[backArr.length - 1]);
      } else if (
        backArr.length - backIndex === 0 &&
        frontArr.length - frontIndex !== 0
      ) {
        returnAns.push(frontArr[frontIndex]);
      } else if (
        backArr.length - backIndex === 0 &&
        frontArr.length - frontIndex === 0
      ) {
        returnAns.push(-1);
      }
    }
  }

  console.log(returnAns.reduce((add, a) => `${add}\n` + `${a}`));
}
return solution(input);

//node 5_에디터.js
