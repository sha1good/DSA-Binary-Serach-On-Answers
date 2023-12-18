function KthElementOfTwoSortedArrays(array1, array2, targetPosition) {
  const n1 = array1.length,
    n2 = array2.length;

  const arr3 = [];
  // apply the merge step:
  let i = 0,
    j = 0;
  while (i < n1 && j < n2) {
    if (array1[i] < array2[j]) arr3.push(array1[i++]);
    else arr3.push(array2[j++]);
  }

  // copy the left-out elements:
  while (i < n1) {
    arr3.push(array1[i++]);
  }

  while (j < n2) {
    arr3.push(array2[j++]);
  }

  for (let i = 0; i < arr3.length; i++) {
    if (i === targetPosition) {
      return arr3[i - 1];
    }
  }

  return -1;
}

function KthElementOfTwoSortedArraysOptimalSolution(
  array1,
  array2,
  m,
  n,
  targetPosition
) {
  if (n > m) {
    return KthElementOfTwoSortedArraysOptimalSolution(
      array2,
      array1,
      n,
      m,
      targetPosition
    );
  }

  let low = Math.max(0, targetPosition - m),
    high = Math.min(targetPosition, n);

  while (low <= high) {
    let cut1 = Math.floor((low + high) / 2);
    let cut2 = targetPosition - cut1;

    let lengthOfFirstArrayLeft =
      cut1 === 0 ? Number.MIN_SAFE_INTEGER : array1[cut1 - 1];
    let lengthOfSecondArrayleft =
      cut2 === 0 ? Number.MIN_SAFE_INTEGER : array2[cut2 - 1];

    let lengthOfFirstArrayright =
      cut1 === m ? Number.MAX_SAFE_INTEGER : array1[cut1];
    let lengthOfSecondArrayright =
      cut1 === n ? Number.MAX_SAFE_INTEGER : array1[cut2];

    if (
      lengthOfFirstArrayLeft <= lengthOfSecondArrayright &&
      lengthOfSecondArrayleft <= lengthOfFirstArrayright
    ) {
      return Math.max(lengthOfFirstArrayLeft, lengthOfSecondArrayleft);
    } else if (lengthOfFirstArrayLeft > lengthOfSecondArrayright) {
      high = cut1 - 1;
    } else {
      low = cut1 + 1;
    }
  }

  return -1;
}

let array1 = [2, 3, 6, 7, 9];
let array2 = [1, 4, 8, 10];

m = 5;
n = 4;

let targetPosition = 5;

//Time Complexity: O(n1+n2) + O(n), where  n1 and n2 are the sizes of the given arrays and looping through the array3 again to solve the problem.
//Reason: We traverse through both arrays linearly.

//Space Complexity: O(n1+n2), where  n1 and n2 are the sizes of the given arrays.
//Reason: We are using an extra array of size (n1+n2) to solve this problem.
console.log(KthElementOfTwoSortedArrays(array1, array2, targetPosition));

console.log("To optimal Solution");

console.log(
  KthElementOfTwoSortedArraysOptimalSolution(
    array1,
    array2,
    m,
    n,
    targetPosition
  )
);
