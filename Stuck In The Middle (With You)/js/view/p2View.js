function render() {
	window.location.pathname = "html/player2.html";

	console.log('entrou no render');
	const button = document.getElementById('lever');
	console.log('um botao', button);
	const door = document.getElementById('door_close');
	console.log('door', door);

	const myWorker = new Worker("worker.js");

	button.addEventListener('click', function(event){
		console.log("hola");
		myWorker.postMessage(event.data);
		door.srcName = "/resources/door_open.jpg";
	});

	socket.addEventListener('open', function (event) {
        const initialMessage = 'Hello Server!';
        console.log('Sending message: ', initialMessage);
        socket.send(initialMessage);
    });
}

export default { render };