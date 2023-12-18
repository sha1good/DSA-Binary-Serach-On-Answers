// Split Array – Largest Sum
// Problem Statement: Given an integer array ‘A’ of size ‘N’ and an integer ‘K’. Split the array ‘A’ into ‘K’ non-empty subarrays such that the largest sum of any subarray is minimized. Your task is to return the minimized largest sum of the split.
// A subarray is a contiguous part of the array.

function countPartitions(array, maxSum) {
  let n = array.length;
  let partition = 1;
  let subarraySum = 0;

  for (let i = 0; i < n; i++) {
    if (subarraySum + array[i] <= maxSum) {
      subarraySum += array[i];
    } else {
      subarraySum = array[i];
      partition = partition + 1;
    }
  }

  return partition;
}

function SplitArrayLargestSum(array, targetkSubarrays) {
  if (array.length === 0) return;

  let low = Math.max(...array);
  let high = array.reduce((current, arr) => current + arr, 0);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (countPartitions(array, mid) > targetkSubarrays) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
}

let array = [10, 20, 30, 40];

let targetkSubarrays = 2;

//We are to return  the min of all the maximum of the subarrays

console.log(SplitArrayLargestSum(array, targetkSubarrays));
