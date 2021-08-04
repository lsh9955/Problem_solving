function solution(maps) {
  const xindex = [1, -1, 0, 0];
  const yindex = [0, 0, 1, -1];

  let ans = -1;
  let lastindex = [[0, 0, 1]];

  while (lastindex.length > 0) {
    let search = lastindex.shift();
    if (search === undefined) {
      break;
    }
    if (search[0] === maps[0].length - 1 && search[1] === maps.length - 1) {
      ans = search[2];
      break;
    }

    findroute(search[0], search[1], search[2]);
  }

  function findroute(x, y, z) {
    for (let i = 0; i < 4; i++) {
      let xx = x + xindex[i];
      let yy = y + yindex[i];
      if (xx >= maps[0].length || yy >= maps.length || xx < 0 || yy < 0) {
        continue;
      }
      if (maps[yy][xx] === 1) {
        lastindex.push([xx, yy, z + 1]);
        maps[y][x] = 0;
      }
      // if (i === 0 && x !== maps[0].length - 1 && route[y][x + 1] === 1) {
      //   lastindex.push([x + 1, y, z + 1]);
      //     continue;
      // }
      // else if (i === 1 && y !== maps.length - 1 && route[y + 1][x] === 1) {
      //   lastindex.push([x, y + 1, z + 1]);continue;
      // }
      // else if (i === 2 && x !== 0 && route[y][x - 1] === 1) {
      //   lastindex.push([x - 1, y, z + 1]);continue;
      // }
      // else if (i === 3 && y !== 0 && route[y - 1][x] === 1) {
      //   lastindex.push([x, y - 1, z + 1]);
      // }
      // }
    }
  }
  return ans;
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
