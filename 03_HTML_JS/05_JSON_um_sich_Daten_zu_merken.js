

let dana = [
    { firstName: "Hans", lastName: "Huber", points: 30 },
    { firstName: "Paul", lastName: "Müller", points: 34 },
    { firstName: "Franz", lastName: "Maier", points: 35 }
];



function loadPeople() {
    let html = "";
    dana.forEach(element => {
        html += "<div>" + element.firstName + " " + element.lastName + "</div>"
    });

        document.getElementById("content").innerHTML = html;



}

loadPeople();