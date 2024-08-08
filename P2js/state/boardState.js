const boardState = {
	"door" : false,
	"lever" : false,
	"names": [],
	"namesRight": ['guilherme','ines','arada','bernardo','pascoa','deli','marcelo', 'susana'],
	"setNames" : function(name){
		this.names = name;
	}
}

function setNames(name){
	boardState.names = name;
}

export default {setNames, boardState};