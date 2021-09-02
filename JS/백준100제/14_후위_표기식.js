let fs = require("fs");

let input = require("fs").readFileSync("예제.txt").toString();
// let input = fs.readFileSync("/dev/stdin").toString().trim();
//제출시 위에꺼로 제출

function solution(input) {
  let inputArr = input.split("");
  const calculateArr = ["+", "-", "/", "*"];
  let divideNum = -1;
  let howDeepArr = [];
  let resultArr = [];
  let findArr = resultArr.slice();
  function deepArr(index) {
    if (index < 0) {
      return findArr;
    } else {
      findArr = findArr[0];
      deepArr(index - 1);
    }
  }

  for (let i = inputArr.length - 1; i >= 0; i--) {
    console.log(findArr);
    if (inputArr[i] === ")") {
      if (divideNum < 0) {
        resultArr.unshift([]);
        deepArr(0);
      } else {
        findArr.unshift([]);
        deepArr(0);
      }
      divideNum++;
      howDeepArr.push(divideNum);
    } else if (inputArr[i] === "(") {
      findArr = resultArr.slice();
      divideNum--;
      deepArr(divideNum);
      //이에 따른 findArr변경.
      //시간초과가 난다면 이부분 때문일듯.
    }
    //괄호 안에 있을 때와 아닐때를 구분해 줘야함.->굳이 안해줘도 될듯
    // else if (calculateArr.includes(inputArr[i])) {
    //   if (divideNum < 0) {
    //     resultArr.splice(1, 0, inputArr[i]);
    //   } else {
    //     findArr.push(inputArr[i]);
    //   }
    // } else {
    //   if (divideNum < 0) {
    //     resultArr.unshift(inputArr[i]);
    //   } else {
    //     console.log(findArr);
    //     findArr.unshift(inputArr[i]);
    //   }
    // }

    //   console.log(resultArr.join(" ").trim());
  }
  console.log(String(resultArr.flat().join("").trim()));
}
return solution(input);
//node 14_후위_표기식.js
