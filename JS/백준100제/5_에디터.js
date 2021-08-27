//여러 줄 입력

let fs = require("fs");
// let input = require("fs").readFileSync("예제.txt").toString().split("\r\n");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//제출시 위에꺼로 제출
//!pop 메소드는 시간복잡도가 O(1)인데 반해, shift 메소드는 배열 맨 앞 요소를 빼야 하기 때문에 시간복잡도가 O(n)이다.
function solution(input) {
  let firInput = input[0].split("");
  let inputArr = [];
  for (let i = 2; i < Number(input[1]) + 2; i++) {
    if (input[i] !== undefined) {
      if (input[i] === "L") {
        firInput.length !== 0 && inputArr.push(firInput.pop());
      } else if (input[i] === "D") {
        inputArr.length !== 0 && firInput.push(inputArr.pop());
      } else if (input[i] === "B") {
        firInput.length !== 0 && firInput.pop();
      } else if (input[i].split(" ")[0] === "P") {
        let addTxt = input[i].split(" ")[1];

        firInput.push(addTxt);
      }
    }
  }
  console.log(firInput.join("") + inputArr.reverse().join(""));
  //   returnAns.reduce((add, a) => `${add}\n` + `${a}`);
}
return solution(input);

//node 5_에디터.js
