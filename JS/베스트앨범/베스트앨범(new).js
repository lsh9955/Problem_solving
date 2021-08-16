function solution(genres, plays) {
  let genresSort = [];
  let songInfo = [];
  let songAmount;
  let answerArr = [];

  for (let k = 0; k < genres.length; k++) {
    genresSort.push(genresSort.map((a) => a[0]).includes());
  }

  for (let i = 0; i < genres.length; i++) {
    songInfo.push([genres[i], plays[i], i]);
  }

  songInfo.sort((a, b) => (b[1] === a[1] ? a[2] - b[2] : b[1] - a[1]));

  songAmount = [...new Set(songInfo.map((e) => e[0]))];
  for (let p = 0; p < songAmount.length; p++) {
    let thisElement = songAmount.shift();
    songAmount.push([thisElement, 0]);
  }

  for (let i = 0; i < songInfo.length; i++) {
    for (let k = 0; k < songAmount.length; k++) {
      if (songAmount[k][0] === songInfo[i][0]) {
        songAmount[k][1] += songInfo[i][1];
      }
    }
  }
  songAmount.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < songAmount.length; i++) {
    answerArr.push([]);
  }
  for (let k = 0; k < songAmount.length; k++) {
    for (let i = 0; i < songInfo.length; i++) {
      if (answerArr[k].length === 2) {
        //break랑 k++랑 다른점이 무엇인지?
        break;
      } else if (songAmount[k][0] === songInfo[i][0]) {
        answerArr[k].push(songInfo[i]);
      }
    }
  }

  return answerArr.flat().map((a) => a[2]);
}

document.write(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
