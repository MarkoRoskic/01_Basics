
let arr = [];

for (let i = 0; i < 7; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log("Zahlen:", arr);
console.log("Summe:", sum);


