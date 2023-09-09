decodeMorse = function (morseCode) {
  const text = morseCode.trim();
  const arr = text.split("   ");

  let sentence = "";
  for (let i = 0; i < arr.length; i++) {
    const letter = arr[i].split(" ");

    let word = "";
    for (let k = 0; k < letter.length; k++) {
      const alphabet = MORSE_CODE[letter[k]];
      word += alphabet;
    }
    word = " " + word;
    sentence += word;
  }
  return sentence.trim();
};
