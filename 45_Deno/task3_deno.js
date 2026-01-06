let zahl1 = Number(prompt("zahl 1"));
let zahl2 = Number(prompt("zahl 2"));
let rechenart = prompt("Operatoren [+,-,*,/]");

if (rechenart === "+"){
    console.log(zahl1 + zahl2);
}
if (rechenart === "-"){
    console.log(zahl1 - zahl2);
}
if (rechenart === "*"){
    console.log(zahl1 * zahl2);
}
if (rechenart === "/"){
    console.log(zahl1 / zahl2);
}