function KthMissingPositiveNumber(array, k) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= k) k++; // shifting k.
    else break;
  }

  return k;
}

function KthMissingPositiveNumberOptimalSolution(array, k) {
  if (array.length === 0) return;

  let low = 0,
    high = array.length - 1;
    

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let missing = array[mid] - (mid + 1);   // or (array[high] - (high + 1)
    if (missing < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
                         
  //missing can also be the index of the array we are taking into  consideration
  return k + high + 1;     // or k + low  since (high + 1 === low)
//  (array[high] + more) = (array[high] + (k- missing)) = (array[high]  + k - (array[high] - (high + 1)) = 
 //(array[high] - array[high]+ k + high + 1))
}

let array = [4, 7, 9, 10];
let k = 1;

//Note: The main idea is to shift k by 1 step if the current element is smaller or equal to k.
//And whenever we get a number > k, we can conclude that k is the missing number.
//Time Complexity: O(N), N = size of the given array.
//Reason: We are using a loop that traverses the entire given array in the worst case.

//Space Complexity: O(1) as we are not using any extra space to solve this problem.


console.log(KthMissingPositiveNumber(array, k));

console.log("=========================================");


//Time Complexity: O(logN), N = size of the given array.
//Reason: We are using the simple binary search algorithm.

//Space Complexity: O(1) as we are not using any extra space to solve this problem.
console.log(KthMissingPositiveNumberOptimalSolution(array, k));
