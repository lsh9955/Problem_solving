function solution(N, number) {
  let answerArr = 0;
  let thisNum = N;

  function findValue(count, arr, val) {
    console.log(arr);
    if (count > 8) {
      ("");
    } else {
      if (val === number) {
        return count;
      } else {
        let a = arr.slice();
        a.push("+", thisNum);
        let b = arr.slice();
        a.push("-", thisNum);
        let c = arr.slice();
        a.push("/", thisNum);
        let d = arr.slice();
        a.push("*", thisNum);
        let e = arr.slice();
        if (e.length > 1) {
          let beforeCal = e[e.length - 2];
          let beforeVal = val;
          let afterVal = 0;
          if (beforeCal === "+") {
            beforeVal = beforeVal - e[e.length - 1];
            afterVal = beforeVal + e[e.length - 1] * 10 + thisNum;
          } else if (beforeCal === "-") {
            beforeVal = beforeVal + e[e.length - 1];
            afterVal = beforeVal - (e[e.length - 1] * 10 + thisNum);
          } else if (beforeCal === "/") {
            beforeVal = beforeVal * e[e.length - 1];
            afterVal = Math.floor(beforeVal / (e[e.length - 1] * 10 + thisNum));
          } else if (beforeCal === "*") {
            beforeVal = beforeVal / e[e.length - 1];
            afterVal = Math.floor(beforeVal * (e[e.length - 1] * 10 + thisNum));
          }
          e[e.length - 1] = e[e.length - 1] * 10 + thisNum;
          findValue(count + 1, e, afterVal);
        } else {
          let k = e[0] * 10 + thisNum;
          e[e.length - 1] = e[e.length - 1] * 10 + thisNum;
          findValue(count + 1, e, k);
        }

        findValue(count + 1, a, val + thisNum);
        findValue(count + 1, b, val - thisNum);
        findValue(count + 1, c, Math.floor(val / thisNum));
        findValue(count + 1, d, val * thisNum);
      }
    }
  }

  if (thisNum === number) {
    return 1;
  } else {
    var answer = findValue(1, [thisNum], thisNum);
    return answer;
  }
}
document.write(solution(5, 12));

// function solution(N, number) {
//     let answerArr = 0;
//     let thisNum = N;

//     function findValue(input, count) {
//       if (count > 7) {
//         ("");
//       } else {
//         let a = input + thisNum;
//         let b = input - thisNum;
//         let c = input * thisNum;
//         let d = Math.floor(input / thisNum);
//         let e = input * 10 + thisNum;
//       let f = input+1
//       let g = input-1
//         if (a === number || b === number || c === number || d === number || e === number) {
//           if (answerArr === 0) {
//             answerArr = count + 1;
//           } else if (answerArr > count + 1) {
//             answerArr = count + 1;
//           }
//         }else if(f === number|| g === number){
//               if (answerArr === 0) {
//             answerArr = count + 2;
//           } else if (answerArr > count + 2) {
//             answerArr = count + 2;
//           }
//         }

//           else {
//           findValue(a, count + 1);
//           findValue(b, count + 1);
//           findValue(c, count + 1);
//           findValue(d, count + 1);
//           findValue(e, count + 1);
//           findValue(f, count + 2);
//             findValue(g, count + 2);
//         }
//       }
//     }
//     if (thisNum === number) {
//       return 1;
//     }else if(number===1){
//         return 2
//     } else {
//       findValue(thisNum, 1);

//       var answer = answerArr === 0 ||answerArr > 8 ? -1 : answerArr;
//       return answer;
//     }
//   }
