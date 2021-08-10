function solution(citations) {
  const citeMax = Math.max.apply(null, citations);

  const p = [];
  for (let i = citeMax; i >= 0; i--) {
    if (citeMax == 0) {
      p.push(0);
    }
    if (citations.filter((k) => k >= i).length >= i) {
      p.push(i);
    }
  }
  if (p == []) {
    return 0;
  } else {
    return p[0];
  }
}
