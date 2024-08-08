function render() {

	const background = document.querySelector('#p2div');
	const body = document.querySelector('#p2frontbody') || document.querySelector('#p2backbody');
    body.innerHTML='';
    const lol = $('#p2frontbody') || $('#p2backody');
    lol.attr('id','p2leftbody');
    

	const item = document.createElement('div');
	item.innerHTML = `<div>
        <img id="board_img" src="/resources/board.png">

        <a href="#/player2">
       		<img id="arrow_right" src="/resources/arrowright.png" alt="Arrow Right"/>
    	</a>

		<a href="#/player2backside">
       		<img id="arrow_left" src="/resources/arrowleft.png" alt="Arrow Left"/>
    	</a>	
							
	</div>`
	
	
	background.appendChild(item);
    body.appendChild(background);

	console.log('entrou no render');
	const button = $('#board_img');
	console.log('um botao', button);
	const button2 = $('#arrow_left');
    const button3 = $('arrow_right');

	button.on('click', function(){
		console.log("hola");
		
		console.log(button.attr('src'));
		
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