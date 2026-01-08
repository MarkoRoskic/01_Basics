let a = parseInt(prompt("Gib die erste Zahl ein:"));
let b = parseInt(prompt("Gib die zweite Zahl ein:"));

let start = Math.min(a, b);
let end = Math.max(a, b);

let sum = 0;
for (let i = start; i <= end; i++){
    sum += i;
}

console.log(`Die Summe aller Zahlen von ${start} bis ${end} ist: ${sum}`);