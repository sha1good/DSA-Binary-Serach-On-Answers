function countPainters(boards, time) {
    let n = boards.length; // size of array
    let painters = 1;
    let boardsPainter = 0;
    for (let i = 0; i < n; i++) {
        if (boardsPainter + boards[i] <= time) {
            // allocate board to current painter
            boardsPainter += boards[i];
        } else {
            // allocate board to next painter
            painters++;
            boardsPainter = boards[i];
        }
    }
    return painters;
}

function findLargestMinDistance(boards, k) {
    let low = Math.max(...boards);
    let high = boards.reduce((a, b) => a + b, 0);

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let painters = countPainters(boards, mid);
        if (painters > k) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
}

let boards = [10, 20, 30, 40];
let k = 2;
let ans = findLargestMinDistance(boards, k);

// Time Complexity: O(N * log(sum(arr[])-max(arr[])+1)), where N = size of the array, sum(arr[]) = sum of all array elements, max(arr[]) = maximum of all array elements.
// Reason: We are applying binary search on [max(arr[]), sum(arr[])]. Inside the loop, we are calling the countPainters() function for the value of ‘mid’. Now, inside the countPainters() function, we are using a loop that runs for N times.

// Space Complexity:  O(1) as we are not using any extra space to solve this problem.
console.log("The answer is:", ans);

