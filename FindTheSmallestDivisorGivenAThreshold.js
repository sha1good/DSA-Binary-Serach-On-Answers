function FindTheSmallestDivisorGivenAThresholdBruteForceApproach(
  array,
  limit,
  N
) {
  if (array.length === 0) return;

  let maxi = Math.max(...array); // find the maximum element

  for (let i = 1; i <= maxi; i++) {
    let sumOfDivisor = 0;
    for (let j = 0; j < N; j++) {
      sumOfDivisor += Math.ceil(array[j] / i);
    }

    if (sumOfDivisor <= limit) {
      return i;
    }
  }
  return -1;
}


 function sumOfDivisor(array, divisor){
    let  sum = 0;
     for(let i=0; i< array.length; i++){
        sum +=  Math.ceil(array[i] / divisor);
     }

     return sum;
 }
function FindTheSmallestDivisorGivenAThresholdOptimalSolution(array, limit, N) {
if(N > limit) return -1;
  let low = Math.min(...array);
  let high = Math.max(...array);
  let result = 0;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (sumOfDivisor(array, mid) <= limit) {
      result =  mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  //Dummy Return Statement
  return result;
}

let array = [1, 2, 3, 4, 5];
let limit = 8;
let N = 5;

//Time Complexity: O(max(arr[])*N), where max(arr[]) = maximum element in the array, N = size of the array.
//Reason: We are using nested loops. The outer loop runs from 1 to max(arr[]) and the inner loop runs for N times.

//Space Complexity: O(1) as we are not using any extra space to solve this problem.

console.log(
  FindTheSmallestDivisorGivenAThresholdBruteForceApproach(array, limit, N)
);

console.log("====================================================");


//Time Complexity: O(log(max(arr[]))*N), where max(arr[]) = maximum element in the array, N = size of the array.
//Reason: We are applying binary search on our answers that are in the range of [1, max(arr[])]. For every possible divisor ‘mid’, we call the sumByD() 
//function. Inside that function, we are traversing the entire array, which results in O(N).
console.log(
  FindTheSmallestDivisorGivenAThresholdOptimalSolution(array, limit, N)
);
