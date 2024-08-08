
import boardState from "/P2js/state/boardState.js";
import state from "../state/state.js";

function render() {

	const div = document.querySelector('#p2div');
	div.innerHTML = '';
	const lol = document.getElementById('p2leftbody') || document.getElementById('p2rightbody') || document.getElementById("p2frontbody") || document.getElementById("p2boardbody");
	lol.id = 'p2boardbody';

	const item = document.createElement('div');

	item.innerHTML = `<div id="fotos">
        
	<img id="bernardo" src="/resources/bernardo.png" alt="Bernardo Foto"/>
 	
    <img id="arada" src="/resources/arada.png" alt="Arada Foto"/>
    
	<img id="ines" src="/resources/ines.png" alt="Ines Foto"/>

	<img id="guilherme" src="/resources/guilherme.png" alt="Myg Foto"/>
	
	<img id="marcelo" src="/resources/marcelo.png" alt="Marcelo Foto"/>
	
	<img id="deli" src="/resources/deli.png" alt="Deli Foto"/>
	
	<img id="pascoa" src="/resources/pascoa.png" alt="Pascoa Foto"/>

	<img id="susana" src="/resources/susana.png" alt="Susana Foto"/>

	<a href="#/player2leftside">
       		<img id="arrow_right" src="/resources/arrowright.png" alt="Arrow Right"/>
    	</a>
 				
	</div>`;

	div.appendChild(item);

	const button = $('#bernardo');
	const button2 = $('#arada');
	const button3 = $('#ines');
    const button4 = $('#guilherme');
    const button5 = $('#marcelo');
    const button6 = $('#deli');
    const button7 = $('#pascoa');
	const button8 = $('#susana');

	console.log('entrou no render');

	function checkName(name, right) {
		for (let i = 0; i < right.length; i++) {
			console.log("names", name, right);
			if (name[i] != right[i])
				return false;
		}
		return true;
	} 
	button.on('click', function () {

		console.log("bernardo")
		boardState.boardState.names.push("bernardo");
		console.log("state names",boardState.boardState.names);

		if (checkName(boardState.boardState.names, boardState.boardState.namesRight)) {
			state.wardrobe = true;
			window.location.hash = '/player2leftside';

		}
		if (boardState.boardState.names.length == 8 && state.boardState.names != boardState.namesRight) {
			state.setNames([]);
			render();
		}
	});
	button2.on('click', function () {

		console.log("arada")
		boardState.boardState.names.push("arada");
		console.log("state names",boardState.boardState.names);

		if (checkName(boardState.boardState.names, boardState.boardState.namesRight)) {
			state.wardrobe = true;
			window.location.hash = '/player2leftside';

		}
		if (boardState.boardState.names.length == 8 && boardState.boardState.names != boardState.namesRight) {
			boardState.setNames([]);
			render();
		}
	});
	button3.on('click', function () {

		console.log("ines")
		boardState.boardState.names.push("ines");
		console.log("state names",boardState.boardState.names);

		if (checkName(boardState.boardState.names, boardState.boardState.namesRight)) {
			state.wardrobe = true;
			window.location.hash = '/player2leftside';

		}
		if (boardState.boardState.names.length == 8 && boardState.boardState.names != boardState.namesRight) {
			boardState.setNames([]);
			render();
		}
	});
	button4.on('click', function () {

		console.log("guilherme")
		boardState.boardState.names.push("guilherme");
		console.log("state names",boardState.boardState.names);

		if (checkName(boardState.boardState.names, boardState.boardState.namesRight)) {
			state.wardrobe = true;
			window.location.hash = '/player2leftside';

		}
		if (boardState.boardState.names.length == 8 && boardState.boardState.names != boardState.namesRight) {
			boardState.setNames([]);
			render();
		}
	});
	button5.on('click', function () {

		console.log("marcelo")
		boardState.boardState.names.push("marcelo");
		console.log("state names",boardState.boardState.names);

		if (checkName(boardState.boardState.names, boardState.boardState.namesRight)) {
			state.wardrobe = true;
			window.location.hash = '/player2leftside';

		}
		if (boardState.boardState.names.length == 8 && boardState.boardState.names != boardState.namesRight) {
			boardState.setNames([]);
			render();
		}
	});
	button6.on('click', function () {

		console.log("deli")
		boardState.boardState.names.push("deli");
		console.log("state names",boardState.boardState.names);

		if (checkName(boardState.boardState.names, boardState.boardState.namesRight)) {
			state.wardrobe = true;
			window.location.hash = '/player2leftside';

		}
		if (boardState.boardState.names.length == 8 && boardState.boardState.names != boardState.namesRight) {
			boardState.setNames([]);
			render();
		}
	});
	button7.on('click', function () {

		console.log("pascoa")
		boardState.boardState.names.push("pascoa");
		console.log("state names",boardState.boardState.names);

		if (checkName(boardState.boardState.names, boardState.boardState.namesRight)) {
			state.wardrobe = true;
			window.location.hash = '/player2leftside';

		}
		if (boardState.boardState.names.length == 8 && boardState.boardState.names != boardState.namesRight) {
			boardState.setNames([]);
			render();
		}
	});
	button8.on('click', function () {

		console.log("susana")
		boardState.boardState.names.push("susana");
		console.log("state names",boardState.boardState.names);

		if (checkName(boardState.boardState.names, boardState.boardState.namesRight)) {
			state.wardrobe = true;
			window.location.hash = '/player2leftside';

		}
		if (boardState.boardState.names.length == 8 && boardState.boardState.names != boardState.namesRight) {
			boardState.setNames([]);
			render();
		}
	});

}
function checkName(name, right) {
	console.log(right.length);
	for (let i = 0; i < right.length; i++) {
		console.log("potions", name, right);
		if (name[i] != right[length])
			return false;
		true;
	}
}

export default { render };