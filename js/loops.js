 'use strict';
for (var i=0; i<7; i++) {
   
    console.log(i);
}

for (var i=4; i>=-3; i--) {
   
    console.log(i);
}





var it = 0;
while (it<5) {
    console.log(it);
    it++;
}






var iter = 20;
do {
    console.log(iter);
    iter++;
    //console.log(iter);
} while (iter <10)
 

var a = 0;
while (a < 5) {
    console.log(++a);
    if (a == 3) {
        break;
   }
}


//post i preinkrementacja - najpierw wykonuje instrukcje a później dodaje licznik lub najpierw dodaje a poźniej wykonuje instrukcje

for (var i=1; i<4;) {
 //   console.log(++i);
    i = i +1;
    console.log(i);
}
//najpierw zwiekszy liczbę do dwójki a póżniej wrzuci do konsoli (wyświetli) - pre

console.log('-----');
for (var i=1; i<4;) {
//    console.log(i++);
    console.log(i);
    i = i+1;
}
    //najpierw wrzuci do konsoli(wyświetli) a później zwiększy liczbę - post





for (var b = 0; b<6; ++b) {
   if (b==3) {
        continue;
    } else {
        console.log(b);
    }
    
    console.log("--");
}
