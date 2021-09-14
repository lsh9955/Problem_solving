let fs = require("fs");

// let input = require("fs").readFileSync("예제.txt").toString();
// let input = fs.readFileSync("/dev/stdin").toString();
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//제출시 위에꺼로 제출
function solution(input) {
  //.split("\n");에다 변수로 받을 때는  input[0]
  let inputArr = Number(input[0]);

  let ans;
  if (Number(inputArr) === 1) {
    ans = 0;
    console.log(ans);
  } else if (Number(inputArr) === 2) {
    ans = 1;
  } else {
    let thisIndex = Number(inputArr) - 2;

    let find = 1;
    let nowCount = 0;
    while (thisIndex > 1) {
      if (find * 2 + nowCount >= thisIndex) {
        thisIndex = thisIndex - nowCount;

        find = 1;
        nowCount = 0;
      } else {
        find = find * 2;
        nowCount += find;
      }
    }
    if (thisIndex === 0) {
      ans = 1;
    } else if (thisIndex === 1) {
      ans = 0;
    }
  }

  console.log(ans);
}
return solution(input);

//node test.js
