function render() {

	const socket = new WebSocket('ws://localhost:8080');

	const background = document.querySelector('#p1div');
	
	const item = document.createElement('div');
	item.innerHTML = `<div>
		<img id="lever_img" src="/resources/lever.png"/>

    	<img id="door_img" src="/resources/door_closed.jpg"/>

    	<img id="chair_img" src="/resources/chair.png"/>						
	</div>`

	background.appendChild(item);
	
	console.log('entrou no render');
	const button = $('#lever_img');
	console.log('um botao', button);
	const door = $('#door_img');
	console.log('door', door);
	const myWorker = new Worker("worker.js");

	button.on('click', function(event){
		console.log("hola");
		console.log(door.attr('src'));
		door.attr('src', '/resources/door_open.jpg');
		button.attr('src','/resources/lever_upsidedown.png');
		console.log(button.attr('src'));
		console.log(door.attr('src'));

		myWorker.postMessage(event.data);
	});

	socket.addEventListener('open', function (event) {
        const initialMessage = 'Hello Server!';
        console.log('Sending message: ', initialMessage);
        socket.send(initialMessage);
    });
}

export default { render };