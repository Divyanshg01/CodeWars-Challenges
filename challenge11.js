function zeros(n) {
  // your code here
  let count = 0;
  for (let i = 5; i <= n; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}
