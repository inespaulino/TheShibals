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
		path: '/player1leftside',
		controller: 'leftController'
	},
	rightWall:{
		path: '/player1rightside',
		controller: 'rightController'
	},
	currentPath: {
		path: '',
		controller: ''
	  }
};
