//여러 줄 입력

let fs = require("fs");

let input = require("fs").readFileSync("예제.txt").toString().split("\r\n");

// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//pop을 두번 해서 출력.
function solution(input) {
  let inputArr = input[0].split("");
  const inputArrLength = inputArr.length;
  let returnAns = [];
  let firpopArr = [];

  for (let i = inputArrLength - 1; i >= 0; i--) {
    if (inputArr[i] == " ") {
      firpopArr.push([]);
    } else if (inputArr[i] === ">") {
      //위치 파악 조심하기
      for (let k = i; k >= 0; k--) {
        if (inputArr[k] === "<") {
          firpopArr.push(inputArr.splice(k).join(""));
          i = k;
          firpopArr.push([]);
          break;
        }
      }
    } else {
      firpopArr.length === 0 ? firpopArr.push([]) : "";
      firpopArr[firpopArr.length - 1].push(inputArr.pop());
    }
  }
  console.log(firpopArr);
  //   console.log(returnAns.reduce((add, a) => `${add}\n` + `${a}`));
}
return solution(input);

//node 5_에디터.js
