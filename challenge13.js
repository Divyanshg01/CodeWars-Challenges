function longest(s1, s2) {
  const merge = s1 + s2;

  const arr = merge.split("");

  const unique = [...new Set(arr)];
  return [...unique].sort().join("");
}
