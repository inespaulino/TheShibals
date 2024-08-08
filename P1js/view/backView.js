function render() {
    
	const div = document.querySelector('#p1div');
	div.innerHTML = '';
    const lol = document.getElementById('p1leftbody') || document.getElementById('p1rightbody') || document.getElementById("p1frontbody");
    lol.id = 'p1backbody';

	const item = document.createElement('div');

	item.innerHTML = `<div>
        <img id="chair_img" src="/resources/chair.png"> 

		<a href="#/player1leftside">
			<img id="arrow_right" src="/resources/arrowright.png" alt="Arrow Right"/>
 		</a>

 		<a href="#/player1rightside">
			<img id="arrow_left" src="/resources/arrowleft.png" alt="Arrow Left"/>
 		</a>	
		
        		
	</div>`;
	
	div.appendChild(item);

	
	console.log('entrou no render');

}

export default { render };