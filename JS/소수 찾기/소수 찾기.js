function solution(numbers) {
  let thisNum = 2;
  let allArr = [[]];
  for (let i = 0; i < numbers.length; i++) {
    allArr[0].push([numbers[i], [i]]);
  }

  if (numbers.length >= 2) {
    while (thisNum <= numbers.length) {
      allArr.push([]);
      for (let k = 0; k < allArr[thisNum - 2].length; k++) {
        let addNum = allArr[thisNum - 2].shift();
        allArr[thisNum - 2].push(addNum);
        for (let i = 0; i < numbers.length; i++) {
          if (addNum[1].includes(i)) {
          } else {
            let addNumResult = numbers[i] + addNum[0];

            let addNumIndex = [...addNum[1], ...[i]];

            allArr[thisNum - 1].push([addNumResult, addNumIndex]);
          }
        }
      }
      thisNum++;
    }
  } else {
  }

  let allNum = [...new Set(allArr.flat().map((v) => Number(v[0])))];

  let primeNum = [];

  //console.log(0098)는 98이다
  for (let i = 0; i < allNum.length; i++) {
    //절반을 나눠서 하면 안됨
    if (allNum[i] === 1 || allNum[i] === 0) {
      i++;
    }
    for (let k = 2; k <= allNum[i]; k++) {
      if (allNum[i] === 2) {
        primeNum.push(allNum[i]);
      } else if (allNum[i] % k === 0 && k !== allNum[i]) {
        break;
      } else if (k === allNum[i]) {
        primeNum.push(allNum[i]);
      }
    }
  }

  var answer = primeNum.length;

  return answer;
}
document.write(solution("17"));
