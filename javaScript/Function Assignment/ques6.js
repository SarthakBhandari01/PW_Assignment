function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...moreArgs) => curried(...args, ...moreArgs);
    }
  };
}
function add(a, b) {
  return a + b;
}
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2));
