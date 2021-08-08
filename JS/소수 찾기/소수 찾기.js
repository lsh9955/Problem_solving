function solution(numbers) {
  let thisNum = 2;
  let allArr = [[]];
  for (let i = 0; i < numbers.length; i++) {
    allArr[0].push(numbers[i]);
  }

  if (numbers.length >= 2) {
    while (thisNum <= numbers.length) {
      allArr.push([]);
      for (let k = 0; k < allArr[thisNum - 2].length; k++) {
        let addNum = allArr[thisNum - 2].shift();
        allArr[thisNum - 2].push(addNum);
        for (let i = 0; i < numbers.length; i++) {
          if (addNum.includes(numbers[i])) {
          } else {
            let addNumResult = numbers[i] + addNum;
            allArr[thisNum - 1].push(addNumResult);
          }
        }
      }
      thisNum++;
    }
  } else {
  }
  let allNum = [...new Set(allArr.flat().map((v) => Number(v)))];
  let primeNum = [];
  console.log(allNum);
  //console.log(0098)는 98이다
  for (let i = 0; i < allNum.length; i++) {
    for (let k = 3; k <= parseInt(allNum[i] / 2); k++) {
      if (allNum[i] === 1 || allNum[i] === 2 || allNum[i] === 3) {
        primeNum.push(allNum[i]);
      } else if (
        allNum[i] % 2 === 0 ||
        allNum[i] === 0 ||
        allNum[i] % k === 0
      ) {
        break;
      } else if (k === parseInt(allNum[i] / 2)) {
        primeNum.push(allNum[i]);
      }
    }
  }
  //아니...너무 어려운데...

  console.log(primeNum);

  var answer = 0;

  return answer;
}
document.write(solution("011"));
