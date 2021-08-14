function solution(genres, plays) {
  let genresSort = [];
  let songInfo = [];

  for (let k = 0; k < genres.length; k++) {
    genresSort.push(genresSort.map((a) => a[0]).includes());
  }

  for (let i = 0; i < genres.length; i++) {
    songInfo.push([genres[i], plays[i], i]);
  }
  songInfo.sort((a, b) => (b[1] === a[1] ? a[2] - b[2] : b[1] - a[1]));
  console.log(songInfo.map((a) => a[0]));
  return "hello";
}

document.write(
  solution(
    ["classic", "pop", "classic", "classic", "pop", "jazz"],
    [500, 600, 150, 800, 2500, 500]
  )
);
