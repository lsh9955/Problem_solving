function solution(s) {
  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const voca = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const Ans = [];
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      for (let p = 0; p < voca.length; p++) {
        if (voca[p][0] === s[i] && voca[p][1] === s[i + 1]) {
          Ans.push(String(num[p]));
          i += voca[p].length - 1;
        }
      }
    } else if (!isNaN(s[i])) {
      Ans.push(String(s[i]));
    }
  }
  for (let k = 0; k < Ans.length; k++) {
    answer += Ans[k];
  }

  return Number(answer);
}
document.write(solution("one4seveneight"));
