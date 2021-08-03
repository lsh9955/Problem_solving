function solution(n, computers) {
  let comArr = Array(n)
    .fill()
    .map((v, i) => i);

  let networks = [[]];
  let oneIndex = [];
  let alreadyIn = false;
  let alIndex;
  let thisNum = 0;

  while (thisNum <= n - 1) {
    oneIndex = [];
    alreadyIn = false;
    sameNetwork(thisNum);
    thisNum += 1;
  }

  function sameNetwork(num) {
    for (let i = 0; i < n; i++) {
      if (computers[num][i] === 1) {
        oneIndex.push(i);
      }
    }

    for (let p = 0; p < networks.length; p++) {
      for (let k = 0; k < oneIndex.length; k++) {
        if (networks[p].includes(oneIndex[k])) {
          alreadyIn = true;
          alIndex = p;
          break;
        }
      }
    }
    if (alreadyIn === false) {
      alreadyIn = 0;
    }

    if (alreadyIn === true) {
      for (let j = 0; j < oneIndex.length; j++) {
        if (!networks[alIndex].includes(oneIndex[j])) {
          networks[alIndex].push(oneIndex[j]);
        }
      }
    }

    if (alreadyIn === 0) {
      networks.push(oneIndex);
    }
  }

  // for (let i = 0; i < n; i++) {
  //   if (computers[num][i] === 1) {
  //     for (let p = 0; p < networks.length; p++) {
  //       if (networks[p].includes(i)) {
  //         alreadyIn = true;
  //         alIndex = p;
  //       }
  //     }
  //     if (alreadyIn === true) {
  //       networks[alIndex].push(i);
  //     } else if (alreadyIn === false) {
  //       networks.push([]);
  //       networks[networks.length - 1].push(i);
  //     }

  //     sameNetwork(i);
  //   }

  if (networks[0] == "") {
    return networks.length - 1;
  } else {
    return networks.length;
  }
}
document.write(
  solution(6, [
    [1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 1],
  ])
);
