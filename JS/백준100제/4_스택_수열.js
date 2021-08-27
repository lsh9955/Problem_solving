//여러 줄 입력

let fs = require("fs");
// let input = require("fs").readFileSync("예제.txt").toString().split("\r\n");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//제출시 위에꺼로 제출

function solution(input) {
  let returnAns = [];
  let stackArr = [1];
  let nowNum = 1;
  returnAns.push("+");
  for (let i = 1; i < Number(input[0]) + 1; i++) {
    if (
      stackArr[stackArr.length - 1] < Number(input[i]) ||
      (stackArr.length === 0 && nowNum < Number(input[i]))
    ) {
      while (nowNum !== Number(input[i])) {
        nowNum += 1;
        stackArr.push(nowNum);
        returnAns.push("+");
      }
      stackArr.pop();
      returnAns.push("-");
    } else if (stackArr[stackArr.length - 1] === Number(input[i])) {
      stackArr.pop();
      returnAns.push("-");
    } else {
      returnAns.push("NO");
    }
  }

  console.log(
    returnAns.includes("NO")
      ? "NO"
      : returnAns.reduce((add, a) => `${add}\n` + `${a}`)
  );
}
return solution(input);
