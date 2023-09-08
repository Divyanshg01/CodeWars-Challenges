const number = 2000;
function toRoman(num) {
  const str = +num;
  console.log(str);
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let nthplace = str.length - i;
    const n = +str[i];
    if(nthplace>1){
        switch (n) {
          case 1:
            str += "I";
            break;
        }
    }
  }
}
toRoman(2000);
function fromRoman(str) {
  return 4;
}
