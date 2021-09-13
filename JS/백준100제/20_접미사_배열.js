let fs = require("fs");

// let input = require("fs").readFileSync("예제.txt").toString();
// let input = fs.readFileSync("/dev/stdin").toString();
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//제출시 위에꺼로 제출
function solution(input) {
  //.split("\n");에다 변수로 받을 때는  input[0]
  let inputArr = input[0].split("");
  let ansArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    ansArr.push(inputArr.slice(i).join(""));
  }
  //조심-모든 문자열을 전부 비교해야함
  ansArr = ansArr.sort((a, b) => (a < b ? -1 : +1));

  console.log(ansArr.reduce((add, a) => `${add}\n` + `${a}`));
}
return solution(input);
//node 20_접미사_배열.js
