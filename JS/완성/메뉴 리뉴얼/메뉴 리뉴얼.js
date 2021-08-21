function solution(orders, course) {
  //각 요소에 포함된 문자를 오름차순으로 정렬

  for (let i = 0; i < orders.length; i++) {
    let sortArr = [];
    let element = orders.shift();
    for (let k = 0; k < element.length; k++) {
      sortArr.push(element[k]);
    }
    sortArr.sort();
    orders.push(sortArr.join(""));
  }

  function makeArr(menu, k) {
    if (menu.length === 0) {
    } else {
      for (let i = 0; i < menu.length; i++) {}
    }
  }

  var answer = [];
  return answer;
}
document.write(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCGF", "ACDEH"], [2, 3, 4])
);
