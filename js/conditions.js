'use strict';

var wzrostMateusza = 170;
var wzrostOli = 170;

if (wzrostOli < wzrostMateusza) {

    console.log("Ola jest niższa")
}


if (wzrostOli > wzrostMateusza) {

    console.log("Ola jest wyższa");
} else {
    console.log("Ola jest niższa");
}

if (wzrostOli > wzrostMateusza) {

    console.log("Ola jest wyższa");
    
} else if (wzrostOli == wzrostMateusza){
    
    console.log("Ola tak wysoka jak Mateusz");
    
} else { 
    console.log("Ola jest niższa");
}


var kolor = "zielony";
switch (kolor) {
    case "czerwony":
        console.log("kolor czerwony");
        break;
    case "zielony":
        console.log("kolor zielony");
        break;
      case"niebieski":
        console.log("kolor niebieski");
        break;
    default:
        console.log("inny kolor");
             }