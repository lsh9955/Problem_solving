function solution(maps) {
  let visited = maps;
  const xIndex = [1, -1, 0, 0];
  const yIndex = [0, 0, 1, -1];
  let nowIndex = [[0, 0, 1]];
  let ans = [];
  let diff = [
    [0, 0, 0],
    [0, 0, 1],
  ];
  console.log(diff);
  while (String(diff[0]) !== String(diff[1])) {
    diff.shift();
    let thisroute = nowIndex.shift();

    findroute(thisroute);
    diff.push([nowIndex]);
  }

  for (let p = 0; p < nowIndex.length; p++) {
    if (
      nowIndex[p][0] === maps.length - 1 &&
      nowIndex[p][1] === maps[0].length - 1
    ) {
      ans.push(nowIndex[p][2]);
    }
  }

  if (ans == "") {
    return -1;
  } else {
    return Math.min(...ans);
  }

  function findroute(index) {
    visited[index[1]][index[0]] = 0;
    for (let i = 0; i < 4; i++) {
      if (
        index[0] + xIndex[i] < 0 ||
        index[0] + xIndex[i] >= maps.length ||
        index[1] + yIndex[i] < 0 ||
        index[1] + yIndex[i] >= maps[0].length
      ) {
        continue;
      }
      if (visited[index[1] + yIndex[i]][index[0] + xIndex[i]] === 1) {
        visited[index[1] + yIndex[i]][index[0] + xIndex[i]] = 0;
        nowIndex.push([
          index[0] + xIndex[i],
          index[1] + yIndex[i],
          index[2] + 1,
        ]);
      }
    }
  }
}
document.write(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
