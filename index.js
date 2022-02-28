const res = document.querySelector('#res');
const score = document.querySelector('#score');
const score_o = document.querySelector('#score_o');
const bouton_rejouer = document.querySelector('#btn_replay')
const bouton_pierre = document.querySelector('#btn_pierre');
const bouton_feuille = document.querySelector('#btn_feuille');
const bouton_ciseaux = document.querySelector('#btn_ciseaux');
const choix = document.querySelector('#choix');
const choix_ord = document.querySelector('#choix_ord');

var coup_ord = 0;
var coup = 0;
var score_p = 0;
var score_po = 0;

score.innerHTML = score_p;
score_o.innerHTML = score_po;

bouton_rejouer.addEventListener('click', () => {
    console.log("bouton_rejouer");
    coup_ord = 0;
    coup = 0;
    score_p = 0;
    score_po = 0;
    score.innerHTML = 0;
    res.innerHTML = "resultat";
    score_o.innerHTML = 0;

    choix.style.backgroundImage = "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fpodcasts.challenges.fr%2Fhome%2Fattachment%2Fbackground-white%2F&psig=AOvVaw1PP2ZvK8eZeBUQ7b-Scael&ust=1646149920338000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNjxkLzgovYCFQAAAAAdAAAAABAD')";
    choix_ord.style.backgroundImage = "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fpodcasts.challenges.fr%2Fhome%2Fattachment%2Fbackground-white%2F&psig=AOvVaw1PP2ZvK8eZeBUQ7b-Scael&ust=1646149920338000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNjxkLzgovYCFQAAAAAdAAAAABAD')";
    
    });



bouton_pierre.addEventListener('click', () => {
    console.log(choix)
    choix.style.backgroundImage = "url('./pierre-magnesite.jpg')" ;
    choix.style.backgroundRepeat = "no-repeat" ;
    choix.style.height ="400px";
    choix.style.width ="600px";
    coup = 0;
    coup_ord = coup_ordi();
    affiche_choix_ordi();
    resultat();
    });



bouton_feuille.addEventListener('click', () => {
    choix.style.backgroundImage = "url('./papier.jpg')" ;
    choix.style.backgroundRepeat = "no-repeat" ;


    coup = 1;
    coup_ord = coup_ordi();
    affiche_choix_ordi();
    resultat();
    });



bouton_ciseaux.addEventListener('click', () => {
    choix.style.backgroundImage = "url('./ciseaux.jpg')" ;
    choix.style.backgroundRepeat = "no-repeat" ;

    coup = 2;
    coup_ord = coup_ordi();
    affiche_choix_ordi();
    resultat();
    });
    


function coup_ordi() {
    coup_ordi_valeur = Math.floor(Math.random() * 3);
    return coup_ordi_valeur;
}


function resultat() {
    console.log(coup_ord)
    if(coup == 0){
        if(coup_ord == 1) {
            res.innerHTML = "perdu";
            score_po = score_po + 1;
            score_o.innerHTML = score_po;
        }
        if(coup_ord == 2) {
            res.innerHTML = "gagné";
            score_p = score_p + 1;
            score.innerHTML = score_p;
        }
    }
    if(coup == 1){
        if(coup_ord == 0) {
            res.innerHTML = "gagné";
            score_p = score_p + 1;
            score.innerHTML = score_p;
        }
        if(coup_ord == 2) {
            res.innerHTML = "perdu";
            score_po = score_po + 1;
            score_o.innerHTML = score_po;
        }
    }
    if(coup == 2){
        if(coup_ord == 0) {
            res.innerHTML = "perdu";
            score_po = score_po + 1;
            score_o.innerHTML = score_po;
        }
        if(coup_ord == 1) {
            res.innerHTML = "gagné";
            score_p = score_p + 1;
            score.innerHTML = score_p;
        }
    }  
    if(coup == coup_ord) {
        res.innerHTML = "égalité";
    }
}

function affiche_choix_ordi() {
    if (coup_ord == 0) {
        choix_ord.style.backgroundImage = "url('./pierre-magnesite.jpg')" ;
        choix_ord.style.backgroundRepeat = "no-repeat" ;
    }
    if (coup_ord == 1) {
        choix_ord.style.backgroundImage = "url('./papier.jpg')" ;
        choix_ord.style.backgroundRepeat = "no-repeat" ;
    }
    if (coup_ord == 2) {
        choix_ord.style.backgroundImage = "url('./ciseaux.jpg')" ;
        choix_ord.style.backgroundRepeat = "no-repeat" ;
    }
}