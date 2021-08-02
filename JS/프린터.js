function solution(priorities, location) {
  let Arr = priorities.map((v, i) => [v, i]);

  let i = 1;
  let output = [];

  while (Arr.length !== 0) {
    for (let i = 0; i < Arr.length; i++) {
      if (Arr[0][0] < Arr[i][0]) {
        let move = Arr.shift();
        Arr.push(move);
        break;
      } else if (i === Arr.length - 1) {
        let thisArr = Arr.shift();
        output.push(thisArr);
      }
    }
  }

  for (let k = 0; k < output.length; k++) {
    if (output[k][1] === location) {
      return k + 1;
    }
  }
}
document.write(solution([2, 1, 3, 2, 2, 3, 6, 2, 6, 1, 3, 7, 8, 9], 2));
