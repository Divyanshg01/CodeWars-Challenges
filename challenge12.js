const s = "this is a string";
function reverseMessage(str) {
  let rev = str.split("").reverse().join("").split(" ");
  let final = "";
  console.log(rev);
  for (let i = 0; i < rev.length; i++) {
    let upperCase = rev[i][0].toUpperCase();
    rev[i][0] = upperCase;
    console.log(upperCase);
  }
  console.log(rev);
}

const result = reverseMessage(s);
// console.log(result);
let word = "aa";
let w;
w = word.toUpperCase();
console.log(w);
let stri = "";

