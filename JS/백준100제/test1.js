let fs = require("fs");

// let input = require("fs").readFileSync("예제.txt").toString();
// let input = fs.readFileSync("/dev/stdin").toString();
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//제출시 위에꺼로 제출
k = Number(input[0]);

//.split("\n");에다 변수로 받을 때는  input[0]

function solution(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (n % 2 === 1) {
    return 1 - solution(Math.floor(n / 2));
  } else {
    return solution(Math.floor(n / 2));
  }

  //   console.log(returnAns.reduce((add, a) => `${add}\n` + `${a}`));
}
console.log(Number(solution(k - 1)));

//node 19_ROT13.js
