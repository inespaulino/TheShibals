function render() {

	const div = document.querySelector('#p2div');
	div.innerHTML = '';
    const lol = document.getElementById('p2frontbody') || document.getElementById('p2rightbody') || document.getElementById("p2backbody") || document.getElementById("p2alchemistbody");
    lol.id = 'p2leftbody';

	const item = document.createElement('div');
	item.innerHTML = `<div>
    


		<img style="display: flex; justify-content: center; align-items: center" id="book_img" src="/resources/bookp3.png" alt="no book"/>

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