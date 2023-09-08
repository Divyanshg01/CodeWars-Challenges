let num = 26;
let count = 0;
function removeNb(n) {
  let totalS = (n * (n + 1)) / 2;
  const resArr = [];
  console.log(totalS);
  for (let i = 1; i < n; i++) {
    for (let j = i; j <= n; j++) {
      let sum = totalS - i - j;
      console.log(sum);
      if (i * j === sum) {
        resArr[count] = [i, j];
        count++;
        resArr[count] = [j, i];
        count++;
      }
    }
  }
  resArr;
}
removeNb(num);
