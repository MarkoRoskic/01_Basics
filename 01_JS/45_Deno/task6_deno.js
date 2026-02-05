let Getränk = parseInt(prompt("Welches Getränk willst du haben? Cola, Wasser, Bier, Tee"));
let Cola = 1
let Wasser = 2
let Bier = 3
let Tee = 4

if (Getränk == "Cola"){
    console.log("Du hast Cola bestellt");
}
else if (Getränk == "Wasser") {
    console.log("Du hast Wasser bestellt");
}
else if (Getränk == "Bier") {
    console.log("Du hast Bier bestellt");
}
else if (Getränk == "Tee") {
    console.log("Du hast Tee bestellt");
}
else {
    console.log("Das Getränk gibt es nicht");
}

