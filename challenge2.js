let v = 153;
function narcissistic(value) {
  let sum = 0;
  // Code me to return true or false
  let Str = value + "";
  //   Str = parseInt(Str);
  //   Str = Str + "";

  //   let b = Number(Str) + 2;
  //   console.log(typeof b);
  const len = Str.length;
  console.log(typeof len);
  //   let fvalue;
  for (let i = 0; i < Str.length; i++) {
    // console.log(typeof(Str[]))
    sum += Math.pow(Number(Str[i]), Str.length);
    console.log(sum);
  }
  //   console.log(sum === value)
  return sum === value;
}
// console.log(fvalue)

narcissistic(v);
