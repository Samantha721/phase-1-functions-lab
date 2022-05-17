// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

function distanceFromHqInFeet(sumValue) {
  return distanceFromHqInBlocks(sumValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
  if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  const calculate = distanceTravelledInFeet(start, destination);
  if (calculate <= 400) {
    return 0;
  } else if (calculate > 400 && calculate <= 2000) {
    return 0.02 * calculate;
    return 2.56;
  } else if (calculate > 2000 && calculate < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
