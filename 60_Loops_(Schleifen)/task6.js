let count = parseInt(prompt("Wie viele zahlen möchtet du eingeben?"));
count = Number(count);

let sum = 0;

for (let i = 1; i <= count; i++){
    sum += Number(prompt(`Gib Zahl ${i} ein:`));
}

let average = sum / count;

console.log(`Der Durchschnitt der eingegebenen Zahlen ist: ${average}`);