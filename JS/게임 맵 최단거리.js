function solution(maps) {
  //우선순위 - 아래,오른쪽
  //0이거나 끝에 다다랐는데 아래,오른쪽 길이 없는 경우 - 위,왼쪽
  //왔던 길은 다시 돌아가면 안됨(경로상 손해)
  //[0,0]에서 시작하여, [n,m]에서 끝남

  //지나간 칸의 개수

  let passArr = [[0, 0]];
  let nowi = 0;
  let nowj = 0;
  function findroute(thisi, thisj) {
    nowi = thisi;
    nowj = thisj;

    for (let i = nowi; i < maps.length; i++) {
      for (let j = nowj; j < maps[0].length; j++) {
        if (
          passArr[passArr.length - 1][0] === maps.length - 1 &&
          passArr[passArr.length - 1][1] === maps[0].length - 1
        ) {
          console.log();
          break;
        }

        if (
          i !== maps.length - 1 &&
          j !== maps[0].length - 1 &&
          (maps[i][j + 1] === 1 || maps[i + 1][j] === 1)
        ) {
          if (
            maps[i + 1][j] === 0 ||
            (passArr.length >= 2 && passArr[passArr.length - 2][0] === i + 1)
          ) {
            passArr.push([i, j + 1]);
          } else if (
            maps[i][j + 1] === 0 ||
            (passArr.length >= 2 && passArr[passArr.length - 2][1] === j + 1)
          ) {
            if (j + 1 === maps[0].length - 1 && i + 1 === maps.length - 1) {
              passArr.push([i + 1, j]);
              break;
            } else {
              passArr.push([i + 1, j]);
              i += 1;
              j = j - 1;
            }
          }
        }
        if (
          i !== maps.length - 1 &&
          j !== maps[0].length - 1 &&
          maps[i][j + 1] === 0 &&
          maps[i + 1][j] === 0 &&
          (maps[i][j - 1] === 1 || maps[i - 1][j] === 1)
        ) {
          // console.log(i, j);
          // console.log(passArr[passArr.length - 2][1]);
          if (passArr[passArr.length - 2][1] === j - 1) {
            passArr.push([i - 1, j]);

            findroute(i - 1, j);
          }
          //    else if (passArr[passArr.length - 2][0] === i - 1) {
          //     passArr.push([i, j - 1]);
          //     findroute(i, j - 1);
          //   }
        }
      }
    }
  }
  findroute(0, 0);

  return passArr.length;
  //배열은 그래도  includes에 쓸수없음
  //   if (
  //     passArr[passArr.length - 1][0] === maps.length - 1 &&
  //     passArr[passArr.length - 1][1] === maps[0].length - 1
  //   ) {
  //     return passArr.length;
  //   } else {
  //     return -1;
  //   }
}
