"use strict"

//Je crée le personnage de Jason, et je met ces points de vie à 100
const Jason = new personnage("Jason");
let pointsdevie = 100;

//Je crée mes personnages bien cliché avec leurs différentes caractéristiques et les probabilités de mourir, de mettre des dégâts et de mourir en mettant des dégâts
let Policier = new Personnage("Policier", 0.5, 0.7, 0.3);
let Chasseur = new Personnage("Chasseur", 0.9, 0.8, 0.1);
let Pirate = new Personnage("Pirate", 0.1, 0.9, 0.8);

// Je crée le tableau des prénoms des survivants
const prenomsSurvivantes = ["Jade", "Lalie", "Louis", "Lucas", "Salomé"];

//je leurs met les points de vie à 100 et leurs donne une caractéristique (je n'ai pas réussi à entrer les autres nom avec un caractéristique je ne sait pas pourquoi)
let Jade = pointsdevie = 100;
 let jade = Policier;

 let lalie = pointsdevie = 100;
 let Lalie = Chasseur
 
 let Louis = pointsdevie = 100;
 let louis = Pirate;

//j'aurais aimer savoir comment associer les survivant a un nom commun pour que chaqun ce prennent les dégats à leurs tour mais j'ai quand même mis les effet dans les cases que j'ai pris dans les exemples
//jason tue le survivant il meurt.
    if (Math.random() < 0.7) {
        prenomsSurvivantes -= 100;
        console.log(`Tour ${tour}: jason inflige 100 points de dégâts au survivante et il meurt.`);
      } else {
        //le survivant esquive et jason prend 10 points de degâts.
        Jason -= 10 ;
        console.log(`Tour ${tour}: jason rate son attaque car le survivante esquive et inflige 10 points de dégâts.`);
      }
    
      // jason attaque le surviviant avec une certaine chance de toucher.
      if (Math.random() < 0.5) {
       //j'ai fait en sorte que si jason ce prend les 15 de dégâts le survivant meurt 
        if (Jason) -= 15, prenomsSurvivantes =-100
        console.log(`Si jason prend 15 points de dégats le survivant meurt`);
      }

       //Afficher les points de vie restants.
  console.log(`Points de vie ds survivants : ${prenomsSurvivantesPointsDeVie}`);
  console.log(`Points de vie de Jason : ${JasonPointsDeVie}`);

//je reègle les messages de victoires et défaites si les point de vie de l'un des camp tombe à 0
if (prenomsSurvivantesPointsDeVie <= 0) {
  console.log("Les survivants ont été vaincu par Jason. Jason gagne !");
} else if (dragonPointsDeVie <= 0) {
  console.log("Jason a été vaincu par les survivants ! Les survivants gagne !");
} else 

// Boucle de combat jusqu'à ce que jason ou les survivants soit vaincu
let tour = 1;
while (prenomsSurvivantes.pointsDeVie > 0 && Jason.pointsDeVie > 0) {
  console.log(`Tour ${tour}:`);

 // Affiche les points de vie restants des personnages à la fin de chaque tour
 console.log(`${prenomsSurvivantes.nom} : ${prenomsSurvivantes.pointsDeVie} points de vie`);
 console.log(`${Jason.nom} : ${Jason.pointsDeVie} points de vie`);
 tour++;
