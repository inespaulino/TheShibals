import state from "/P1js/state/state.js";

function render() {
	
	const div = document.querySelector('#p1div');
	div.innerHTML = '';
    const lol = document.getElementById('p1leftbody') || document.getElementById('p1rightbody') || document.getElementById("p1backbody") || document.getElementById("p1frontbody");
    lol.id = 'p1frontbody';

	const item = document.createElement('div');
	item.innerHTML = `<div>
		<img id="lever_img" src="/resources/${getLever(state.lever)}"/>

    	<img id="door_img" src="/resources/${getDoor(state.door)}"/>

		<a href="#/player1rightside">
       		<img id="arrow_right" src="/resources/arrowright.png" alt="Arrow Right"/>
    	</a>

		<a href="#/player1leftside">
       		<img id="arrow_left" src="/resources/arrowleft.png" alt="Arrow Left"/>
    	</a>			
	</div>`
	
	div.appendChild(item);

	console.log('entrou no render');
	const button = $('#lever_img');
	console.log('um botao', button);
	const door = $('#door_img');
	console.log('door', door);

	button.on('click', function(event){
		state.state.lever = true;
		state.state.door = true;
		button.attr('src','/resources/lever_upsidedown.png');
		door.attr('src', '/resources/door_open.jpg');
		
	});
	
}

function getLever(lever){
	if (lever)
		return "lever_upsidedown.png";
	return "lever.png"
}

function getDoor(door){
	if (door)
		return "door_open.jpg";
	return "door_closed.jpg";
}

export default { render };