function solution(answers) {
  const fir = [1, 2, 3, 4, 5];
  const sec = [2, 1, 2, 3, 2, 4, 2, 5];
  const thr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let firAns = [1, 0];
  let secAns = [2, 0];
  let thrAns = [3, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === fir[(i + 1) % 5 === 0 ? 4 : ((i + 1) % 5) - 1]) {
      firAns[1] += 1;
    }
    if (answers[i] === sec[(i + 1) % 8 === 0 ? 7 : ((i + 1) % 8) - 1]) {
      secAns[1] += 1;
    }
    if (answers[i] === thr[(i + 1) % 10 === 0 ? 9 : ((i + 1) % 10) - 1]) {
      thrAns[1] += 1;
    }
  }

  const Ans = [firAns, secAns, thrAns].sort((a, b) => a[1] - b[1]);
  if (Ans[2][1] === Ans[1][1] && Ans[0][1] === Ans[1][1]) {
    return [1, 2, 3];
  } else if (Ans[0][1] < Ans[2][1] && Ans[2][1] === Ans[1][1]) {
    if (Ans[1][0] < Ans[2][0]) {
      return [Ans[1][0], Ans[2][0]];
    } else {
      return [Ans[2][0], Ans[1][0]];
    }
  } else {
    return [Ans[2][0]];
  }
}
document.write(solution([1, 2, 3, 4, 5]));
