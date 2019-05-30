animaux = []

function addAnimal(name,country){
	dicoAnimaux = {
		'animal_name' : name, 
		'animal_country': country,
	}
	animaux.push(dicoAnimaux)
	console.log(animaux)
}

function renderAnimaux(){
	for (var i = 0 ; i < animaux.length ; i++){
		console.log(animaux)
		var animalHtml =  `<li>`+ animaux[i].animal_name  + `</li>`
		$( ".animaux" ).append( animalHtml );
		console.log(animalHtml)
	}
}

$(".ajout_animal").on('click',function (e,name,country){
	$("li").remove();
	e.preventDefault();
	var name = $('.name_input').val() ;
	var country = $('.country_input').val() ;
	addAnimal(name,country) ; 
	renderAnimaux();
})






// 1) Créez une fonction renderAnimaux qui ne prend aucun paramètre. Cette fonction doit
// ajouter chaque animal de la liste, à la balise <ul> du fichier HTML.
// 2) Appelez la fonction renderAnimaux dans l’évènement Jquery crée précédemment.
// 3) Testez ces fonctions. Vous remarquez que dès lors que vous ajoutez un nouvel animal, le
// précédent est dupliqué. Pourquoi ?
// Réfléchissez à une solution pour régler ce problème
