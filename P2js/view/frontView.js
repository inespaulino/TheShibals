function render() {
	console.log('entrou no render');
	const button = document.getElementById('lever');
	console.log('um botao', button);
	const door = document.getElementById('door_close');
	console.log('door', door);

	button.addEventListener('click', function(){
		console.log("hola");
		door.src = "/resources/door_open.jpg";
	});
}

export default { render };