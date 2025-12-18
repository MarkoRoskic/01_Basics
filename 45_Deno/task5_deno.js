let a = parseInt(prompt("Gib die Temperatur an"));


if (a < 0 ){
    console.log("Drinnen bleiben");
}else if (a <  10){
    console.log("Warm anziehen");
    
}else if (a < 20){
    console.log("raus gehen");
}else {
    console.log("baden gehen");
    
}