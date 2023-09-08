const str = "ZpglnRxqenU";
function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}
const res = accum(str);
console.log(res);
