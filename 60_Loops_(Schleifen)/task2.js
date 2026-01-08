let sum = 0;

for (let i = 1; i <= 50; i++){
    if (i % 2 !== 0){
        sum += i;
    }
}

console.log("Summe aller ungeraden Zahlen von 1 bis 50:", sum);