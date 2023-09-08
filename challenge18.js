let link = "http://google.com";
function domainName(url) {
  let st;
  if (url.includes("//")) {
    st = url.indexOf("//");
    st += 2;
  } else {
    st = 0;
  }
  st;
  console.log(url[st] === "w");
  if (url[st] === "w") {
    st += 4;
  }
  let end = url.indexOf(".", st);

  return url.substring(st, end);

}

const res = domainName(link);
console.log(res);
