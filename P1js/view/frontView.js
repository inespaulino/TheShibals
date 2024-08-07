function render() {
	console.log('entrou no render');
	const button = $('#lever_img');
	console.log('um botao', button);
	const door = $('#door_img');
	console.log('door', door);

	button.on('click', function(){
		console.log("hola");
		console.log(door.attr('src'));
		door.attr('src', '/resources/door_open.jpg');
		button.attr('src','/resources/lever_upsidedown.png');
		console.log(button.attr('src'));
		console.log(door.attr('src'));
	});
}

export default { render };