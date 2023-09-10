// function multiply(a, b) {
//   a = a.replace(/^0+/, "");
//   b = b.replace(/^0+/, "");
//   if (a == "0" || b == "0") return "0";
//   let arr = [];
//   let count = -1;
//   function sumStrings(a_given, b_given) {
//     //   if(a_given)
//     let a = a_given.replace(/^0+/, "");

//     let b = b_given.replace(/^0/, "");
//     if (a_given.length === 0) {
//       return b;
//     }
//     if (b_given.length === 0) {
//       return a;
//     }

//     //   let a = parseInt(a_given) + "";

//     //   let b = parseInt(b_given) + "";

//     let Agreater;

//     let bigL;
//     let smallL;
//     if (a.length === b.length) {
//       Agreater = a > b;
//     } else if (a.length > b.length) {
//       Agreater = true;
//     } else {
//       Agreater = false;
//     }
//     let biggEl = Agreater ? a : b;
//     let smallEl = Agreater ? b : a;
//     bigL = biggEl.length;
//     smallL = smallEl.length;
//     Agreater;
//     bigL;
//     smallL;
//     let diff = bigL - smallL;
//     diff;
//     biggEl;
//     smallEl;
//     let res = "";
//     console.log(1 + diff);
//     let carry = 0;
//     for (let i = smallL - 1; i >= 0; i--) {
//       let sum;
//       let va1Big = biggEl[i + diff];
//       let vaSmall = smallEl[i];
//       sum = +va1Big + +vaSmall + carry;
//       let str = sum + "";
//       res = str.at(-1) + res;
//       res;
//       sum;

//       str.length === 2 ? (carry = 1) : (carry = 0);
//       carry;

//       // const sum = Number(smallEl[i]) + Number(biggEl[i + diff]);
//       // sum;
//       // if ((sum.length = 2)) {
//       //   let z = res.at(-1);
//       //   console.log(z);
//       // }
//       // res += sum + "";
//     }
//     carry;
//     diff;
//     let resv2 = "";
//     for (let i = diff - 1; i >= 0; i--) {
//       let value = biggEl[i];
//       value;
//       let sum = +value + carry;
//       sum;
//       let str = sum + "";
//       res = str.at(-1) + res;
//       res;
//       str;
//       str.length === 2 ? (carry = 1) : (carry = 0);
//     }
//     carry;
//     if (carry === 1) res = "1" + res;
//     res;
//     return res;
//   }
//   function MultiplyOne(A, B) {
//     //B- one no. as a string
//     //A - a whole no. with multiple digits as a string
//     A = A.split("");
//     let c = 0;
//     let mult = "";
//     for (let i = A.length - 1; i >= 0; i--) {
//       let res = parseInt(+B * +A[i] + c) + "";
//       res.length >= 2 ? (c = res[0]) : (c = 0);
//       mult = res.at(-1) + mult;
//     }
//     if (c != 0) {
//       mult = `${c}` + mult;
//     }
//     return mult + "";
//   }

//   let iterr = 0;
//   for (let i = b.length - 1; i >= 0; i--) {
//     let result = MultiplyOne(a, b[i]);
//     result;
//     ++count;
//     arr[count] = result + `${"0".repeat(iterr)}`;
//     iterr++;
//   }

//   let final = "";
//   for (let i = 0; i < arr.length; i++) {
//     final = sumStrings(final, arr[i]);
//   }
//   final;
//   return final;
// }
// multiply("6", "3");

// const num = "0003";
// console.log(num.replace(/^0+/, ""));

//GPT SOLN
function multiply(a, b) {
  // Remove leading zeros
  a = a.replace(/^0+/, "");
  b = b.replace(/^0+/, "");

  // Handle zero multiplication
  if (a === "0" || b === "") return "0";
  if (b === "0" || a === "") return "0";

  // Initialize the result as an array of zeros
  let result = Array(a.length + b.length).fill(0);

  // Perform multiplication
  for (let i = a.length - 1; i >= 0; i--) {
    let carry = 0;
    for (let j = b.length - 1; j >= 0; j--) {
      const product = parseInt(a[i]) * parseInt(b[j]) + result[i + j + 1] + carry;
      result[i + j + 1] = product % 10;
      carry = Math.floor(product / 10);
    }
    result[i] += carry;
  }

  // Convert the result to a string and remove leading zeros
  const resultStr = result.join("").replace(/^0+/, "");
  
  return resultStr === "" ? "0" : resultStr;
}

// Example usage:
const result = multiply("123", "456");
console.log(result); // Output: "56088"