function solution(n, computers) {
  let leftNum = Array(n)
    .fill()
    .map((v, i) => i);
  let connectArr = [[]];
  let diffNet = 0;
  for (let x = 1; x < n; x++) {
    for (let j = 0; j < x; j++) {
      if (computers[x][j] === 1 && computers[j][x] === 0) {
        computers[j][x] = 1;
      }
    }
  }
  console.log(computers);

  while (diffNet <= n - 1) {
    console.log(leftNum, diffNet);
    if (!isNaN(leftNum[diffNet])) {
      connect(diffNet);
      connectArr.push([]);
      diffNet = 0;
    } else {
      diffNet += 1;
    }
  }

  function connect(num) {
    //왜 ===[]은 안되는지?

    if (connectArr[connectArr.length - 1] == "") {
      connectArr[connectArr.length - 1].push(num);
      leftNum[num] = "n";
    }
    for (let i = num + 1; i < n; i++) {
      if (computers[num][i] === 1) {
        leftNum[i] = "n";
        connectArr[connectArr.length - 1].push(i);
        connect(i);
      }
    }
  }

  const A = [4, 5, 6];

  return connectArr.length - 1;
}
document.write(
  solution(3, [
    [1, 0, 1],
    [0, 1, 1],
    [0, 0, 1],
  ])
);
