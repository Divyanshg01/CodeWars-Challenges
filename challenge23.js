//INCOMPLETE
function determinant(m) {
  // return the determinant of the matrix passed in
  m;
  console.log(m[0][0]);
  if (m.length == 1) {
    return m[0];
  }
  if (m.length == 2) {
    return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  }
  if (m.length == 3) {
  }
}
const res = determinant([
  [4, 6],
  [3, 8],
]);

res;
