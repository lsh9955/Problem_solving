function solution(name) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let givenNotA = name
    .slice()
    .split("")
    .map((a) => (a === "A" ? 0 : 1));
  let moveCount = [];
  function findRoute(arr) {
    for (let i = 0; i < 2; i++) {
      if (i === 0) {
      }
    }
  }

  let givenName = name.slice().split("");
  let defalutName = Array(name.length)
    .fill()
    .map((v) => "A");
  let nowCursorIndex = 0;
  let nowAlphabetIndex = 0;
  let nowClick = 0;

  const firCount =
    alphabet.findIndex((e) => e === givenName[0]) >
    alphabet.length - alphabet.findIndex((e) => e === givenName[0])
      ? alphabet.length - alphabet.findIndex((e) => e === givenName[0])
      : alphabet.findIndex((e) => e === givenName[0]);

  console.log(firCount);
  var answer = 0;
  return answer;
}
document.write(solution("AEROEN"));
