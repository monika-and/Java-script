
'use strict'
var student = {
    imie: "Kaja",
    wzrost: 182,
    wyswietlDane: function() {
    console.log(this.imie)
}
}

student.wyswietlDane();
console.log(student);
