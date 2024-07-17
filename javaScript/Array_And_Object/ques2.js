const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//Sort the array and find the min and max age
ages.sort((x, y) => x - y);
console.log("Minimum Age => ", ages[0]);
console.log("Maximum Age => ", ages[ages.length - 1]);

//Find the median age(one middle item or two middle items divided by two)
const n = ages.length;
let median;
if (n % 2 == 0) {
  median = (ages[n / 2] + ages[n / 2 - 1]) / 2;
} else {
  median = ages[n / 2];
}
console.log(`median ${median}`);

// Find the average age;
const sum = ages.reduce((accumulator, currVal) => {
  return accumulator + currVal;
}, 0);
const avg = sum / ages.length;
console.log("Average Age ", avg);

// range of ages
const ranges = ages[ages.length - 1] - ages[0];
console.log("Range ", ranges);

//compare
const minAverageDifference = Math.abs(ages[0] - avg);
const maxAverageDifference = Math.abs(ages[ages.length - 1] - avg);
console.log("Minimum average Difference : ", minAverageDifference.toFixed(2));
console.log("Maximum average Difference ", maxAverageDifference.toFixed(2));
