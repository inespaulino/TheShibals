export default {
	home: {
		path: '/',
		controller: 'frontController'
	},
	player1: {
		path: '/player1',
		controller: 'frontController'
	},
	player2: {
		path: '/player2',
		controller: 'frontController'
	},
	sideWall: {
		path: '/player2leftside',
		controller: 'leftController'
	},
	rightWall:{
		path: '/player2rightside',
		controller: 'rightController'
	},
	backWall:{
		path: '/player2backside',
		controller: 'backController'
	},
	board_full:{
		path: '/board_full',
		controller: 'boardController'
	},
	currentPath: {
		path: '',
		controller: ''
	  }
};
