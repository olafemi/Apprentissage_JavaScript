//Mini jeu pour s'entrainer a JavaScript

//Variable minimale

function verifyNom(){
    var vtr_nom = prompt('Veuillez insérez votre nom s\'il vous plaît : ');
    if (vtr_nom === '') {
        verifyNom == false;
    }
    else {
        verifyNom == true;
    }
}

if (verifyNom == true) {
    console.log('succes');
}
else {
    console.log('echec');
	alert('veuillez remplir le champ merci !');
	verifyNom();
}




function verifyNom(){
    var vtr_nom = prompt('Veuillez insérez votre nom s\'il vous plaît : ');
    
    console.log('Etape 1 normalement');
    console.log(vtr_nom);
    console.log(typeof vtr_nom);

alert('etape 1 est ce cela j\'ai le site doit remettre ou non le nom d\'user');

    if (vtr_nom === '') {
        verifyNom == false;

        console.log('Etape 2 normalement')
        console.log(verifyNom)
        console.log(typeof verifyNom)

alert('Etape 2 est cela ? qu\'est ce que x renvoie faux si vide')

    }

    else {
        verifyNom == true;

        console.log('Etape 3 normalement')
        console.log(verifyNom)
        console.log(typeof verifyNom)

alert('Etape 3 est cela ? qu\'est ce que x renvoi true si il y a un nom')
    }
}

alert('numéro zéro je me met a te servir la fonction, si tu vois une autre alerte que l\'alerte un mon frère cherche autre moyen');
console.log('1er truc a apparaitre');
verifyNom();

console.log('doit arriver ici avant de commencer par lire les script normalement');
alert('si je reçois cette alerte en premier c\'est que il a lu apres verifyNom bon normalement en deuxième si apres deuxième notifier');

if (verifyNom == true) {
    console.log('succes');
}
else {
    console.log('echec');
	alert('veuillez remplir le champ merci !');
	verifyNom();
}
