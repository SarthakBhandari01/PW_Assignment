//Infinite Currying
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}
console.log(add(5)(1)(10)());
console.log(add(10)(1)(19)(2)());
