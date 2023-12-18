function MedianOfTwoSortedArraysBruteForceApproach(array1, array2) {
  let newArray = new Array(...array1, ...array2).sort((a, b) => a - b);

  let arrayLength = newArray.length; //Length of the array
  let middle = Math.floor(arrayLength / 2); // getting the middle of the array

  if (arrayLength % 2 === 0) {
    //If the lenght of the array  is even
    return newArray[middle - 1] + newArray[middle] / 2;
  } else {
    //If the lenght of the array is odd
    return newArray[middle];
  }

  // Dummy return statement
  return -1;
}

const array1 = [1, 4, 7, 10, 12];
const array2 = [2, 3, 6, 15];


//Time complexity is O(nlog N)
//Space complexity is O(N)
console.log(MedianOfTwoSortedArraysBruteForceApproach(array1, array2));

 console.log("====================================================")

 function median(a, b) {
    let n1 = a.length, n2 = b.length;
    // if n1 is bigger swap the arrays:
    if (n1 > n2) return median(b, a);

    let n = n1 + n2; // total length
    let left = Math.floor((n1 + n2 + 1) / 2); // length of left half
    // apply binary search:
    let low = 0, high = n1;
    while (low <= high) {
        let mid1 = Math.floor((low + high) / 2);
        let mid2 = left - mid1;
        // calculate l1, l2, r1, and r2
        let l1 = Number.MIN_SAFE_INTEGER, l2 = Number.MIN_SAFE_INTEGER;
        let r1 = Number.MAX_SAFE_INTEGER, r2 = Number.MAX_SAFE_INTEGER;
        if (mid1 < n1) r1 = a[mid1];
        if (mid2 < n2) r2 = b[mid2];
        if (mid1 - 1 >= 0) l1 = a[mid1 - 1];
        if (mid2 - 1 >= 0) l2 = b[mid2 - 1];

        if (l1 <= r2 && l2 <= r1) {
            if (n % 2 === 1) return Math.max(l1, l2);
            else return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
        }

        // eliminate the halves:
        else if (l1 > r2) high = mid1 - 1;
        else low = mid1 + 1;
    }
    return 0; // dummy statement
}

let a = [1, 4, 7, 10, 12];
let b = [2, 3, 6, 15];
console.log("The median of two sorted arrays is " + median(a, b).toFixed(1));