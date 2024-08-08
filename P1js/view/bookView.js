function render() {

	const div = document.querySelector('#p1div');
	div.innerHTML = '';
    const lol = document.getElementById('p1frontbody') || document.getElementById('p1rightbody') || document.getElementById("p1backbody") || document.getElementById("p1alchemistbody");
    lol.id = 'p1leftbody';

	const item = document.createElement('div');
	item.innerHTML = `<div>
    


		<img style="display: flex; justify-content: center; align-items: center" id="book_img" src="/resources/book.png" alt="no book"/>

        <a href="#/player1rightside">
       		<img id="arrow_right" src="/resources/arrowright.png" alt="Arrow Right"/>
    	</a>
        


	</div>`
	

	div.appendChild(item);

	console.log('entrou no render');
	const button = $('#alchemy_img');
	console.log('um botao', button);

	button.on('click', function(){
		console.log("hola");
		
		window.location.hash = "/alchemy_table";
		
	});

}

export default { render };