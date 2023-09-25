// // let a ="Abalo"
// // print("ANOUKOUFO" + a)
// let age = prompt("Quel est le premier nombre ?")
// age = Number(age);
// const age = prompt("Entrer votre âge: ")
// // const pers = prompt("Entrer votre nom: ")
// // if (pers != '0'){
// //     alert("Bonjour "+pers+". Vous avez "+age+"an(s). L'année prochaine vous aurez "+(int(age)+1)+" ans." )
// // }
// // let fAnonyme = function() {
// //     console.log("Je suis une fonction anonyme");
// // }
// // fAnonyme();
// let nom 
// do{
//     nom = prompt("Quel est votre nom?: ")
//     if(nom == ""){
//         alert("Saisie invalide.")
//     }
//     else
//         alert("Votre nom est: " + nom)
// }
// while (nom == "")
// let monTableau2D = [
//     ['Mark', 'Jeff', 'Bill'],
//     ['Zuckerberg', 'Bezos', 'Gates']
// ];
// monTableau2D.splice(0,1);
// console.log(monTableau2D);
// let listeDePays = ['France', 'Belgique', 'Japon', 'Maroc'];
// listeDePays.forEach(function(pays){
//      console.log(pays);
// });
// function concatener(tableau) {
//     let chaine = " ";
//     for (const valeur in tableau) {
//         chaine += (valeur + ' : ' + tableau[valeur] + '\n');
//     }
//     console.log(chaine);
// }
// concatener(monTableauAssociatif);
// let h1 = document.querySelector('h1')
// h1.textContent = "Hello world!!"

// if(confirm("Souhaitez-vous vraiment accéder à la page?")){
//     alert("D'accord");
// }else{
//     alert('Annulation');
// }
// let nom = prompt("Entrer votre nom svp: ")
// let prenom = prompt("Maintenant votre prenom svp: ")
// let age = prompt("Votre âge pour terminer: ")
// alert("Vous vous appelez " + nom + " " + prenom + " et vous avez " +age+"an(s).")
// while (true){
// let choix = prompt("Voulez-vous configurer un mot de passe?('O' pour oui et 'N' pour non): ")
// if (choix == 'O'){
//     let passw = prompt("Entrer votre mot de passe là: ")
//     alert("Votre mot de passe vous sera demandé à la prochaine connexion.")
//     break
// }
// else if (choix == 'N'){
//     alert("C'est compris!\nD'accord")
//     confirm("Confirmer pour continuer.")
//     break
// }
// else{
//     alert("Vous n'avez pas respecté les conditions. Réessayer dans un moment")
// }}
// let listeDePays = ['France', 'Belgique', 'Japon', 'Maroc'];
// listeDePays.forEach(p => console.log(p));
//Ecrire le code d'un fichier HTML permettant de calsuler et d'afficher le carré d'un nombre saisi et affiché. La saisie sera dans un champ de formulaire. Le boutton afficher se fait dans une boite alerte qui affiche:"le carré de x est: ".
//Ecrire le code d'un dossier HTML intitulé Calcul contenant une zone de saisie qui permet d'entrer une opération de calcul, un bouton égal et une zone de réponse.
//Ecrire un script demandant à l'utilisateur d'entrer son nom âge et de contrôler la validité de l'âge saisi. Si l'âge est erronné, afficher un message d'erreur et redemander la saisie de l'âge.

let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");
let res = document.querySelector("#res");

let msg1 = document.querySelector("#rep1");
let msg2 = document.querySelector("#rep2");

let plus = document.querySelector("#plus");
let moins = document.querySelector("#moins");
let multiplié_par = document.querySelector("#multiplié_par");
let divisé_par = document.querySelector("#divisé_par");

res.disabled = true

n1.addEventListener('keyup', () => {
    if (confirm(isNaN(n1.value))){
        msg1.textContent = "Erreur!!!!! Faites plus attention"
        msg1.style.color ="red"
        msg1.style.fontsize = "x_small"
        msg1.style.display= "inline"
        n2.disabled = true
        plus.disabled = true
        moins.disabled = true
        multiplié_par.disabled = true
        divisé_par.disabled = true
    }
    else {
        n2.enabled = true
        plus.enabled = true
        moins.enabled = true
        multiplié_par.enabled = true
        divisé_par.enabled = true
    }

}
)