function solution(jobs) {
  function sortArray(array) {
    for (let i = 0; i < array.length; i++) {
      let K;
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (
          array[j][0][0] + array[j][0][1] >
            array[j + 1][0][0] + array[j + 1][0][1] ||
          (array[j][0][0] + array[j][0][1] ===
            array[j + 1][0][0] + array[j + 1][0][1] &&
            array[j][0][0] > array[j + 1][0][0])
        ) {
          K = array[j];
          array[j] = array[j + 1];
          array[j + 1] = K;
        }
      }
      if (!K) {
        break;
      }
    }
    return array;
  }

  const A = sortArray(jobs.map((k, h) => [k, h]));
  const B = [];

  for (let i = 0; i < jobs.length; i++) {
    B.push(A[i][0][1] * (jobs.length - i));
  }

  const C = B.reduce((a, b) => {
    return a + b;
  }, 0);

  const D = [];
  for (let i = 0; i < jobs.length; i++) {
    D.push(A[i][0][0] - A[0][0][0]);
  }

  const E = D.reduce((a, b) => {
    return a + b;
  }, 0);

  const answer = (C - E) / jobs.length;
  return answer;
}
