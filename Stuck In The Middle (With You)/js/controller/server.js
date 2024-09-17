const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

let playerState = {
	player1: false,
	player2: false
}

wss.on('connection', function connection(ws) {
	ws.send("ola1");

	ws.on('message', function incoming(message) {
		const { player } = JSON.parse(message);

		if (player === 'player1' && !playerState.player1) {
			playerState.player1 = true;
		} else if (player === 'player2' && !playerState.player2) {
			playerState.player2 = true;
		}
		//console.log('received: %s', message);

		// Broadcast to all clients
		wss.clients.forEach(function each(client) {
			//if (client !== ws && client.readyState === WebSocket.OPEN) {
			if (client.readyState === WebSocket.OPEN) {
				client.send(JSON.stringify(playerState));
				//client.send(message);
			}
		});
	});

	//ws.send('Welcome to the WebSocket server');
});
console.log('WebSocket is running!');