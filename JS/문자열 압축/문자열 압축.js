function solution(s) {
  let allShort = [];

  for (let k = 1; k <= Math.floor(s.length / 2); k++) {
    let thisTxt = s.split("").slice();
    allShort.push([]);
    while (thisTxt.length !== 0) {
      let fir = thisTxt.slice(0, k);
      if (fir.join("") === thisTxt.slice(k, 2 * k).join("")) {
        let willAdd;
        while (fir.join("") === thisTxt.slice(k, 2 * k).join("")) {
          willAdd = thisTxt.splice(k, 2 * k);
        }

        allShort[allShort.length - 1].push("1");
        allShort[allShort.length - 1].push(thisTxt.splice(0, k));
        thisTxt.unshift(willAdd);
        thisTxt = thisTxt.flat();
      } else if (
        fir.join("") !== thisTxt.slice(k, 2 * k).join("") ||
        thisTxt.length < k
      ) {
        allShort[allShort.length - 1].push(thisTxt.splice(0, 1));
      }
    }
  }
  const allArr = allShort.map((v) => v.flat());
  allArr.sort((a, b) => a.length - b.length);
  console.log(allArr);
  var answer = 0;
  return answer;
}
document.write(solution("abcabcdede"));
