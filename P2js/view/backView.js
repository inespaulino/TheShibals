function render() {
    
	const div = document.querySelector('#p2div');
	div.innerHTML = '';
    const lol = document.getElementById('p2leftbody') || document.getElementById('p2rightbody') || document.getElementById("p2frontbody");
    lol.id = 'p2backbody';

	const item = document.createElement('div');

	item.innerHTML = `<div>
        <img id="chair_img" src="/resources/chair.png"> 
		<a href="#/player2leftside">
       		<img id="arrow_right" src="/resources/arrowright.png" alt="Arrow Right"/>
    	</a>

		<a href="#/player2rightside">
       		<img id="arrow_left" src="/resources/arrowleft.png" alt="Arrow Left"/>
    	</a>				
	</div>`
	
	div.appendChild(item);

}

export default { render };