function render() {

	const div = document.querySelector('#p2div');
	div.innerHTML = '';
    const lol = document.getElementById('p2leftbody') || document.getElementById('p2rightbody') || document.getElementById("p2backbody") || document.getElementById("p2frontbody");
    lol.id = 'p2frontbody';
	const item = document.createElement('div');
	item.innerHTML = `<div>
		<img id="lever_img" src="/resources/lever.png"/>

    	<img id="img_door" src="/resources/door_closed.jpg"/>

		<a href="#/player2rightside">
       		<img id="arrow_right" src="/resources/arrowright.png" alt="Arrow Right"/>
    	</a>

		<a href="#/player2leftside">
       		<img id="arrow_left" src="/resources/arrowleft.png" alt="Arrow Left"/>
    	</a>
						
	</div>`

	div.appendChild(item);

	console.log('entrou no render');
	const button = $('#lever_img');
	console.log('um botao', button);
	const door = $('#img_door');
	console.log('door', door);
	button.on('click', function(){
		console.log("hola");
		console.log(door.attr('src'));
		door.attr('src', '/resources/door_open.jpg');
		button.attr('src','/resources/lever_upsidedown.png');
		console.log(door.attr('src'));
	});
}

export default { render };