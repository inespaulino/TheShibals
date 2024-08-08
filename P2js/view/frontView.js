function render() {

	const background = document.querySelector('#p2div');

	const body = document.querySelector('#p2leftbody') || document.querySelector('#p2rightbody') || document.querySelector('#p2frontbody');
	console.log(body);
	body.innerHTML = '';
	const lol = $('#p2leftbody') || $('#p2rightbody') || $('#p2frontbody');
    lol.attr('id','p2frontbody');
	const item = document.createElement('div');
	item.innerHTML = `<div>
		<img id="lever_img" src="/resources/lever.png"/>

    	<img id="img_door" src="/resources/door_closed.jpg"/>

		<img id="arrow_left" src="/resources/arrowleft.png"> 
        <img id="arrow_right" src="/resources/arrowright.png">
						
	</div>`

	background.appendChild(item);
	body.appendChild(background);

	console.log('entrou no render');
	const button = $('#lever_img');
	console.log('um botao', button);
	const door = $('#img_door');
	console.log('door', door);
	const button2 = $('#arrow_left');
    const button3 = $('arrow_right');

	button.on('click', function(){
		console.log("hola");
		console.log(door.attr('src'));
		door.attr('src', '/resources/door_open.jpg');
		button.attr('src','/resources/lever_upsidedown.png');
		console.log(door.attr('src'));
	});

	button2.on('click', function(){
		console.log("hola");
		
		console.log(button2.attr('src'));
		
	});
    button3.on('click', function(){
		console.log("hola");
		
		console.log(button3.attr('src'));
		
	});
}

export default { render };