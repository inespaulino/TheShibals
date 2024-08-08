import state from "/P1js/state/state.js"

function render() {

	const div = document.querySelector('#p1div');
	div.innerHTML = '';
    const lol = document.getElementById('p1frontbody') || document.getElementById('p1rightbody') || document.getElementById("p1backbody");
    lol.id = 'p1leftbody';

	const item = document.createElement('div');
	item.innerHTML = `<div>

			<img id="alchemy_img" src="/resources/Alchemy_table.png" alt="Alchemy Table"/>

        
        <a href="#/player1">
       		<img id="arrow_right" src="/resources/arrowright.png" alt="Arrow Right"/>
    	</a>

		<a href="#/player1backside">
       		<img id="arrow_left" src="/resources/arrowleft.png" alt="Arrow Left"/>
    	</a>
	</div>`
	
	
	div.appendChild(item);

	console.log('entrou no render');
	const button = $('#alchemy_img');
	console.log('um botao', button);

	button.on('click', function(){
		console.log("hola");
		
		window.location.hash = "/alchemy_table";
		
	});

}

export default { render };