function orderWeight(str) {
  const weightArray = str.split(" ");

  weightArray.sort(function (a, b) {
    const weightA = a
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit), 0);
    const weightB = b
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit), 0);

    if (weightA === weightB) {
      return a.localeCompare(b);
    }

    return weightA - weightB;
  });

  return weightArray.join(" ");
}

// Example usage:
const inputString = "56 65 74 100 99 68 86 180 90";
const orderedString = orderWeight(inputString);
console.log(orderedString); // Output: "100 180 90 56 65 74 68 86 99"
