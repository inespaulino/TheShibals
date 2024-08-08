function render() {
    
	const background = document.querySelector('#p1div');
	const body = document.querySelector('#p1leftbody') || document.querySelector('#p1rightbody') || document.querySelector("#p1frontbody");
    console.log("render",background);
    body.innerHTML='';
    const lol = $('#p1leftbody') || $('#p1rightbody');
    lol.attr('id','p1backbody');

	const item = document.createElement('div');

	item.innerHTML = `<div>
        <img id="chair_img" src="/resources/chair.png"> 				
	</div>`
	
	background.appendChild(item);
    body.appendChild(background);

	console.log('entrou no render');
	
    const button = $('#chair_img');
	

	button.on('click', function(){
		console.log("hola");
		
		console.log(button.attr('src'));
		
	});
}

export default { render };