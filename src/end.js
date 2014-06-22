Game.End = function (game) { };

Game.End.prototype = {
    create: function () {
	if (play.levelIndex === Game.levels.length) {
	    localStorage.levelIndex = 0;
	}
	game.state.start('Play');
    },

    update: function () {
	
    },
};
