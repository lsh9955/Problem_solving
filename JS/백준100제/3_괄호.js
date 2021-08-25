//여러 줄 입력

let fs = require("fs");
// let input = require("fs").readFileSync("예제.txt").toString().split("\r\n");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//제출시 위에꺼로 제출

function solution(input) {
  let returnAns = [];
  let ifVPS = 0;

  for (let i = 1; i < Number(input[0]) + 1; i++) {
    ifVPS = 0;
    for (let p = 0; p < input[i].length; p++) {
      if (p === 0 && input[i][0] === ")") {
        returnAns.push("NO");
        break;
      } else {
        input[i][p] === "(" ? (ifVPS += 1) : (ifVPS -= 1);
        if (ifVPS < 0) {
          returnAns.push("NO");
          break;
        } else if (p === input[i].length - 1 && ifVPS === 0) {
          returnAns.push("YES");
          //"((("와 같은 경우도 있으므로. 경우의 수를 잘 따져서 분배하기.
        } else if (p === input[i].length - 1 && ifVPS !== 0) {
          returnAns.push("NO");
        }
      }
    }
  }

  console.log(returnAns.reduce((add, a) => `${add}\n` + `${a}`));
}
return solution(input);
