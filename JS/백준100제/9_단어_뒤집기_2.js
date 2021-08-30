//여러 줄 입력

// let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let fs = require("fs");

// let input = require("fs").readFileSync("예제.txt").toString();
// let input = require("fs").readFileSync("예제.txt").toString().split("\r\n");
let input = fs.readFileSync("/dev/stdin").toString().trim();

// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//pop을 두번 해서 출력.

function solution(input) {
  let inputArr = input.split("");
  const inputArrLength = inputArr.length;
  let returnAns = [];
  let firpopArr = [];

  //왜 여기서 i 범위가 inputArrLength 부터 인지?
  for (let i = 0; i < inputArrLength; i++) {
    if (inputArr[inputArr.length - 1] !== undefined) {
      if (inputArr[inputArr.length - 1] == " ") {
        firpopArr.push([]);
        inputArr.pop();
        //공백도 제거해주기
      } else if (inputArr[inputArr.length - 1] === ">") {
        //위치 파악 조심하기
        for (let k = inputArr.length - 1; k >= 0; k--) {
          if (inputArr[k] === "<") {
            firpopArr.push(inputArr.splice(k).join(""));
            i += inputArr.length - 1 - k;
            if (k === 0 || inputArr[k - 1] === ">") {
              ("");
            } else {
              firpopArr.push([]);
            }
            break;
          }
        }
      } else if (firpopArr.length === 0) {
        firpopArr.push([inputArr.pop()]);
      } else {
        firpopArr[firpopArr.length - 1].push(inputArr.pop());
      }
    }
  }

  const firpopArrLength = firpopArr.length;

  for (let k = 0; k < firpopArrLength; k++) {
    if (
      (firpopArr[firpopArr.length - 1] &&
        firpopArr[firpopArr.length - 1][0] === "<") ||
      (returnAns[returnAns.length - 1] &&
        firpopArr[firpopArr.length - 2] &&
        returnAns[returnAns.length - 1][0] === "<" &&
        firpopArr[firpopArr.length - 2][0] === "<") ||
      (firpopArr[firpopArr.length - 2] &&
        firpopArr[firpopArr.length - 2][0] === "<")
    ) {
      returnAns.push(firpopArr.pop());
    } else {
      returnAns.push(firpopArr.pop(), " ");
    }
  }
  console.log(returnAns.flat().join("").trim());
  //   console.log(returnAns.reduce((add, a) => `${add}\n` + `${a}`));
}
return solution(input);

//node 9_단어_뒤집기_2.js
