const matrixA = [
  [1, 1],
  [1, 1],
];
const matrixB = [
  [22, 2],
  [2, 2],
];

function matrixAddition(a, b) {
  let rows = a.length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows; j++) {
      a[i][j] = a[i][j] + b[i][j];
    }
  }

  return a;
  //TODO
}
matrixAddition(matrixA, matrixB);
