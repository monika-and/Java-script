'use strict';


function multiply(parametr1, parametr2, parametr3) {
    var result;
    result = parametr1 * parametr2 * parametr3;
    
    return result;
}

var wynik = multiply (3, 9, 10);

console.log("wynik: " + wynik);



wynik = multiply (35, 2, 10);

console.log("wynik: " + wynik);




//funkcja anonimowa
var funkcja = function () {
    return "wynik :)";
}

console.log( funkcja ); //powinno wywołać ciało funkcji - traktuje fukcję jako string, pokazuje jej opis
console.log( funkcja() ); //wywołaj funkcję bez parametru, wykonuje działanie funkcji

