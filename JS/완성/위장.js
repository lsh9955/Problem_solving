function solution(clothes) {
  const P = [];
  for (let i = 0; i < clothes.length; i++) {
    P.push(clothes[i][1]);
  }
  const A = P.sort();

  const k = [];
  for (let i = 0; i < A.length; i++) {
    if (i >= 1) {
      A[i] == A[i - 1] ? "" : k.push(i);
    }
  }
  k.push(clothes.length);

  const B = [k[0]];
  for (let p = 1; p < k.length; p++) {
    B.push(k[p] - k[p - 1]);
  }
  return B.map((k) => k + 1).reduce((a, b) => a * b) - 1;
}
