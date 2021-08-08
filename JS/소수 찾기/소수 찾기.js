function solution(numbers) {
  let numArr = [];
  let allLength = 1;
  let allNum = [];
  let count = 1;

  for (let i = 0; i < numbers.length; i++) {
    numArr.push(Number(numbers[i]));
  }
  for (let k = 1; k <= numbers.length; k++) {
    allLength = allLength * k;
  }
  for (let i = 0; i < numArr.length; i++) {
    for (let k = 0; k < allLength / numArr.length; k++) {
      allNum.push([numArr[i]]);
    }
  }
  let numLength = allLength / numArr.length;
  while (count < 5) {
    numLength = numLength / (numArr.length - count);
    let i = 0;
    for (let p = 0; p < allLength / (numArr.length * numLength); p++) {
      for (let k = 0; k < numArr.length; k++) {
        for (let j = 0; j < numLength; j++) {
          if (allNum[i].includes(numArr[k])) {
            if (k === numArr.length - 1) {
              k = 0;
            } else {
              k++;
            }
          }
          allNum[i].push(numArr[k]);
          i++;
        }
      }
    }
    count += 1;
  }
  console.log(allNum);

  var answer = 0;

  return answer;
}
document.write(solution("17243"));
