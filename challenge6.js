const n = 134;
function squareDigits(num) {
  const str = num + "";
  let res = "";
  for (let i = 0; i < str.length; i++) {
    const number = +str[i];
    console.log(typeof number);
    res += `${Math.pow(number, 2)}`;
    console.log(res);
    
  }
  return +res;


}

const value = squareDigits(n);

console.log(typeof value);
