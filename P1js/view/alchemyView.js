function render() {
    
	const div = document.querySelector('#p1div');
	div.innerHTML = '';
    const lol = document.getElementById('p1leftbody') || document.getElementById('p1rightbody') || document.getElementById("p1frontbody");
    lol.id = 'p1alchemistbody';

	const item = document.createElement('div');

	item.innerHTML = `<div>
        
	<img id="blue_potion" src="/resources/bluepotion.png" alt="Blue Potion"/>
 	
    <img id="pink_potion" src="/resources/pinkpotion.png" alt="Pink Potion"/>
    
	<img id="yellow_potion" src="/resources/yellowpotion.png" alt="Yellow Potion"/>
 	
    <img id="p1cauldron" src="/resources/cauldron.png" alt="Cauldron"/>
    
				
	</div>`;
	
	div.appendChild(item);

	const button = $('#blue_potion');
    const button2 = $('#pink_potion');
    const button3 = $('#yellow_potion');
    const button4 = $('#p1cauldron');

	console.log('entrou no render');

    button.on('click', function(){
		console.log("hola");
		
		console.log(button.attr('src'));
		
	});
    button2.on('click', function(){
		console.log("hola");
		
		console.log(button.attr('src'));
		
	});
    button3.on('click', function(){
		console.log("hola");
		
		console.log(button.attr('src'));
		
	});
    button4.on('click', function(){
		console.log("hola");
		
		console.log(button.attr('src'));
		
	});

}

export default { render };