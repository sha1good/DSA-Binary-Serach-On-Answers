function findMax(array) {
  let maxi = -Infinity;

  for (let i = 0; i < array.length; i++) {
    maxi = Math.max(maxi, array[i]);
  }

  return maxi;
}

function calculateTotalHours(array, mid) {
  let totalHours = 0;
  let n = array.length;

  for (let i = 0; i < n; i++) {
    totalHours += Math.ceil(array[i] / mid);
  }

  return totalHours;
}

function KokoBeanBanna(array, hours) {
  let low = 1;
  let high = findMax(array);
  let result = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2); //This is the number of bannana Koko is eating per hour

    let totalHours = calculateTotalHours(array, mid);

    if (totalHours <= hours) {
      result = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return result;
}

let array = [3, 6, 7, 11];
let hours = 8;
console.log(KokoBeanBanna(array, hours));
