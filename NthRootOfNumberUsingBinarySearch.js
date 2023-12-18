function func(mid, n, m) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * mid;
    if (result > m) return 2;
  }
  if (result === m) return 1;

  return 0;
}

function NthRootOfNumberUsingBinarySearch(n, m) {
  let low = 1;
  let high = m;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let rootNumber = func(mid, n, m);
    if (rootNumber === 1) return mid;
    else if (rootNumber === 0) low = mid + 1;
    else high = mid - 1;
  }

  return -1;
}

let n = 3;
let m = 27;

console.log(NthRootOfNumberUsingBinarySearch(n, m));
