function canWePlaceCows(stalls, distance, cows) {
  let countCows = 1; // we cannot start counting cows from nothing
  let lastCowPlaced = stalls[0]; //  Start filling from the first stall

  for (let i = 1; i < stalls.length; i++) {
    if (stalls[i] - lastCowPlaced >= distance) {
      countCows = countCows + 1; // I have successfully placed another cow
      lastCowPlaced = stalls[i]; // // update the last location to the new location
    }

    if (countCows >= cows) return true;
  }

  return false;
}

function AggressiveCowsDetailedSolutionBruteForce(stalls, cows) {
  if (stalls.length === 0) return;
  let n = stalls.length; // size of array
  stalls.sort((a, b) => a - b);

  let limit = stalls[n - 1] - stalls[0];
  //I am starting iterating from 1 here because you cannot  have 0 distance
  for (let i = 1; i <= limit; i++) {
    if (canWePlaceCows(stalls, i, cows) === true) continue;
    else return i - 1;
  }

  // Dummy return statement
  return -1;
}

function canWePlaceCowsForBinary(stalls, distance, cows) {
  let countCows = 1;
  let lastCowPlaced = stalls[0];

  for (let i = 1; i < stalls.length; i++) {
    if (stalls[i] - lastCowPlaced >= distance) {
      countCows = countCows + 1;
      lastCowPlaced = stalls[i];
    }

    if (countCows >= cows) return true;
  }

  return false;
}

function AggressiveCowsDetailedSolutionOptimalSolution(stalls, cows) {
  if (stalls.length === 0) return;

  //Sort the  stalls array
  stalls.sort((a, b) => a - b);
  let n = stalls.length;
  // apply binary Search
  let low = 1; // cos you cannot have 0 distance
  let high = stalls[n - 1] - stalls[0];

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (canWePlaceCowsForBinary(stalls, mid, cows) === true) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return high; // or you can store it in  result variable
}

let stalls = [0, 3, 4, 7, 10, 9];
cows = 4;

//Find the maximum possible minimum distance.
//Time Complexity: O(NlogN) + O(N *(max(stalls[])-min(stalls[]))), where N = size of the array, max(stalls[]) = maximum element in stalls[] array, min(stalls[]) = minimum element in stalls[] array.
//Reason: O(NlogN) for sorting the array. We are using a loop from 1 to max(stalls[])-min(stalls[]) to check all possible distances. Inside the loop, we are calling canWePlace() function for each distance. Now, inside the canWePlace() function, we are using a loop that runs for N times.

//Space Complexity: O(1) as we are not using any extra space to solve this problem.
console.log(AggressiveCowsDetailedSolutionBruteForce(stalls, cows));

console.log("==================================================");

console.log(AggressiveCowsDetailedSolutionOptimalSolution(stalls, cows));
