'use strict';

var wyplata = 5000;
var premia = 2500;
var calkowitaWyplata;

calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);

var wyplataStr = "5000";
var premiaStr = "2500";
var calkowitaWyplataStr;

calkowitaWyplataStr = wyplataStr + premiaStr;
console.log(calkowitaWyplataStr);

calkowitaWyplataStr = wyplataStr + "\n" + premiaStr;
console.log(calkowitaWyplataStr);

calkowitaWyplataStr = wyplataStr + " \"dodajemy\" " + premiaStr;
calkowitaWyplataStr = wyplataStr + ' "dodajemy" ' + premiaStr;

var imieStudenta = "  Michał "
console.log(imieStudenta.indexOf('c'));
console.log(imieStudenta);
console.log(imieStudenta.trim());
console.log = imieStudenta.trim(); 


var czyJestSmog;
czyJestSmog = true;

if (czyJestSmog) {
console.log("Jest Smog");
} else {
console.log("nie ma Smoga");
}


