function render() {

	const div = document.querySelector('#p1div');
	div.innerHTML = '';
    const lol = document.getElementById('p1frontbody') || document.getElementById('p1rightbody') || document.getElementById("p1backbody");
    lol.id = 'p1leftbody';

	const item = document.createElement('div');
	item.innerHTML = `<div>
        <img id="alchemy_img" src="/resources/Alchemy_table.png">
       
        <a href="#/player1">
       		<img id="arrow_right" src="/resources/arrowright.png" alt="Arrow Right"/>
    	</a>

		<a href="#/player1backside">
       		<img id="arrow_left" src="/resources/arrowleft.png" alt="Arrow Left"/>
    	</a>						
	</div>`
	
	
	div.appendChild(item);

	console.log('entrou no render');
	const button = $('#alchemy_img');
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
		
		console.log(button33.attr('src'));
		
	});
}

export default { render };