function solution(progresses, speeds) {
  const num = progresses.length;
  const dayamount = [[]];
  let day = 1;
  let ans = [];
  let $progresses = progresses;
  let $speeds = speeds;

  while ($progresses.length !== 0) {
    for (let p = 0; p < $progresses.length; p++) {
      let thispro = $progresses.shift();
      $progresses.push(thispro + $speeds[p]);
    }

    for (let i = 0; i < num; i++) {
      if ($progresses[0] < 100) {
        break;
      } else if ($progresses[0] >= 100) {
        $progresses.shift();
        $speeds.shift();

        if (dayamount[dayamount.length - 1][0] !== day) {
          dayamount.push([day, 1]);
        } else if (dayamount[dayamount.length - 1][0] === day) {
          dayamount[dayamount.length - 1][1] += 1;
        }
      }
    }
    day += 1;
  }
  console.log(dayamount);
  dayamount.shift();
  for (let k = 0; k < dayamount.length; k++) {
    ans.push(dayamount[k][1]);
  }
  return ans;
}
document.write(solution([99], [1]));
