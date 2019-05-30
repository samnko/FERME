animaux = []

function addAnimal(name,country){
	dicoAnimaux = {
		'animal_name' : name, 
		'animal_country': country,
	}
	animaux.push(dicoAnimaux)
	console.log(animaux)
}

$(".ajout_animal").on('click',function (e){
	e.preventDefault();
	var name = $('.name_input').val() ;
	var country = $('.country_input').val() ;
	addAnimal(name,country) ; 
})

