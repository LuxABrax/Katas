const has = (num, d) => {
  num1 = num % 10;
  num10 = (num - num1) / 10;
  return num % d === 0 || num1 === d || num10 === d;
};
function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (has(i, 3) && has(i, 5)) {
      console.log(i + " FizzBuzz");
    } else if (has(i, 3)) {
      console.log(i + " Fizz");
    } else if (has(i, 5)) {
      console.log(i + " Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzbuzz(100);
