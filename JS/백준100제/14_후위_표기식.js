let fs = require("fs");

// let input = require("fs").readFileSync("예제.txt").toString();
let input = fs.readFileSync("/dev/stdin").toString().trim();
//제출시 위에꺼로 제출

function solution(input) {
  let inputArr = input.split("");
  for (let i = inputArr.length - 1; i >= 0; i--) {
    if (inputArr[i] === "\r" || inputArr[i] === "\n") {
      inputArr.splice(i, 1);
    }
  }

  const calculateArr = ["+", "-", "/", "*"];
  let divideNum = 0;
  let arrCount = 0;
  let multipleNum = 0;
  let deepArr = [];
  let resultArr = [];

  for (let i = inputArr.length - 1; i >= 0; i--) {
    if (inputArr[i] === ")") {
      //맨 바깥의 괄호가 배열의 맨 앞에 오게 됨
      deepArr.push([]);
      divideNum++;
      divideNum > arrCount ? (arrCount = divideNum) : "";
    } else if (inputArr[i] === "(") {
      divideNum--;
      if (deepArr.length > 1) {
        deepArr[deepArr.length - 2].unshift(deepArr.pop());
      }
      if (deepArr.length === 1) {
        resultArr.unshift(deepArr.pop());
      }
    } else if (
      inputArr[i] === "*" ||
      inputArr[i] === "/" ||
      inputArr[i] === "+" ||
      inputArr[i] === "-"
    ) {
      if (inputArr[i] === "*" || inputArr[i] === "/") {
        if (deepArr.length !== 0) {
          //여길 push로 해버리면 안됨. 맨 마지막에 가는 것이 아닐수도 있기 때문, 하나의 캐릭터를 건너뛴 자리에 있어야 함.
          deepArr[deepArr.length - 1].splice(1, 0, inputArr[i]);
        } else {
          resultArr.splice(1, 0, inputArr[i]);
        }
      } else if (inputArr[i] === "+" || inputArr[i] === "-") {
        if (deepArr.length !== 0) {
          for (let j = 0; j < deepArr[deepArr.length - 1].length; j++) {
            if (
              deepArr[deepArr.length - 1][j] === "+" ||
              deepArr[deepArr.length - 1][j] === "-"
            ) {
              for (let n = j - 1; n >= 0; n--) {
                if (
                  deepArr[deepArr.length - 1][n] === "*" ||
                  deepArr[deepArr.length - 1][n] === "/"
                ) {
                  multipleNum++;
                  //여기서 inculdes를 쓰면 알파벳도 true로 인식을 해버림. 왜그러는지?
                } else if (
                  deepArr[deepArr.length - 1][n] !== "*" &&
                  deepArr[deepArr.length - 1][n] !== "/"
                ) {
                  multipleNum--;
                }
                if (multipleNum === -1) {
                  deepArr[deepArr.length - 1].splice(n, 0, inputArr[i]);

                  break;
                }
              }
              multipleNum = 0;
              break;
            } else if (
              j === deepArr[deepArr.length - 1].length - 1 &&
              deepArr[deepArr.length - 1][j] !== "+" &&
              deepArr[deepArr.length - 1][j] !== "-"
            ) {
              deepArr[deepArr.length - 1].push(inputArr[i]);
              break;
            }
          }
        }
        //오류부분
        else {
          for (let j = 0; j < resultArr.length; j++) {
            if (resultArr[j] === "+" || resultArr[j] === "-") {
              //+또는 -기호 이전부터 시작이므로\

              for (let n = j - 1; n >= 0; n--) {
                if (resultArr[n] === "*" || resultArr[n] === "/") {
                  multipleNum++;
                  //여기서 inculdes를 쓰면 알파벳도 true로 인식을 해버림. 왜그러는지?
                } else if (resultArr[n] !== "*" && resultArr[n] !== "/") {
                  multipleNum--;
                }
                if (multipleNum === -1) {
                  resultArr.splice(n, 0, inputArr[i]);

                  break;
                }
              }
              multipleNum = 0;
              break;
            } else if (
              j === resultArr.length - 1 &&
              resultArr[j] !== "+" &&
              resultArr[j] !== "-"
            ) {
              resultArr.push(inputArr[i]);
              break;
            }
          }
        }
      }
    }
    //오류부분
    else {
      if (deepArr.length !== 0) {
        deepArr[deepArr.length - 1].unshift(inputArr[i]);
      } else {
        resultArr.unshift(inputArr[i]);
      }
    }
  }
  for (let k = 0; k < arrCount; k++) {
    resultArr = resultArr.flat();
  }
  for (let i = resultArr.length - 1; i >= 0; i--) {
    resultArr[i] === " " ? resultArr.splice(i, 1) : "";
  }

  console.log(resultArr.join(""));
}
return solution(input);
// 예전풀이
// function solution(input) {
//   let inputArr = input.split("");
//   const calculateArr = ["+", "-", "/", "*"];
//   let divideNum = -1;
//   let howDeepArr = [];
//   let resultArr = [];
//   let findArr = resultArr.slice();
//   function deepArr(index) {
//     if (index < 0) {
//       return findArr;
//     } else {
//       findArr = findArr[0];
//       deepArr(index - 1);
//     }
//   }

//   for (let i = inputArr.length - 1; i >= 0; i--) {
//     if (inputArr[i] === ")") {
//       if (divideNum < 0) {
//         resultArr.unshift([]);
//         deepArr(0);
//       } else {
//         findArr.unshift([]);
//         deepArr(0);
//       }
//       divideNum++;
//       howDeepArr.push(divideNum);
//     } else if (inputArr[i] === "(") {
//       findArr = resultArr.slice();
//       divideNum--;
//       deepArr(divideNum);
//       //이에 따른 findArr변경.
//       //시간초과가 난다면 이부분 때문일듯.
//     }
//     //괄호 안에 있을 때와 아닐때를 구분해 줘야함.->굳이 안해줘도 될듯
//     else if (calculateArr.includes(inputArr[i])) {
//       if (divideNum < 0) {
//         resultArr.splice(1, 0, inputArr[i]);
//       } else {
//         findArr.push(inputArr[i]);
//       }
//     } else {
//       if (divideNum < 0) {
//         resultArr.unshift(inputArr[i]);
//       } else {
//         console.log(resultArr[0]);
//         findArr.unshift(inputArr[i]);
//       }
//     }

//     //   console.log(resultArr.join(" ").trim());
//   }
//   console.log(String(resultArr.flat().join("").trim()));
// }
// return solution(input);
//node 14_후위_표기식.js
