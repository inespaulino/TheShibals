function render() {

	const div = document.querySelector('#p2div');
	div.innerHTML = '';
    const lol = document.getElementById('p2frontbody') || document.getElementById('p2rightbody') || document.getElementById("p2backbody");
    lol.id = 'p2leftbody';
    

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
	
	
	div.appendChild(item);

	const button = $('#board_img');

	button.on('click', function(){
		console.log("hola");
		
		console.log(button.attr('src'));
		
	});

}

export default { render };