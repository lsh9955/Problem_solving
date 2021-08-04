function solution(bridge_length, weight, truck_weights) {
  const after = [];
  let bridge = [truck_weights[0]];
  let trucks = truck_weights.slice(1);
  bridge.unshift(0);
  console.log(bridge);
  let time = 1;
  let bridgeWeight;
  while (String(after) !== String(truck_weights.length)) {
    console.log(bridge);
    bridgeWeight = 0;
    for (let i = 0; i < bridge.length; i++) {
      bridgeWeight += bridge[i];
    }

    if (bridgeWeight + trucks[0] > weight && bridge.length < bridge_length) {
      bridge.unshift(0);
    } else if (
      bridgeWeight + trucks[0] > weight &&
      bridge.length === bridge_length
    ) {
      let finishTruck = bridge.pop();
      if (finishTruck !== 0) {
        after.push(finishTruck);
      }
      bridge.push(0);
    } else if (
      bridgeWeight + trucks[0] <= weight &&
      bridge.length < bridge_length
    ) {
      bridge.unshift(trucks[0]);
      trucks.shift();
    } else if (
      bridgeWeight + trucks[0] <= weight &&
      bridge.length === bridge_length
    ) {
      let finishTruck = bridge.pop();
      if (finishTruck !== 0) {
        after.push(finishTruck);
      }

      bridge.push(trucks[0]);
      trucks.shift();
    }
    time += 1;
  }

  var answer = 0;
  return answer;
}
document.write(solution(2, 10, [7, 4, 5, 6]));
