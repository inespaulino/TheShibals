function render() {

	const background = document.querySelector('#p1div');
	const body = document.querySelector('#p1frontbody');
    body.innerHTML='';
    $('#p1frontbody').attr('id','p1leftbody');

	const item = document.createElement('div');
	item.innerHTML = `<div>
        <img id="alchemy_img" src="/resources/Alchemy_table.png">						
	</div>`
	
	background.appendChild(item);
    body.appendChild(background);

	console.log('entrou no render');
	const button = $('#alchemy_img');
	console.log('um botao', button);
	

	button.on('click', function(){
		console.log("hola");
		
		console.log(button.attr('src'));
		
	});
}

export default { render };