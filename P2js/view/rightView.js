function render() {
    console.log("riiiight");
	const background = document.querySelector('#p2div');
	const body = document.querySelector('#p2frontbody') || document.querySelector('#p2backbody');
    body.innerHTML='';
    const lol = $('#p2frontbody') || $('#p2backbody');
    lol.attr('id','p2rightbody');

	const item = document.createElement('div');

	item.innerHTML = `<div>
        <img id="books_img" src="/resources/oldbooks.png"> 

		<a href="#/player2backside">
       		<img id="arrow_right" src="/resources/arrowright.png" alt="Arrow Right"/>
    	</a>

		<a href="#/player2">
       		<img id="arrow_left" src="/resources/arrowleft.png" alt="Arrow Left"/>
    	</a>	
        					
	</div>`
	
	background.appendChild(item);
    body.appendChild(background);

	console.log('entrou no render');
	const button = $('#books_img');
   
	console.log('um botao', button);
    const button3 = $('#arrow_left');
    const button4 = $('arrow_right');
	

	button.on('click', function(){
		console.log("hola");
		
		console.log(button.attr('src'));
		
	});
   
    button3.on('click', function(){
		console.log("hola");
		
		console.log(button3.attr('src'));
		
	});
    button4.on('click', function(){
		console.log("hola");
		
		console.log(button4.attr('src'));
		
	});
}

export default { render };