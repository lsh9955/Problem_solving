//답은 맞으나 시간초과

// //여러 줄 입력

// let fs = require("fs");
// let input = require("fs").readFileSync("예제.txt").toString().split("\r\n");

// // let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// //제출시 위에꺼로 제출

// function solution(input) {
//   let inputArr = input[1]
//     .split(" ")
//     .reverse()
//     .map((i) => Number(i));
//   let rightBigNum = [];
//   let returnAns = [];
//   returnAns.push(-1, " ");
//   rightBigNum.push(inputArr[0]);
//   for (let i = 1; i < Number(input[0]); i++) {
//     if (inputArr[i] >= inputArr[i - 1]) {
//       rightBigNum.push(inputArr[i]);
//       if (rightBigNum[0] <= inputArr[i]) {
//         returnAns.push(-1, " ");
//       } else {
//         for (let k = rightBigNum.length - 1; k >= 0; k--) {
//           if (rightBigNum[k] > inputArr[i]) {
//             returnAns.push(rightBigNum[k], " ");
//             break;
//           }
//         }
//       }
//     } else if (inputArr[i] < inputArr[i - 1]) {
//       returnAns.push(inputArr[i - 1], " ");
//       //바꾼부분
//       rightBigNum.push(inputArr[i - 1]);
//     }
//   }
//   console.log(returnAns.reverse().join("").trim());

//   //   console.log(returnAns.reduce((add, a) => `${add}\n` + `${a}`));
// }
// return solution(input);
// //node 11_오큰수.js

//여러 줄 입력

let fs = require("fs");
// let input = require("fs").readFileSync("예제.txt").toString().split("\r\n");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//제출시 위에꺼로 제출

function solution(input) {
  let inputArr = input[1].split(" ").map((i) => Number(i));
  let resultArr = [];
  let unknownArr = [];
  for (let i = 0; i < Number(input[0]); i++) {
    if (i < Number(input[0]) - 1 && inputArr[i] < inputArr[i + 1]) {
      resultArr.push(inputArr[i + 1]);
      if (unknownArr) {
        for (let k = unknownArr.length - 1; k >= 0; k--) {
          if (inputArr[unknownArr[unknownArr.length - 1]] < inputArr[i + 1]) {
            resultArr[unknownArr[unknownArr.length - 1]] = inputArr[i + 1];
            unknownArr.pop();
          } else {
            break;
          }
        }
      }
    } else {
      resultArr.push(0);
      unknownArr.push(i);
    }
  }
  for (let i = 0; i < unknownArr.length; i++) {
    resultArr[unknownArr[i]] = -1;
  }
  console.log(resultArr.join(" ").trim());

  //   console.log(returnAns.reduce((add, a) => `${add}\n` + `${a}`));
}
return solution(input);
//node 11_오큰수.js
