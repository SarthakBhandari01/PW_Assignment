Array.prototype.customInclude = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (value === this[i]) {
      return true;
    }
  }
  return false;
};

const arr = [1, 2, 3, 4];
console.log(arr.customInclude(3));
console.log(arr.customInclude(10));
