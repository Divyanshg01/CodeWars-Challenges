const str = "testaa";
function getMiddle(s) {
  //Code goes here!
  const len = s.length;
  console.log(len);
  if (len % 2 != 0) {

    return s[(len - 1) / 2];
  } else {

    return `${s[len / 2 - 1]}${s[len / 2]}`;
  }
}

const value = getMiddle(str);
console.log(value);
