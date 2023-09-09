function productFib(prod) {
  // ...
  function fib(num) {
    if (num == 0) {
      return 0;
    } else if (num == 1) {
      return 1;
    } else {
      return fib(num - 1) + fib(num - 2);
    }
  }
  for (i = 0; true; i++) {
    if (fib(i) * fib(i + 1) >= prod) {
      return [fib(i), fib(i + 1), fib(i) * fib(i + 1) === prod];
      break;
    }
  }
}
