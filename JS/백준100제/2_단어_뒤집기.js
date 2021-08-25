//여러 줄 입력

let fs = require("fs");
// let input = require("fs").readFileSync("예제.txt").toString().split("\r\n");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//제출시 위에꺼로 제출

function solution(input) {
  let returnAns = [];
  for (let i = 1; i < input.length; i++) {
    returnAns.push([]);
    let emptyIndex = [];
    element = input[i].split(" ");
    let elLength = element.slice().length;
    for (let k = 0; k < elLength; k++) {
      let reverseElement = element.shift();
      emptyIndex.push(reverseElement.split("").reverse().join(""));
    }
    returnAns[i - 1].push(emptyIndex.join(" "));
  }

  console.log(returnAns.reduce((add, a) => `${add}\n` + `${a}`));
}
return solution(input);
