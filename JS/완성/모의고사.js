function solution(absolutes, signs) {
  let answerAdd = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] == true) {
      answerAdd += Number(absolutes[i]);
    } else if (signs[i] == false) {
      answerAdd -= Number(absolutes[i]);
    }
  }

  return answerAdd;
}
