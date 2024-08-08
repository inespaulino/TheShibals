function render() {
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

	button.on('click', function(){
		console.log("hola");
		
		console.log(button.attr('src'));
		
	});
}

export default { render };