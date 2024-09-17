
import state from "../state/state.js";

function render() {

	const div = document.querySelector('#p1div');
	div.innerHTML = '';
	const lol = document.getElementById('p1leftbody') || document.getElementById('p1rightbody') || document.getElementById("p1frontbody") || document.getElementById("p1alchemistbody");
	lol.id = 'p1alchemistbody';

	const item = document.createElement('div');

	item.innerHTML = `<div>
        
	<img id="blue_potion" src="/resources/bluepotion.png" alt="Blue Potion"/>
 	
    <img id="pink_potion" src="/resources/pinkpotion.png" alt="Pink Potion"/>
    
	<img id="yellow_potion" src="/resources/yellowpotion.png" alt="Yellow Potion"/>
 				
	</div>`;

	div.appendChild(item);

	const button = $('#blue_potion');
	const button2 = $('#pink_potion');
	const button3 = $('#yellow_potion');

	console.log('entrou no render');

	function checkPotion(potion, right) {
		for (let i = 0; i < right.length; i++) {
			console.log("potions", potion, right);
			if (potion[i] != right[i])
				return false;
		}
		return true;
	} 
	button.on('click', function () {

		console.log("azul")
		state.state.potions.push("bluepotion");
		console.log("state potions",state.state.potions);

		if (checkPotion(state.state.potions, state.state.potionsRight)) {
			state.state.chestOpener = true;
			window.location.hash = '/player1leftside';

		}
		if (state.state.potions.length == 5 && state.state.potions != state.potionsRight) {
			state.setPotions([]);
			render();
		}
	});
	button2.on('click', function () {

		console.log("rosa")
		state.state.potions.push("pinkpotion");
		console.log("state potions",state.state.potions);


		if (checkPotion(state.state.potions, state.state.potionsRight)) {
			state.state.chestOpener = true;
			window.location.hash = '/player1leftside';

		}
		if (state.state.potions.length == 5 && state.state.potions != state.potionsRight) {
			state.setPotions([])
			render();
		}
	});
	button3.on('click', function () {

		console.log("amarelo")
		state.state.potions.push("yellowpotion");
		console.log("state potions",state.state.potions);

		if (checkPotion(state.state.potions, state.state.potionsRight)) {
			state.state.chestOpener = true;
			window.location.hash = '/player1leftside';
		}
		if (state.state.potions.length == 5 && state.state.potions != state.potionsRight) {
			state.setPotions([]);
			render();
		}
	});

}
function checkPotion(potion, right) {
	console.log(right.length);
	for (let i = 0; i < right.length; i++) {
		console.log("potions", potion, right);
		if (potion[i] != right[length])
			return false;
		true;
	}
}

export default { render };