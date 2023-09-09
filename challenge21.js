// function listSquared(m, n) {
//   m;
//   n;
//   const res = [];
//   let count = -1;
//   function SquaredDivisor(k) {
//     let sum = 0;
//     for (let i = 1; i <= k; i++) {
//       if (k % i === 0) {
//         sum += i * i;
//       }
//     }
//     sum;
//     const sqrt = Math.sqrt(sum);
//     // console.log(Number.isInteger(sqrt));
//     if (Number.isInteger(sqrt)) {
//       count++;
//       res[count] = [k, sum];

//       res;
//       return res;
//     }
//   }
//   for (let i = m; i <= n; i++) {
//     const arr = SquaredDivisor(i);
//   }
// }

// const res = listSquared(1, 250);

function listSquared(m, n) {
  let res = [];
  function squaredDivisor(k) {
    let sum = 0;
    for (let i = 1; i <= k; i++) {
      if (k % i == 0) {
        sum += i * i;
      }
    }
    let sqrt = Math.sqrt(sum);
    if (Number.isInteger(sqrt)) {
      return [k, sum];
    }
  }
  for (let i = m; i <= n; i++) {
    let result = squaredDivisor(i);
    if (result != undefined) {
      res = [...res, result];
    }
  }
  return res;
}

listSquared(1, 250);
