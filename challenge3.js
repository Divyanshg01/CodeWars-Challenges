const str = "aAbjssf";
function duplicateCount(text) {
  let count = 0;
  let uper = text.toUpperCase();
  console.log(uper);
  uper.sort;
  //   console.
//   console.log(uper);
  for (let i = 1; i < uper.length; i++) {
    if(uper[i] == uper[i-1]){
        count++;
    }
  }

  //   text = text.uppe;

  //...
}
duplicateCount(str);
