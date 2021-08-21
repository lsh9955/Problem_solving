function solution(progresses, speeds) {
  const K = [];
  for (let i = 0; i < progresses.length; i++) {
    let t = Math.ceil((100 - progresses[i]) / speeds[i]);
    K.push(t);
  }

  const P = [K[0]];
  for (let i = 1; i < progresses.length; i++) {
    if (P[P.length - 1] < K[i]) {
      P.push(K[i]);
    } else "";
  }
  console.log(K);
  console.log(P);

  const AN = [];
  if (P.length == 1) {
    AN.push(K.length);
  }
  for (let i = 1; i < P.length; i++) {
    if (P.length == 2) {
      AN.push(K.indexOf(P[1]));
      AN.push(K.length - K.indexOf(P[1]));
    } else if (i == 1) {
      AN.push(K.indexOf(P[1]));
    } else if (i == P.length - 1) {
      AN.push(K.indexOf(P[i]) - K.indexOf(P[i - 1]));
      AN.push(K.length - K.indexOf(P[P.length - 1]));
    } else {
      AN.push(K.indexOf(P[i]) - K.indexOf(P[i - 1]));
    }
  }
  console.log(AN);

  var answer = AN;
  return answer;
}
