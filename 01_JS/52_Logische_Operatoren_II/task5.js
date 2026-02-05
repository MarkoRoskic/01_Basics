let heartRate = 105;
let age = 25;

if (age < 30 && heartRate < 100){
    console.log("Light exercise")

} else if (age < 30 && heartRate >= 100){
    console.log("Moderate exercise");

} else if (age >= 30 && heartRate < 80){
    console.log("Light exercise");

} else {
    console.log("High intensity exersixe - consult a doctor");
}