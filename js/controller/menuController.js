import menuView from "/js/view/menuView.js";

function init() {
	require('server.js');
	menuView.render();
}

export default { init };