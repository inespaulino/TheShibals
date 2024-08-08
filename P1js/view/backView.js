function render() {

	const background = document.querySelector('#p1div');
	const body = document.querySelector('#p1leftbody') || document.querySelector('#p1rightbody');
    body.innerHTML='';
    const lol = $('#p1leftbody') || $('#p1rightbody');
    lol.attr('id','p1backbody');

	const item = document.createElement('div');

	item.innerHTML = `<div>
        <img id="books_img" src="/resources/oldbooks.png"> 
        <img id="board_img" src="/resources/board.png">						
	</div>`
	
	background.appendChild(item);
    body.appendChild(background);

	console.log('entrou no render');
	const button = $('#books_img');
	console.log('um botao', button);
	

	button.on('click', function(){
		console.log("hola");
		
		console.log(button.attr('src'));
		
	});
}

export default { render };