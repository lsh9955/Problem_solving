function solution(genres, plays) {
  const A = [];
  for (let i = 0; i < genres.length; i++) {
    A.push([genres[i], plays[i]]);
  }

  const why = [];
  for (let i = 0; i < plays.length; i++) {
    why.push([genres[i], plays[i]]);
  }

  const B = A.sort();

  const C = [0];
  const F = [B[0][0]];
  for (let i = 1; i < B.length; i++) {
    B[i][0] == B[i - 1][0] ? "" : C.push(i - 1);
  }
  C.push(B.length - 1);
  for (let i = 1; i < B.length; i++) {
    B[i][0] == B[i - 1][0] ? "" : F.push(B[i][0]);
  }
  //   const E = [];
  //   for (let i = 0; i < B.length; i++) {
  //     E.push(B[i][1]);
  //   }

  //   const D = [];
  //   for (let i = 0; i < C.length - 1; i++) {
  //     if (i == C.map((k) => k[1]).length - 2) {
  //       D.push(
  //         B.map((k) => k[1])
  //           .slice(C[i] + 1)
  //           .reduce((a, b) => a + b)
  //       );
  //     } else if (i == 0) {
  //       D.push(
  //         B.map((k) => k[1])
  //           .slice(0, C[1] + 1)
  //           .reduce((a, b) => a + b)
  //       );
  //     } else {
  //       D.push(
  //         B.map((k) => k[1])
  //           .slice(C[i] + 1, C[i + 1] + 1)
  //           .reduce((a, b) => a + b)
  //       );
  //     }
  //   }
  //   const thisid = B.filter(
  //     (k) =>
  //       k[0] == "classic" &&
  //       (k[1] ==
  //         Math.max.apply(
  //           null,
  //           B.filter((k) => k[0] == "classic").map((k) => k[1])
  //         ) ||
  //         k[1] ==
  //           Math.max.apply(
  //             null,
  //             B.filter(
  //               (k) =>
  //                 k[0] == "classic" &&
  //                 k[1] !==
  //                   Math.max.apply(
  //                     null,
  //                     B.filter((k) => k[0] == "classic").map((k) => k[1])
  //                   )
  //             ).map((k) => k[1])
  //           ))
  //   );
  const add = (a, b) =>
    a[1] == undefined ? a + b[1] : b == undefined ? a[1] : a[1] + b[1];

  const ALLnum = [];
  for (let i = 0; i < F.length; i++) {
    ALLnum.push([
      F[i],
      isNaN(B.filter((k) => k[0] == F[i]).reduce(add)) == true
        ? B.filter((k) => k[0] == F[i]).reduce(add)[1]
        : B.filter((k) => k[0] == F[i]).reduce(add),
    ]);
  }

  const abc = [];
  for (let i = 0; i < ALLnum.length; i++) {
    abc.push(
      B.filter((k) => k[0] == ALLnum.sort((a, b) => b[1] - a[1])[i][0])
        .sort((a, b) => b[1] - a[1])
        .slice(0, 2)
    );
  }

  const ppp = [];
  for (let i = 0; i < abc.length; i++) {
    for (let k = 0; k < 2; k++) {
      if (
        abc[i][1] !== undefined &&
        abc[i][0][0] == abc[i][1][0] &&
        abc[i][0][1] == abc[i][1][1]
      ) {
        const doublenum = why.findIndex(
          (t) =>
            abc[i][k] !== undefined &&
            t[0] == abc[i][k][0] &&
            t[1] == abc[i][k][1]
        );
        ppp.push(
          why.findIndex((t) => t[0] == abc[i][k][0] && t[1] == abc[i][k][1]),
          why
            .filter((k) => why.indexOf(k) > doublenum)
            .findIndex((t) => t[0] == abc[i][k][0] && t[1] == abc[i][k][1]) +
            why.findIndex((t) => t[0] == abc[i][k][0] && t[1] == abc[i][k][1]) +
            1
        );
      } else {
        ppp.push(
          why.findIndex((t) =>
            abc[i][k] == undefined
              ? ""
              : t[0] == abc[i][k][0] && t[1] == abc[i][k][1]
          )
        );
      }
    }
  }
  //   console.log(ppp.filter((k) => k !== -1));

  //   why.splice(
  //     why.findIndex((t) => t[0] == abc[0][0][0] && t[1] == abc[0][0][1]),
  //     1
  //   );

  const set = new Set(ppp.filter((k) => k !== -1));
  const thisset = [...set];
  var answer = thisset;

  return answer;
}
