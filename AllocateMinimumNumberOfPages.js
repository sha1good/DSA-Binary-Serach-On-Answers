// Problem Statement: Given an array ‘arr of integer numbers, ‘ar[i]’ represents the number of pages in the ‘i-th’ book.
// There are a ‘m’ number of students, and the task is to allocate all the books to the students.
// Allocate books in such a way that:

// Each student gets at least one book.
// Each book should be allocated to only one student.
// Book allocation should be in a contiguous manner.
// You have to allocate the book to ‘m’ students such that the maximum number of pages assigned to a student is minimum.
// If the allocation of books is not possible. return -1

function countStudents(
  arrayOfpages,
  maximumPagesThatCanbeAssigned,
  numberOfBooks
) {
  // In the begining, the firsttudent has 0 pages of books
  let studentNumber = 1;
  let pagesAssigned = 0;

  for (let i = 0; i < numberOfBooks; i++) {
    if (pagesAssigned + arrayOfpages[i] <= maximumPagesThatCanbeAssigned) {
      pagesAssigned += arrayOfpages[i]; // Keep on Assigning the pages to student
    } else {
      // I will assign to another student
      studentNumber = studentNumber + 1;
      pagesAssigned = arrayOfpages[i];
    }
  }

  return studentNumber;
}

function AllocateMinimumNumberOfPagesBruteForceApproach(
  arrayOfpages,
  numberOfBooks,
  numberOfStudents
) {
  if (arrayOfpages.length === 0) return;

  let maxiOfpages = Math.max(...arrayOfpages);

  let sumOfAllPages = arrayOfpages.reduce(
    (current, arrayOfpage) => current + arrayOfpage,
    0
  );

  for (let i = maxiOfpages; i <= sumOfAllPages; i++) {
    if (countStudents(arrayOfpages, i, numberOfBooks) <= numberOfStudents)
      return i;
  }

  return -1;
}

function AllocateMinimumNumberOfPagesOptimalSolution(
  arrayOfpages,
  numberOfBooks,
  numberOfStudents
) {
  if (arrayOfpages.length === 0) return;

  let maxiOfpages = Math.max(...arrayOfpages);

  let sumOfAllPages = arrayOfpages.reduce(
    (current, arrayOfpage) => current + arrayOfpage,
    0
  );

  let low = maxiOfpages;
  let high = sumOfAllPages;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (countStudents(arrayOfpages, mid, numberOfBooks) > numberOfStudents) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
}

let numberOfBooks = 4,
  numberOfStudents = 2,
  arrayOfpages = [12, 34, 67, 90];

//Time Complexity: O(N * (sum(arr[])-max(arr[])+1)), where N = size of the array,
//sum(arr[]) = sum of all array elements, max(arr[]) = maximum of all array elements.
//Reason: We are using a loop from max(arr[]) to sum(arr[]) to check all possible numbers of pages.
//Inside the loop, we are calling the countStudents() function for each number.
//Now, inside the countStudents() function, we are using a loop that runs for N times.
//Space Complexity:  O(1) as we are not using any extra space to solve this problem.
console.log(
  AllocateMinimumNumberOfPagesBruteForceApproach(
    arrayOfpages,
    numberOfBooks,
    numberOfStudents
  )
);

console.log(
  "================================================================="
);



//Time Complexity: O(N * log(sum(arr[])-max(arr[])+1)), where N = size of the array, sum(arr[]) = sum of all array elements, max(arr[]) = maximum of all array elements.
//Reason: We are applying binary search on [max(arr[]), sum(arr[])]. 
//Inside the loop, we are calling the countStudents() function for the value of ‘mid’. Now, inside the countStudents() function, we are using a loop that runs for N times.

//Space Complexity:  O(1) as we are not using any extra space to solve this problem.
console.log(
  AllocateMinimumNumberOfPagesOptimalSolution(
    arrayOfpages,
    numberOfBooks,
    numberOfStudents
  )
);
