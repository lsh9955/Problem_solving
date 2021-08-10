function solution(citations) {
  let sortArr = citations.sort((a, b) => a - b);
  let HArr = [];

  for (let i = 0; i < sortArr[sortArr.length - 1]; i++) {
    for (let k = 0; k < sortArr.length; k++) {
      if (sortArr[k] >= i && sortArr.length - k >= i && i >= k) {
        HArr.push(i);
      }
    }
  }

  return HArr[HArr.length - 1];
}
document.write(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
