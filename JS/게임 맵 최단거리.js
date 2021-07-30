function solution(maps) {
  let route = maps;
  let count = 1;
  let lastindex = [];
  function findroute(x, y) {
    if (x !== maps.length - 1 && route[x + 1][y] === 1) {
      route[x][y] = 0;
      count++;
      findroute(x + 1, y);
      lastindex.push([x + 1, y]);
    } else if (y !== maps[0].length - 1 && route[x][y + 1] === 1) {
      route[x][y] = 0;
      count++;
      findroute(x, y + 1);
      lastindex.push([x, y + 1]);
    } else if (x !== 0 && route[x - 1][y] === 1) {
      console.log(x, y);
      route[x][y] = 0;
      count++;
      findroute(x - 1, y);
    } else if (y !== 0 && route[x][y - 1] === 1) {
      route[x][y] = 0;
      count++;
      findroute(x, y - 1);
    }
  }
  findroute(0, 0);

  if (
    lastindex[0][0] === maps[0].length - 1 &&
    lastindex[0][1] === maps.length - 1
  ) {
    return count;
  } else {
    return -1;
  }
}


