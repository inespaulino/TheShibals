
import state from "/P2js/state/state.js";

function render() {

	const div = document.querySelector('#p2div');
	div.innerHTML = '';
	const lol = document.getElementById('p2leftbody') || document.getElementById('p2rightbody') || document.getElementById("p2backbody") || document.getElementById("p2frontbody");
	lol.id = 'p2frontbody';
	const item = document.createElement('div');
	item.innerHTML = `<div>
		<img id="${getLeverId(state.wardrobe)}" src="/resources/${getLever(state.lever)}"/>

    	<img id="img_door" src="/resources/${getDoor(state.door)}"/>

		<a href="#/player2rightside">
       		<img id="arrow_right" src="/resources/arrowright.png" alt="Arrow Right"/>
    	</a>

		<a href="#/player2leftside">
       		<img id="arrow_left" src="/resources/arrowleft.png" alt="Arrow Left"/>
    	</a>
						
	</div>`;

	div.appendChild(item);

	const door = $('#img_door');
	if (state.wardrobe) {
		const button = $('#lever_img');
		button.on('click', function () {
			state.lever = true;
			state.door = true;
			door.attr('src', '/resources/door_open.jpg');
			button.attr('src', '/resources/lever_upsidedown.png');

		});
	}
}
function getLever(lever) {
	if (lever && state.wardrobe)
		return "lever_upsidedown.png";
	else if (!lever && state.wardrobe)
		return "lever.png";
	return "wardrobe1.png";
}

function getDoor(door) {
	if (door)
		return "door_open.jpg";
	return "door_closed.jpg";
}

function getLeverId(wardrobe){
	if (wardrobe)
		return "lever_img";
	return "wardrobe_img";
}
export default { render };