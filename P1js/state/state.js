const state = {
	"door" : false,
	"lever" : false,
	"potions": [],
	"potionsRight": ['yellowpotion', 'bluepotion', 'pinkpotion','bluepotion','pinkpotion'],
	"setPotions" : function(potion){
		this.potions = potion;
	},
	"chestOpener": true
}

function setPotions(potion){
	state.potions = potion;
}

export default {setPotions, state};