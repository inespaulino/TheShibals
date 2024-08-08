function render() {


	const background = document.querySelector('#p1div');
	
	const body = document.querySelector('#p1leftbody') || document.querySelector('#p1rightbody') || document.querySelector('#p1frontbody');
	console.log(body);
	body.innerHTML = '';
	const lol = $('#p1leftbody') || $('#p1rightbody') || $('#p1frontbody');
    lol.attr('id','p1frontbody');

	const item = document.createElement('div');
	item.innerHTML = `<div>
		<img id="lever_img" src="/resources/lever.png"/>

    	<img id="door_img" src="/resources/door_closed.jpg"/>

		<img id="arrow_left" src="/resources/arrowleft.png"> 
        <img id="arrow_right" src="/resources/arrowright.png">
						
	</div>`
	
	background.appendChild(item);
	body.appendChild(background);

	console.log('entrou no render');
	const button = $('#lever_img');
	console.log('um botao', button);
	const door = $('#door_img');
	console.log('door', door);
	const button2 = $('#arrow_left');
    const button3 = $('arrow_right');
	

	button.on('click', function(event){
		
		console.log(door.attr('src'));
		button.attr('src','/resources/lever_upsidedown.png');
		door.attr('src', '/resources/door_open.jpg');
		
		console.log(button.attr('src'));
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