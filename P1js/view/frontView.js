function render() {
	
	const div = document.querySelector('#p1div');
	div.innerHTML = '';
    const lol = document.getElementById('p1leftbody') || document.getElementById('p1rightbody') || document.getElementById("p1backbody") || document.getElementById("p1frontbody");
    lol.id = 'p1frontbody';

	const item = document.createElement('div');
	item.innerHTML = `<div>
		<img id="lever_img" src="/resources/lever.png"/>

    	<img id="door_img" src="/resources/door_closed.jpg"/>

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
		console.log('Navigating to alchemywall.html');
		console.log("hola");
		
		console.log(button2.attr('src'));
		
	});
    button3.on('click', function(){

		console.log('Navigating to bookwall.html');
		console.log("hola");
		
		console.log(button3.attr('src'));
		
	});

	
}


export default { render };