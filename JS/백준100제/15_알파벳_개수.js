//여러 줄 입력

let fs = require("fs");
// let input = require("fs").readFileSync("예제.txt").toString();
let input = fs.readFileSync("/dev/stdin").toString().trim();
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//제출시 위에꺼로 제출
function solution(input) {
  let inputArr = input.split("");
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let ansArr = Array(26)
    .fill()
    .map((v, i) => 0);
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (alphabet[j] === inputArr[i]) {
        ansArr[j]++;
      }
    }
  }
  console.log(ansArr.join(" "));
  //   console.log(returnAns.reduce((add, a) => `${add}\n` + `${a}`));
}
return solution(input);

//node 15_알파벳_개수.js
