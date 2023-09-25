"use strict"

  //Je crée un personnage qui s'apelle Lioka avec une constante
  const lioka = new personnage("Lioka", 10);
 
   //Je crée un trajet avec une constante
   const trajetLioka = new Trajet();
  
   //Je crée une Sante Mental que je règle à 10 avec une constante
   const santeMentale = 10
 
   //Je fait en sorte que Lioka soit le prénom avec ma constante pour que ce soit associer plus bas 
const Lioka = prenom 

//J'attribue les fonction du prenom et santé mentale avec this pour que ils soient reconnus 
  function personnage(prenom, santeMentale) {
    this.prenom = prenom;
    this.santeMentale = santeMentale;
  }
  //Je crée et défini la liste des différentes musiques sur lesquelles on peut tomber aléatoirement 
  const musiques = ["Anissa de Wejdenne", "Musique2", "Musique3", "Musique4", "musique5"];
  
  //Je défini un trajet avec une constante et j'associe la radio avec musiques + je défini les deux rougges à 30 
  const trajet = {
    radio: musiques,
    feuxRougesRestants: 30,
    nbChangementsTaxi: 0,
  
    // j'applique ma fonction de changer la musique aléatoirement avec ma ensuite je défini la radio avec un this et avec math.random je crée une variante aléatoire puis je fait mon console.log
    function : changerMusique() 
      ,const : musiqueAleatoire = this.radio[Math.floor(Math.random() * this.radio.length)]}
      console.log(`Musique jouée : {musiqueAleatoire}, Feux rouges restants : {this.feuxRougesRestants}`);
      return musiqueAleatoire;
    
  //au dessus j'ai return pour relancer la musique aléatoire 
  //en dessous j'ai mis functionpour les effets du trajet sur le personnage
//je crée la contion d'effectuer le trajet par mon personnage et a chaque fois j'affiche le nombre de feu rouge restant avec this.feurougesrestants
    function effectuerTrajet(personnage) {
      while (this.feuxRougesRestants > 0 && personnage.santeMentale > 0) {
        const musique = this.changerMusique();
        //je met que si la musique est anissa de wejdenne le personnage a sa santementale qui descend grace à -- et il doit changer de taxi et la valeur de changement de taxi augmente de 1
        if (musique === "Anissa de Wejdenne") {
          personnage.santeMentale--;
          this.nbChangementsTaxi++;
        }
       //J'affiche le résultat du trajet en fonction des conditions
        this.feuxRougesRestants--;
      }
  //je code que si le nombre de feux rouges restants est égal à 0 le personnage (lioka) est bien arrivé et le nombre de changements de taxi s'affiche 
      if (this.feuxRougesRestants === 0) {
        console.log(`{personnage.prenom} est bien arrivé ! Il a fallu ${this.nbChangementsTaxi} changements de taxi.`);
      } else {//mais sinon il explose si il échoue
        console.log("<explosion>");
      }
    }
  ;
  
  // je code pour lancer le trajet et que il effectue le trajet lioka avec trajet.effectuerTrajet
  trajet.effectuerTrajet(Lioka);