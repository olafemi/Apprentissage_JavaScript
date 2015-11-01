/*
 * Mon objecti est simple
 * creer un quizz
 * ou l'utilisateur entre des réponse
 * et a l'aide de javascript je vérifie 
 * si la réponse est bonne ou mauvaise
 * 
 * dans un premier temps je ferai des calcul
 * 
 * dans un second temps je répondrai a des question.
 * 
 * on y va
 */

// Quizz 1 Calcul

/*
 * Pour se faire j'utiliserai l'attriput parseInt
 * poour convertir les chaine de caractère n nombre
 * j'utiliserai aussi prompt
 */

var resultat = [4, 'Azadirachta indica', 8, 'Mangifera indica', 18, 32];
console.log(resultat[0] + ' ' + typeof resultat [0]);
console.log(resultat[1] + ' ' + typeof resultat [1]);
console.log(resultat[2] + ' ' + typeof resultat [2]);
console.log(resultat[3] + ' ' + typeof resultat [3]);
console.log(resultat[4] + ' ' + typeof resultat [4]);
console.log(resultat[5] + ' ' + typeof resultat [5]);

// Nom du joueur
var vtr_nom = prompt('Veuillez insérez votre nom s\'il vous plaît : ');


/*Je viens d'organiser les résultats dans un tableau
 * Et mes éléments sont bien définis et bien typé
 */

					// 1ère question

//je déclare la variable réponse pour la première question
var q1_r1;

/*
 * avec console.log je vérifie qu'elle est undefined
 */
console.log(typeof q1_r1);

//je test comment réagit mon code face aux entrer de l'utilisateur

q1_r1 = prompt('Par combien doit-on diviser 16 pour obtenir 4 : ');
console.log(q1_r1);
console.log(typeof q1_r1);

/*
 * Le code réagit normalement
 * je récupère la valeur que l'utilisateur a entrer
 * et je vois quel est de type string
 * //je viens de penser a un truc je vais essayer d'accepter les réponses numérique et en lettre//
 */


	/*
		*si il entre 1 ou 2 ou 3 ou 4 ou 5 ou 6 ou 7 ou 8 ou 8 ou 10
		*faire ceci 
		 *transformez en nombre
		 *si non demandez dire votre réponse est incorrect
		 *si nombre différent de 4 dire votre réponse est incorrect.
		 	*si réponse différent de nombre 
			*et si réponse différent de 1 ou 2 ou 3 ou 4 ou 5 ou 6 ou 7 ou 8 ou 8 ou 10
				*et si réponse différent de quatre alors dire votre réponse est incorrect
	*/
	
var chfr = ('1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'||'10');

if (q1_r1<1||q1_r1>10){
	console.log(false);
	console.log('Votre réponse est incorrect veillez réessayer');
}
else{
	console.log(true);
	console.log('alors passons a l\'étape suivant');
}







q1_r1 = prompt('Par combien doit-on diviser 16 pour obtenir 4 : ');
console.log(q1_r1 + ' ' + typeof q1_r1);

if (q1_r1<1||q1_r1>10){
	console.log(false);
	console.log('Votre réponse est incorrect veillez réessayer');
	alert('Votre réponse est incorrect veillez réessayer');
}
else if (q1_r1>=1||q1_r1<=10){
	// console.log(true);
	// console.log('alors passons a l\'étape suivant');
	// alert('bravo continuons');
	var r_provisoire = parseInt(q1_r1);
	// console.log('réponse entrer = ' + q1_r1 );
	// console.log(r_provisoire + ' est désormais de type ' + typeof r_provisoire);
	if (r_provisoire === resultat[0]) {
		alert('Bravo ' + vtr_nom + ' vous avez trouvé la bonne réponse.');
	} else {
		alert('Désolé ' + vtr_nom + ' votre réponse est incorrect');
	};
	
}


