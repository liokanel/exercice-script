"use strict";
let nombreAvengers=23;
console.log (typeof(nombreAvengers));
let nomDeFamilleEmpereur="Jules";
console.log;(typeof(nomDeFamilleEmpereur));
let nombreEtoiles=99;
console.log(typeof(nombreEtoiles));
let nombreClonesNaruto=1000;
console.log(typeof(nombreClonesNaruto));

let defaut="perfecitonniste";
console.log(typeof(defaut));



let nbr1=5;
let nbr2=8;
let nbr3="5";



if(nbr1=nbr3){//double egal égalité silple(valeur)
alert("Egalité Bis");   
}

if(nbr1=nbr3){//triple egal egalité stricte(valeur + type)
alert("Egalité");   
}else{
    alert("je suis différent");
}

if(nbr1 == 8){
    alert("je suis le 8");
}else if(nbr1==4){
    alert("je suis le chiffre 4");
    } else{
        alert("je suis un autres chiffre");
    }

    //et &&
    if(nbr1==5 || nbr2==8){
        alert("je suis trop fort");
    }else{
        alert('NOOB');
    
    }

    // OU ||

    // SWITCH

    switch(nbr1){
     case 1: 
        alert("je suis le chiffre 1");
        break;
     case 2: 
        alert("je suis le chiffre 2");
        break;
     case 3: 
        alert("je suis le chiffre 3");
        break;
     case 4: 
        alert("je suis le chiffre 4");
        break;
     case 5: 
        alert("je suis le chiffre 5");
        break;
  default:
    alert('je suis le chiffre');
    }

    var tomate

    switch(tomate){
        case 1: 
           alert("je suis une tomate");
           break;
        case 2: 
           alert("je suis un poireaux");
           break;
        case 3: 
           alert("je suis une betterave");
           break;
        case 4: 
           alert("je suis un haricot");
           break;
        case 5: 
           alert("je suis une patate");
           break;
     default:
       alert('je suis aucun de ces fruits');
       }
   