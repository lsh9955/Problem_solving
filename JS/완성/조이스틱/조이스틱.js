function solution(name) {
  const nameArr = [];
  let searchedIndex = 0;
  let nowIndex = 0;
  let countNum = 0;
  for (let i = 0; i < name.length; i++) {
    nameArr.push(Number(name.charCodeAt(i)) - 65);
    if (Number(name.charCodeAt(i)) - 65 === 0) {
      searchedIndex++;
    }
  }

  if (nameArr[0] !== 0) {
    if (nameArr[0] - 13 <= 0) {
      countNum = nameArr[0];
    } else {
      countNum = 26 - nameArr[0];
    }
    nameArr[0] = 0;
    searchedIndex++;
  }

  while (searchedIndex !== nameArr.length) {
    let goLeft = nowIndex;
    let goRight = nowIndex;
    let leftCount = 0;
    let rightCount = 0;
    while (nameArr[goLeft] === 0) {
      if (goLeft === 0) {
        goLeft = nameArr.length - 1;
        leftCount++;
      } else {
        goLeft--;
        leftCount++;
      }
    }
    while (nameArr[goRight] === 0) {
      if (goRight === nameArr.length - 1) {
        goRight = 0;
        rightCount++;
      } else {
        goRight++;
        rightCount++;
      }
    }
    if (rightCount <= leftCount) {
      nowIndex = goRight;
      searchedIndex++;
      if (nameArr[nowIndex] - 13 <= 0) {
        countNum += rightCount + nameArr[nowIndex];
      } else {
        countNum += rightCount + 26 - nameArr[nowIndex];
      }

      nameArr[nowIndex] = 0;
    } else {
      nowIndex = goLeft;
      searchedIndex++;
      if (nameArr[nowIndex] - 13 <= 0) {
        countNum += leftCount + nameArr[nowIndex];
      } else {
        countNum += leftCount + 26 - nameArr[nowIndex];
      }

      nameArr[nowIndex] = 0;
    }
  }

  return countNum;
}
document.write(solution("JEROEN"));
