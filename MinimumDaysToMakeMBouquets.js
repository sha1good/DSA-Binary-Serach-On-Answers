function findMin(array) {
  let mini = Infinity;
  let N = array.length;

  for (let i = 0; i < N; i++) {
    mini = Math.min(mini, array[i]);
  }

  return mini;
}

function findMax(array) {
  let maxi = -Infinity;
  let N = array.length;

  for (let i = 0; i < N; i++) {
    maxi = Math.max(maxi, array[i]);
  }

  return maxi;
}

function possibleBouquet(array, day, k, m) {
  let count = 0;
  let noOfBouquet = 0;

  // Count the number of bouquets
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= day) {
      count = count + 1;
    } else {
      noOfBouquet += Math.floor(count / k);
      count = 0;
    }
  }

  noOfBouquet += Math.floor(count / k);  //  This is the last  bit of the loop

  return noOfBouquet >= m;
}

function MinimumDaysToMakeMBouquetsBruteForceApproach(array, m, k, N) {
  if (m * k > N) return -1;

  let mini = findMin(array);
  let maxi = findMax(array);
  let noOfBouquet = 0;

  for (let i = mini; i <= maxi; i++) {
    noOfBouquet = possibleBouquet(array, i, k,m);
    if (noOfBouquet) {
      // return noOfBouquet;
      return i;
    }
  }

  return -1;
}

function MinimumDaysToMakeMBouquetsOptimalApproach(array, m, k) {
  if (N < m * k) return -1;

  let low = findMin(array);
  let high = findMax(array);
  let result = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (possibleBouquet(array, mid, k, m)) {
      result =  mid;
      high = mid - 1; // Eliminate th right half
    } else {
      low = mid + 1;
    }
  }

  return result;
}

let array = [7, 7, 7, 7, 13, 11, 12, 7];
//m is the number of bouquest that is asked to be formed from the flower
// K is  the number of adjacent flower that can be picked
let m = 2,
  k = 3,
  N = 8;

// Time Complexity: O((max(arr[])-min(arr[])+1) * N), where {max(arr[]) -> maximum element of the array, min(arr[]) -> minimum element of the array, N = size of the array}.
//Reason: We are running a loop to check our answers that are in the range of [min(arr[]), max(arr[])].
//For every possible answer, we will call the possible() function. Inside the possible() function, we are traversing the entire array, which results in O(N).

//Space Complexity: O(1) as we are not using any extra space to solve this problem.
console.log(MinimumDaysToMakeMBouquetsBruteForceApproach(array, m, k, N));

console.log("============================================");


// Time Complexity: O((max(arr[])-min(arr[])+1) * log N), where {max(arr[]) -> maximum element of the array, min(arr[]) -> minimum element of the array, N = size of the array}.
//Reason: We are running a loop to check our answers that are in the range of [min(arr[]), max(arr[])].
//For every possible answer, we will call the possible() function. Inside the possible() function, we are traversing the entire array, which results in O(N).

//Space Complexity: O(1) as we are not using any extra space to solve this problem.
console.log(MinimumDaysToMakeMBouquetsOptimalApproach(array, m, k, N));
