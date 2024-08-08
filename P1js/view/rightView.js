import state from "../state/state.js";

function render() {
	const div = document.querySelector('#p1div');
	div.innerHTML = '';
    const lol = document.getElementById('p1leftbody') || document.getElementById('p1backbody') || document.getElementById("p1frontbody");
    lol.id = 'p1rightbody';

	const item = document.createElement('div');

	item.innerHTML = `<div>

	
        <img id="prizeChest_img" src="/resources/chestClosed4.png"> 

        <a href="#/player1backside">
       		<img id="arrow_right" src="/resources/arrowright.png" alt="Arrow Right"/>
    	</a>

		<a href="#/player1">
       		<img id="arrow_left" src="/resources/arrowleft.png" alt="Arrow Left"/>
    	</a>					
	</div>`
	
	div.appendChild(item);

	console.log('entrou no render');
	const button = $('#prizeChest_img');
    
	console.log('um botao', button);

	button.on('click', function(){
		console.log(state.state.chestOpener);
		if (state.state.chestOpener == true) {
			button.attr("src", "/resources/oldbooks.png");
			button.on('click', function(){
				window.location.hash = "/books";

			}
				)

		}
	});
}

export default { render };