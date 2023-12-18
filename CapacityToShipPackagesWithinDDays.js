function findDays(weight, capacity) {
  let load = 0;
  let days = 1;

  for (let i = 0; i < weight.length; i++) {
    if (weight[i] > capacity) {
      days = days + 1; //the load will be shipped the following days
      load = weight[i];
    } else {
      load += weight[i]; // the load will be shipped the same day
    }
  }

  return days;
}

function CapacityToShipPackagesWithinDDaysBruteForce(weight, days) {
  if (weight.length === 0) return;

  //The capacity will be from the maximum value in the array
  // and the sum of the elements in the elements

  // Find the maximum and the summation: to pass the capacity that can be taken each day
  let maxi = Math.max(...weight);

  let totalLoad = weight.reduce((current, weight) => current + weight, 0);

  for (let i = maxi; i <= totalLoad; i++) {
    if (findDays(weight, i) <= days) {
      return i;
    }
  }

  //Return dummy statement
  return -1;
}

let array = [5, 4, 5, 2, 3, 4, 5, 6];
let days = 5;

console.log(CapacityToShipPackagesWithinDDaysBruteForce(array, days));

console.log("======================================");
function findDays(weights, cap) {
  let days = 1; // First day.
  let load = 0;
  let n = weights.length; // Size of array.

  for (let i = 0; i < n; i++) {
    if (load + weights[i] > cap) {
      days += 1; // Move to next day.
      load = weights[i]; // Load the weight.
    } else {
      // Load the weight on the same day.
      load += weights[i];
    }
  }
  return days;
}

function leastWeightCapacity(weights, d) {
  // Find the maximum and the summation:
  let maxi = Math.max(...weights);
  let sum = weights.reduce((acc, weight) => acc + weight, 0);

  for (let i = maxi; i <= sum; i++) {
    if (findDays(weights, i) <= d) {
      return i;
    }
  }
  // Dummy return statement:
  return -1;
}

//For finding the days of the laod
function findDDays(weight, capacity) {
  let load = 0;
  let days = 1;

  for (let i = 0; i < weight.length; i++) {
    if (load + weight[i] <= capacity) {
      load += weight[i];
    } else {
      days = days + 1;
      load = weight[i];
    }
  }

  return days;
}

function CapacityToShipPackagesWithinDDaysOptimalSolution(weight, days) {
  if (weight.length === 0) return;

  let low = Math.max(...weight);
  let high = weight.reduce((current, weig) => current + weig, 0);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (findDDays(weight, mid) <= days) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

let weights = [5, 4, 5, 2, 3, 4, 5, 6];
let d = 5;
let ans = leastWeightCapacity(weights, d);

//Time Complexity: O(N * (sum(weights[]) – max(weights[]) + 1)), where sum(weights[]) = summation of all the weights, max(weights[]) = maximum of all the weights, N = size of the weights array.
//Reason: We are using a loop from max(weights[]) to sum(weights[]) to check all possible weights. Inside the loop, we are calling findDays() function for each weight. Now, inside the findDays() function, we are using a loop that runs for N times.

//Space Complexity: O(1) as we are not using any extra space to solve this problem.
console.log("The minimum capacity should be: " + ans);

console.log("=======================================");

console.log(CapacityToShipPackagesWithinDDaysOptimalSolution(weights, d));
