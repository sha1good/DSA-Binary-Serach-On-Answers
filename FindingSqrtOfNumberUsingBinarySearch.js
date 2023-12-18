function floorSqrtBruteForce(n) {
  let ans = Math.floor(Math.sqrt(n));
  return ans;
}

let n = 28;
let ans = floorSqrtBruteForce(n);

function floorSqrtOptimalSolution(n) {
  let low = 1;
  let high = n;
  let result = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let value = mid * mid;

    if (value <= n) {
      // Eliminate the left half:
      result = mid;
      low = mid + 1;
    } else {
      // Eliminate the right half:
      high = mid - 1;
    }
  }

  return  result;
}

//Time Complexity: O(logN), N = size of the given array.
//Reason: We are basically using the Binary Search algorithm.

//Space Complexity: O(1) as we are not using any extra space.
console.log("The floor of square root of " + n + " is: " + ans);

 console.log("=======================================")


  console.log(floorSqrtOptimalSolution(n))
