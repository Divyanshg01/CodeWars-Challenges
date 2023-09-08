const inp1 = "170.0.0.0";
const inp2 = "170.1.0.0";
function ipsBetween(start, end) {
  //TODO
  let maxAddress = 256;
  start = start.split(".");
  console.log(start);
  end = end.split(".");
  console.log(end);
  let diff = 0;
  for (let i = 3; i >= 0; i--) {
    if (i < 3) {
      diff += (Number(end[i]) - Number(start[i])) * Math.pow(maxAddress, 3 - i);
    } else {
      diff += Number(end[i]) - Number(start[i]);
    }
  }
  return diff;
}
const res = ipsBetween(inp1, inp2);
console.log(res);
//65536
