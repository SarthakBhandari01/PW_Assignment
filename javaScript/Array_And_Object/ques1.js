const sCart = ["Milk", "Coffee", "Tea", "$one"];

if (!sCart.includes("Meat")) {
  sCart.unshift("Meat");
}
console.log(sCart);

if (!sCart.includes("Sugar")) {
  sCart.push("Sugar");
}
console.log(sCart);

const honeyIndex = sCart.indexOf("Honey");
if (honeyIndex != -1) {
  sCart.splice(honeyIndex, 1);
}
console.log(sCart);

const teaIndex = sCart.indexOf("Tea");
if (teaIndex != -1) {
  sCart[teaIndex] = "coffee";
}
console.log(sCart);
