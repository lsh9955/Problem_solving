let fs = require("fs");

// let input = require("fs").readFileSync("예제.txt").toString();
// let input = fs.readFileSync("/dev/stdin").toString();
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//제출시 위에꺼로 제출
function solution(input) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const upperAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  //.split("\n");에다 변수로 받을 때는  input[0]
  let inputArr = input[0].split("");
  let ansArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (!isNaN(inputArr[i])) {
      ansArr.push(inputArr[i]);
    } else if (inputArr[i] === " ") {
      ansArr.push(" ");
      //대문자일 때
    } else if (inputArr[i] < "a") {
      for (let k = 0; k < 26; k++) {
        if (k <= 12 && inputArr[i] === upperAlphabet[k]) {
          ansArr.push(upperAlphabet[k + 13]);
          break;
        } else if (inputArr[i] === upperAlphabet[k]) {
          ansArr.push(upperAlphabet[k - 13]);
          break;
        }
      }
    } else {
      for (let k = 0; k < 26; k++) {
        if (k <= 12 && inputArr[i] === alphabet[k]) {
          ansArr.push(alphabet[k + 13]);
          break;
        } else if (inputArr[i] === alphabet[k]) {
          ansArr.push(alphabet[k - 13]);
          break;
        }
      }
    }
  }
  console.log(ansArr.join(""));

  //   console.log(returnAns.reduce((add, a) => `${add}\n` + `${a}`));
}
return solution(input);

//node 19_ROT13.js
