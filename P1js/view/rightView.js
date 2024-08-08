function render() {
    console.log("riiiight");
	const div = document.querySelector('#p1div');
	div.innerHTML = '';
    const lol = document.getElementById('p1leftbody') || document.getElementById('p1backbody') || document.getElementById("p1frontbody");
    lol.id = 'p1rightbody';

	const item = document.createElement('div');

	item.innerHTML = `<div>
        <img id="books_img" src="/resources/oldbooks.png"> 

        <a href="#/player1backside">
       		<img id="arrow_right" src="/resources/arrowright.png" alt="Arrow Right"/>
    	</a>

		<a href="#/player1">
       		<img id="arrow_left" src="/resources/arrowleft.png" alt="Arrow Left"/>
    	</a>					
	</div>`
	
	div.appendChild(item);

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
		window.location.href = "player1.html";
		console.log("hola");
		
		console.log(button3.attr('src'));
		
	});
	
    button4.on('click', function(){
		window.location.href = "backwall.html";
		console.log("hola");
		
		console.log(button4.attr('src'));
		
	});
}

export default { render };