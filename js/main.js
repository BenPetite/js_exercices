// // 1 hello world
// var bonjour = "hello world !";
//   console.log (bonjour);

// // 2 calculs
// console.log (3*3);
// console.log (12/0);
// console.log (4+9+78);
// console.log (12-7);
// console.log (5e4);

// // 3 communiquer
// var nom = prompt ("quel est votre nom ?");
//   alert ("bienvenue, " + nom + " !");

// // 4 nom et prénom
// var nom = prompt ("quel est votre nom ?");
// var prenom = prompt ("et votre prénom ?");
//   console.log ("salut, " + prenom + " " + nom + ".");

// // 5 caractères/nombre
// var nombre = Number("123");
//   console.log (nombre);

// // 6 majuscules/minuscules
// var textMin = "un texte à afficher en majuscules";
// var textMaj = "UN TEXTE A AFFICHER EN MINUSCULES";
//   console.log ( textMin.toUpperCase() + "\n" + textMaj.toLowerCase());

// // 1 true/false
// var a = "";
// var b = "variable b";
//   if (a.length > 0) {
//      console.log(true);
//    }
//    else {
//      console.log(false);
// }
//   if (b.length > 0) {
//      console.log(true);
//    }
//    else {
//      console.log(false);
//   }

// // 2 calcul de l'âge
// var nom = prompt ("quel est votre nom ?");
// var date = prompt ("en quelle année sommes-nous, " + nom + " ?");
// var anniv = prompt ("si je puis me permettre, " + nom + ", quelle est votre année de naissance ?");
// var age = date-anniv;
//   alert ("vous avez donc " + age + " ans, " + nom);
// var voisin = prompt ("quelle est l'année de naissance de votre voisin ?");
// var ageVoisin = date-voisin;
// var cumul = age + ageVoisin;
//   alert ("à vous deux, vous avez " + cumul + " ans");

// // 3 achats
// var chaussures = 70;
// var jean = 59;
// var tShirt = 20;
// var total = chaussures + jean + tShirt;
// var reduc = (total*20)/100;
// var prixFinal = total - reduc;
//   console.log ("prix : " + total + " €");
//   console.log ("réduction : " + reduc + " %");
//   console.log ("total : " + prixFinal + " €");

// // 4 calculatrice
// var a = Number( prompt ("un nombre à additionner"));
// var b = Number( prompt ("un autre nombre"));
// var addition = a+b;
//   alert ("ça fait " + addition);

          // // 5 propriétés
          // var nom = prompt ("quel est votre nom ?");
          // var prenom = prompt ("et votre prénom ?");
          // var letNom = nom.charAt(0);
          // var letpre = prenom.charAt(0);
          // var longNom = nom.length;
          // var longPre = prenom.length;
          // var derNom = longNom.charAt (-1);
          // var derPre = longPre.charAt (-1);
          //   console.log (letNom + derNom + "\n" + letpre + derPre);

// // 1 le nombre le + grand
// var a = 10;
// var b = 68;
// var c = 5;
// var d = 69874;
//   console.log (Math.max (a, b, c, d));

// // 2 condition d'âge (manque le carré)
// var age = prompt ("quel est votre âge ?");
//   if (age < 21)
//     alert ("tu peux te brosser, bonhomme");
//   if (age >= 21)
//     alert ("bienvenue");
//   if (age % 2 === 0)
//     ("(quelle chance d'avoir un âge pair)");

// // 3 nombre caché
// do{
//     var saisie = prompt ("devinez le nombre caché");
//     if (saisie < 32){
//      alert ("le nombre caché est plus élevé");
//     }
//     if (saisie > 32){
//       alert ("le nombre caché est moins élevé");
//     }
//   }
//   while (saisie !=32);
//     alert ("32 est bien le nombre à trouver");

// // 4 nombres en boucle
// var nombre = 1;
//   while (nombre <= 100) {
//   console.log(nombre);
//   nombre++;
// }

// // 5 nombres pairs en boucle
// var nombre = 1;
//  while (nombre <= 100) {
//  nombre++;
//   if (nombre % 2 === 0)
//     console.log (nombre);
// }

// 6 piscine

// 7 cercle

// // 8 pyramide
// var pyramide = "*";
// for (var i = 1 ; i <= 5 ; i++) {
//   pyramide = pyramide + "*";
//   console.log (pyramide);
// }

// // 9 fizzbuzz
// for (var suite = 1; suite <= 100; suite ++) {
//       if (suite % 3 === 0 && 5 === 0) {
//         console.log ("fizzbuzz");
//       }
//       else if (suite % 5 === 0) {
//         console.log ("buzz");
//       }
//       else if (suite % 3 === 0) {
//         console.log ("fizz");
//       }
//       else {
//         console.log (suite);
//       }
//   }

// 1 échiquier
// corrigé :
// var plateau = "";
// for (var i = 1; i <8; i++) {
//   for (var j = 1; j <16; j++) {
//     if ((i+j) % 2 === 0) {
//       plateau = plateau + " ";
//     }
//     else {
//       plateau = plateau + "#";
//     }
//   }
//   plateau = plateau + "\n";
// }
//   console.log (plateau);
// var chess = "";
// for (var i = 1 ; i< 16 ; i ++) {
//   for (var j = 1 ; j<16 ; j ++) {
//     if ((i+j) % 2 === 0) {
//       chess = chess + " ";
//     }
//     else {
//       chess = chess + "#";
//     }
//   }
//   chess = chess + "\n";
// }
// console.log (chess);

          // // 2 matrix
          //
          // for (matrix = 1 ; matrix<=4 ; matrix ++) {
          //   for (suite= 0 ; suite<=4 ; suite++) {
          //     console.log ("0");
          //   }
          //       console.log ("-----");
          // }
          //   console.log (matrix);

