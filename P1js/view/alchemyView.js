
import state from "/P1js/state/state.js";

function render() {
    
	const div = document.querySelector('#p1div');
	div.innerHTML = '';
    const lol = document.getElementById('p1leftbody') || document.getElementById('p1rightbody') || document.getElementById("p1frontbody");
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

    button.on('click', potian("bluepotion"));
    button2.on('click', potian("pinkpotion"));
    button3.on('click', potian("yellowpotion"));

}


function potian(nome){
	
	console.log(nome);
	state.potions.push(nome);

	if(state.potions == state.potionsRight){

		window.document.hash = '/player1leftside';
		
	}
	if(state.potions.length == 5 && state.potions != state.potionsRight){
		render();
	}
}

export default { render };