function solution(s) {
  console.log(s.split(""));
  let allShort = [];

  function findRepeat(text, arr) {
    if (text.length === 0) {
      allShort.push(arr);
    }
    for (let i = 0; i < text.length; i++) {
      let originalTxt = text.slice();

      let find = originalTxt.splice(0, i + 1);
      let sameTxt = originalTxt.splice(0, i + 1);

      let newArr = arr.slice();
      newArr.push(find);
      newArr = newArr.flat(Infinity);
      if (find.join("") === sameTxt.join("")) {
        while (find.join("") === sameTxt.join("")) {
          sameTxt = originalTxt.splice(0, i + 1);
        }
        newArr.push("1");
      } else {
      }
      originalTxt.unshift(sameTxt);
      let newText = originalTxt.flat(Infinity);

      findRepeat(newText, newArr);
    }
  }
  findRepeat(s.split(""), []);
  allShort.sort((a, b) => a.length - b.length);
  console.log(allShort);

  var answer = allShort[0].length;
  return answer;
}
document.write(solution("abcabcdede"));
