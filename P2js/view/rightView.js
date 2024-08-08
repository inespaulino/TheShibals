function render() {
	const div = document.querySelector('#p2div');
	div.innerHTML = '';
    const lol = document.getElementById('p2leftbody') || document.getElementById('p2backbody') || document.getElementById("p2frontbody");
    lol.id = 'p2rightbody';

	const item = document.createElement('div');

	item.innerHTML = `<div>
        <img id="books_img" src="/resources/oldbooks.png"> 

		<a href="#/player2backside">
       		<img id="arrow_right" src="/resources/arrowright.png" alt="Arrow Right"/>
    	</a>

		<a href="#/player2">
       		<img id="arrow_left" src="/resources/arrowleft.png" alt="Arrow Left"/>
    	</a>	
        					
	</div>`;
	
	div.appendChild(item);
	const button = $('#books_img');
   

	button.on('click', function(){
		console.log("hola");
		window.location.hash = "/books";
		console.log(button.attr('src'));
		
	});
}

export default { render };