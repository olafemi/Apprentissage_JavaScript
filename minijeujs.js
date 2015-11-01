/*
 * Ici ce trouve le vrai fichier script
 */

var resultat = [4, 'Azadirachta indica', 8, 'Mangifera indica', 18, 32];

//1ère question
var q1_r1 = prompt('Par combien doit-on diviser 16 pour obtenir 4 : ');

// Code initial Manipuler, retour de réponse et débogage

/* 
 * q1_r1 = prompt('Par combien doit-on diviser 16 pour obtenir 4: '); //Entrez d'une valeur
	console.log(q1_r1); //enregistre la valeur entrer
	console.log(typeof q1_r1);//détermine le type de la valeur entrer

var chfr = ('1','2','3','4','5','6','7','8','9','10'); // J'ai d'abord essayer de définir une variable contenant toute les valeurs répondant au critère que je voulais c'est a dire les chiffres entre 1 et 10

if (q1_r1!=chfr){ // condition stipulant que si la valeur entrer est différent de celles énumérer dans chiffre alors afficher false
	console.log(false);
}
else{
	console.log(true); // condition stipulant que si la valeur entrer appartient a celle entrer dans la variable chfr alors sortir true
}
*/


// 1er code correct avec retour de valeur exact

q1_r1 = prompt('Par combien doit-on diviser 16 pour obtenir 4 : ');
console.log(q1_r1 + ' ' + typeof q1_r1);

if (q1_r1<1||q1_r1>10){
	console.log(false);
	console.log('Votre réponse est incorrect veuillez réessayer');
}
else{
	console.log(true);
	console.log('alors passons a l\'étape suivant');
}
console.log('réponse entrer = ' + q1_r1 );

/*
 * Dans ce code que j'ai jugé correcte je récupère la valeur entrer par l'utilisateur dans q1_r1
 * ensuite je filtre les valeurs
 * si la valeur entrer par l'utilisateurs est strictement inférieur a 1 ou strictement supérieure a 10 alors
 * dans la console je récupère false
 * et j'envoie a l'utilisateur le message
 * Votre réponse est incorrect veuillez rééssayer.
 * si non,
 * c'est a dire que notre réponse est compris entre 1 et 10, [1,10]
 * alors le reste du script peux s'exécuter.
 */


// Code final du Quizz N°1

var resultat = [4, 'Azadirachta indica', 8, 'Mangifera indica', 18, 32];

var vtr_nom = prompt('Veuillez insérez votre nom s\'il vous plaît : ');

q1_r1 = prompt('Par combien doit-on diviser 16 pour obtenir 4 : ');

if (q1_r1<1||q1_r1>10){
    alert('Désolé ' + vtr_nom + ' Votre réponse est incorrect veillez réessayer');
}

else if (q1_r1>=1&&q1_r1<=10){

    var r_provisoire = parseInt(q1_r1);

    if(r_provisoire===resultat[0]){
		alert('Bravo ' + vtr_nom + ' vous avez trouvé la bonne réponse.');}
		else{
			alert('Désolé ' + vtr_nom + 'Votre réponse est incorrect veillez réessayer');
		};
}

// Début du Quizz N°2

if (confirm('Voulez vous continuer a jouer au Quizz? ' + vtr_nom  )) {
	var q2 = prompt(vtr_nom + ' Quel est le nom scientifique du \'neem\' Communément appelez \'KININI\' en langue fon ?');
	if (q2 === resultat[1]) {
		alert(vtr_nom + ' Tu est un vrai génie, deux réponse consécutive a ton actif');
	} else {
		alert(vtr_nom + ' Désolé que la partie s\'achève pour toi juste apres la deuxième question, rééssaie encore');
		}
	}
