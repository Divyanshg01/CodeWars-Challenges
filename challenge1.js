const s = "hello there how are you ladies and gentleman";

function Reverse(string) {
  const words = s.split(" ");
  //   console.log(words)
  console.log(words.length);
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    console.log(word);
    let letters = word.split("");
    console.log(letters);
    if (letters.length >= 5) {
      let revWord = letters.reverse().join("");
      console.log(revWord);
      // console.log(word)
      words[i] = revWord;
    } else {
      words[i] = word;
      //   revStr += letters;
      //   console.log(revStr)
    }
  }
  console.log(words.join(" "));
}
Reverse(s);
