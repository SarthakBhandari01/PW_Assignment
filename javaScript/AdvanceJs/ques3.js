const calculator = {
  value: 0,
  add(n) {
    this.value += n;
    return this;
  },
  sub(n) {
    this.value -= n;
    return this;
  },
  mul(n) {
    this.value *= n;
    return this;
  },
  divide(n) {
    if (n != 0) {
      this.value /= n;
    } else {
      console.error("Division by zero is not allowed");
    }
    return this;
  },
  getResult(){
    return this.value;
  }
};

const res=calculator.add(10).sub(2).mul(3).divide(2).getResult();
console.log(res);