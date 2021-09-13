let fs = require("fs");

// let input = require("fs").readFileSync("예제.txt").toString();
// let input = fs.readFileSync("/dev/stdin").toString();
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//제출시 위에꺼로 제출
function solution(input) {
  //.split("\n");에다 변수로 받을 때는  input[0]
  let inputArr = input[0].split(" ");
  let ansArr = [inputArr[0] + inputArr[1], inputArr[2] + inputArr[3]];

  console.log(Number(ansArr[0]) + Number(ansArr[1]));

  //   console.log(returnAns.reduce((add, a) => `${add}\n` + `${a}`));
}
return solution(input);

//node 19_ROT13.js
