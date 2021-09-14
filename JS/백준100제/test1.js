let fs = require("fs");

let input = require("fs").readFileSync("예제.txt").toString();
// let input = fs.readFileSync("/dev/stdin").toString();
// let input = fs.readFileSync("/dev/stdin").toString();
//제출시 위에꺼로 제출
function solution(input) {
  //.split("\n");에다 변수로 받을 때는  input[0]
  k = Number(input);
  let ansArr;
  function recursive(n) {
    if (n == 0) {
      return 0;
    } else if (n == 1) {
      return 1;
    } else if (n % 2 === 1) {
      return 1 - recursive((n - 1) / 2);
    } else {
      recursive(n / 2);
    }
  }
  console.log(recursive(k - 1));

  //   console.log(returnAns.reduce((add, a) => `${add}\n` + `${a}`));
}
return solution(input);

//node 19_ROT13.js
