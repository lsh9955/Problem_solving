function solution(game_board, table) {
  let emptyArr = [];
  for (let i = 0; i < game_board.length; i++) {
    for (let k = 0; k < game_board.length; k++) {
      console.log(i, k);
      if (game_board[i][k] === 0) {
        i++;
        k--;
      }
    }
  }
  var answer = -1;
  return answer;
}
document.write(
  solution(
    [
      [1, 1, 0, 0, 1, 0],
      [0, 0, 1, 0, 1, 0],
      [0, 1, 1, 0, 0, 1],
      [1, 1, 0, 1, 1, 1],
      [1, 0, 0, 0, 1, 0],
      [0, 1, 1, 1, 0, 0],
    ],
    [
      [1, 0, 0, 1, 1, 0],
      [1, 0, 1, 0, 1, 0],
      [0, 1, 1, 0, 1, 1],
      [0, 0, 1, 0, 0, 0],
      [1, 1, 0, 1, 1, 0],
      [0, 1, 0, 0, 0, 0],
    ]
  )
);