// function pair () {
// // variable prompt
// var nombre = Number( prompt ("entrez un nombre"));
// // si pair
//   if (nombre % 2 === 0) {
//     console.log (true);
//   }
// // si impair
//   else {
//     console.log (false);
//   }
// }
// pair ();

// // // 4 factorielle (manque le message d'erreur)
// function factorielle(){
//   var n = Number (prompt ("entrez un entier"));
//     if (Math.round(n)==n){
//       var i=1
//       var saisie=n;
//         while(i<saisie-1){
//           n= n+n*i;
//           i=i+1;
//         }
//           alert(n);
//     }
// }
//
// factorielle();


// // 5 underscores (un seul trait d'union remplacé)
// function underS () {
//   var chaine = prompt ("entrez n'importe quoi, mais avec des traits d'union");
//   console.log (chaine.replace("-", "_"));
// }
// underS ();

// // 6 courses (manque dernier indice)
// var liste = ["carottes", "asperges", "tomates", "poireaux", "saindoux"];
//   console.log ("il faut acheter de toute urgence : " + liste[0]);
//   console.log ("et puis : " + der);
//   console.log ("enfin : " + liste[2]);

// 7 tableaux
// var userNames = ["joe", "jack", "william", "averell", "ma", "rantanplan"];
// console.log ("qui utilise ce site :");
// for (var i = 0; i < userNames.length; i++) {
//   console.log (userNames [i]);
// }
// function showUsers (users) {
//   console.log ("les utilisatueurs :");
//   for (var i = 0; i < users.length; i++) {
//     for (var j = 0; j < users[i].length; j++) {
//       if (user [3] === true) {
//       showSex(user);
// }
// function showSex (sexe) {
//   if (sexe === true) {
//     console.log ("femme");
//   }
//   else {
//     console.log ("homme");
//   }
// }
// // tableaux des utilisateurs
// var myUsers = [
//  // tab utilisateur 0
//  [
//      "Dalton", //nom
//      "Joe",    //prénom
//      45,       //âge
//      false     //sexe
//    ],
//  // tab utilisateur 1
//    [
//      "Dalton", //nom
//      "Jack",    //prénom
//      45,       //âge
//      false     //sexe
//    ],
//  // tab utilisateur 2
//    [
//      "Dalton", //nom
//      "William",    //prénom
//      43,       //âge
//      false     //sexe
//    ],
//  // tab utilisateur 3
//    [
//      "Dalton", //nom
//      "Averell",    //prénom
//      41,       //âge
//      false     //sexe
//    ],
//  // tab utilisateur 4
//    [
//      "Dalton", //nom
//      "Ma",    //prénom
//      75,       //âge
//      true     //sexe
//    ]
//  ]
// //
//
// //
//       }}
//     console.log (users[i] [j]);   }   console.log ("-------");
//
//     showUsers (users);
// //   console.log ("nom : " + users [i] [0]);
// //   console.log ("prénom" + users [i] [1]);
// //
// //   console.log ("-------");
// // }
// //
// // console.log (users [3] [3]); //[élément du tableau des tableaux] [élément du tableau d'utilisateur]
//
          // 8 max tableau
          // function taille () {
          // var tableau = ["plutôt", 9, "sinon", "allons jusque", 87];
          //   for (i=0 ; i<=4 ; i++); {
          //   }
          //   console.log (tableau);
          // }
          // taille ();

// // 9 to do list
// var liste = [];
//    while(item!= "fin"){
//      var item = prompt("CHOSES A FAIRE" + "\n" + "ajouter à la liste :" + "\n" + "(écrivez \"fin\" pour terminer)");
//      if (item != "fin") {
//        liste.push (" " + item + " ");
//      }
//      if (item === "fin") {
//       alert (liste);
//   }
//  }

// 10 pierre feuille ciseaux

//ne fonctionne pas en fonctions -- choixJoueur "pierre"- choixOrdi "ciseaux" n'affiche pas de résultat

// function choix_joueur () {
    var choixJoueur = prompt ("choisissez entre \"pierre\", \"feuille\" ou \"ciseaux\"");
      if (choixJoueur === "pierre" || choixJoueur === "feuille" || choixJoueur === "ciseaux"){
        console.log ("joueur : "  + choixJoueur);
      }
      else {
        alert ("cette réponse n'est pas valable, " + "\n" + "choisissez entre \"pierre\", \"feuille\" ou \"ciseaux\"");
      }
// }

// function choix_ordi () {
    var liste = ["pierre" , "feuille", "ciseaux"];
    var choixOrdi = liste[Math.floor(Math.random()*3)];
      console.log ("ordi : " + choixOrdi);
   // }

// function jeu (){
    if ((choixJoueur === "pierre" && choixOrdi === "pierre") || (choixJoueur === "feuille" && choixOrdi === "feuille") || (choixJoueur === "ciseaux" && choixOrdi === "ciseaux")) {
      console.log ("égalité");
      }
    if ((choixJoueur === "pierre" && choixOrdi === "feuille") || (choixJoueur === "pierre " && choixOrdi === "ciseaux") || (choixJoueur === "ciseaux" && choixOrdi === "feuille")) {
      console.log ("gagné");
      }
    if ((choixJoueur === "feuille" && choixOrdi === "pierre") || (choixJoueur === "feuille" && choixOrdi === "ciseaux") || (choixJoueur  === "ciseaux" && choixOrdi === "pierre")) {
      console.log ("perdu");
      }
// }
//
// choix_joueur ();
// choix_ordi ();
// jeu ();
