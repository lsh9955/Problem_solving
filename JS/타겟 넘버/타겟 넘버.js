function solution(numbers, target) {
  const A = Array(2 ** numbers.length)
    .fill()
    .map((v, i) => 0);
  function allArr(num, K) {
    for (let i = 1; i <= 2 ** K; i++) {
      for (let p = 1; p < A.length + 1; p++) {
        if (
          // i % 2 === 1 &&
          //k+1을 하면 안됨
          p >= 1 + (A.length / 2 ** K) * (i - 1) &&
          p < 1 + (A.length / 2 ** K) * (i - 1) + A.length / 2 ** (K + 1)
        ) {
          A[p - 1] = A[p - 1] + num[K];
        } else if (
          p >= 1 + (A.length / 2 ** K) * (i - 1) + A.length / 2 ** (K + 1) &&
          p < 1 + (A.length / 2 ** K) * (i - 1) + 2 * (A.length / 2 ** (K + 1))
        ) {
          A[p - 1] = A[p - 1] - num[K];
          
        }
      }
    }
  }
  for (let j = 0; j < numbers.length; j++) {
    allArr(numbers, j);
  }
  let answer = 0;
  for (let e = 0; e < A.length; e++) {
    if (A[e] === target) {
      answer += 1;
    }
  }
  return answer;
}
