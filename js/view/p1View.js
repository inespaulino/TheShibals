function render() {
	window.location.pathname = "html/player1.html";

	console.log('entrou no render');
	const button = document.getElementById('lever');
	console.log('um botao', button);
	const door = document.getElementById('door_close');
	console.log('door', door);

	button.addEventListener('click', function(){
		console.log("hola");
		door.srcName = "/resources/door_open.jpg";
	});
}

export default { render };