const str = "abcdefghiz";
function printerError(s) {
  // your code
  const arr = s.split("");
  //   const colors = 'abcdefghijklm'.split('');
  const len = arr.length;
  console.log(len);
  let err = 0;
  for (let i = 0; i < len; i++) {
    let asciiValue = s.charCodeAt(i);
    console.log(asciiValue);
    if (!(asciiValue <= 109 && asciiValue >= 97)) {
      err = err + 1;
    }
  }
  console.log(len);
  console.log(err);
  return `${err}/${len}`;
}
const value = printerError(str);
console.log(value)

