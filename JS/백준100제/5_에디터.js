//여러 줄 입력

let fs = require("fs");
let input = require("fs").readFileSync("예제.txt").toString().split("\r\n");

// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//제출시 위에꺼로 제출

function solution(input) {
  const allLength = input[0].length;
  //처음 위치가 어디인가? 맨 마지막 문자 뒤에 있는것이므로
  let nowIndex = input[0].length;
  let inputArr = input[0].slice().split("");
  let add;

  const command = {
    L: function () {
      nowIndex === 0 ? "" : (nowIndex = nowIndex - 1);
    },
    D: function () {
      nowIndex === allLength ? "" : (nowIndex = nowIndex + 1);
    },
    B: function () {
      nowIndex === 0 ? "" : inputArr.splice(nowIndex - 1, 1) && nowIndex--;
    },
    P: function () {
      inputArr.splice(nowIndex, 0, add) && (nowIndex += add.length);
    },
  };
  // input에서 undefind로 나오는 경우가 있음

  for (let i = 2; i < Number(input[1]) + 2; i++) {
    if (input[i] !== undefined) {
      if (input[i].includes("P")) {
        let divide = input[i].slice().split(" ");

        add = divide[1];
        command.P();
      } else if (input[i] === "L") {
        command.L();
      } else if (input[i] === "D") {
        command.D();
      } else if (input[i] === "B") {
        command.B();
      }
    }
  }

  //함수이기 때문에 L이 아니라 L()로 써야함.-중요
  console.log(inputArr.join(""));
  //   returnAns.reduce((add, a) => `${add}\n` + `${a}`);
}
return solution(input);

//node 5_에디터.js
