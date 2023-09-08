const n1 = "01";
// const n1 = "712569312664357328695151392";
console.log(n1.length);
const n2 = "8100";
// const n2 = "8100824045303269669937";
console.log(n2.length);
function sumStrings(a_given, b_given) {
  //   if(a_given)
  let a = a_given.replace(/^0+/, "");

  let b = b_given.replace(/^0/, "");
  if (a_given.length === 0) {
    return b;
  }
  if (b_given.length === 0) {
    return a;
  }

  //   let a = parseInt(a_given) + "";

  //   let b = parseInt(b_given) + "";

  let Agreater;

  let bigL;
  let smallL;
  if (a.length === b.length) {
    Agreater = a > b;
  } else if (a.length > b.length) {
    Agreater = true;
  } else {
    Agreater = false;
  }
  let biggEl = Agreater ? a : b;
  let smallEl = Agreater ? b : a;
  bigL = biggEl.length;
  smallL = smallEl.length;
  Agreater;
  bigL;
  smallL;
  let diff = bigL - smallL;
  diff;
  biggEl;
  smallEl;
  let res = "";
  console.log(1 + diff);
  let carry = 0;
  for (let i = smallL - 1; i >= 0; i--) {
    let sum;
    let va1Big = biggEl[i + diff];
    let vaSmall = smallEl[i];
    sum = +va1Big + +vaSmall + carry;
    let str = sum + "";
    res = str.at(-1) + res;
    res;
    sum;

    str.length === 2 ? (carry = 1) : (carry = 0);
    carry;

    // const sum = Number(smallEl[i]) + Number(biggEl[i + diff]);
    // sum;
    // if ((sum.length = 2)) {
    //   let z = res.at(-1);
    //   console.log(z);
    // }
    // res += sum + "";
  }
  carry;
  diff;
  let resv2 = "";
  for (let i = diff - 1; i >= 0; i--) {
    let value = biggEl[i];
    value;
    let sum = +value + carry;
    sum;
    let str = sum + "";
    res = str.at(-1) + res;
    res;
    str;
    str.length === 2 ? (carry = 1) : (carry = 0);
  }
  carry;
  if (carry === 1) res = "1" + res;
  res;
  return res;
}
const result = sumStrings(n1, n2);
result;

//2342
//  23
