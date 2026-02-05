let sum = 0;

for (let i = 1; i <= 100; i++){
    if (i % 5 === 0){
        sum += i;
    }
}

console.log("Die Summe aller Zahlen von 1 bis 100, die durch 5 teilbar sind:", sum);
