export default {
	home: {
		path: '/',
		controller: 'frontController'
	},
	player1: {
		path: '/player1',
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
	backWall:{
		path: '/player1backside',
		controller: 'backController'
	},
	alchemy_table_full:{
		path: '/alchemy_table',
		controller: '/alchemyController'
	},
	currentPath: {
		path: '',
		controller: ''
	  }
};
