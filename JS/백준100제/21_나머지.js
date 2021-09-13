let fs = require("fs");

// let input = require("fs").readFileSync("예제.txt").toString();
// let input = fs.readFileSync("/dev/stdin").toString();
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//제출시 위에꺼로 제출
function solution(input) {
  //.split("\n");에다 변수로 받을 때는  input[0]
  let inputArr = input[0].split(" ").map((v, i) => Number(v));
  let ansArr = [];
  let A = inputArr[0];
  let B = inputArr[1];
  let C = inputArr[2];
  ansArr.push((A + B) % C);
  ansArr.push(((A % C) + (B % C)) % C);
  ansArr.push((A * B) % C);
  ansArr.push(((A % C) * (B % C)) % C);

  console.log(ansArr.reduce((add, a) => `${add}\n` + `${a}`));
}
return solution(input);
//node 21_나머지.js
