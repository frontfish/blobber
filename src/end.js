Game.End = function (game) { };

end = {};

Game.End.prototype = {
    create: function () {
	if (play.levelIndex === Game.levels.length) {
	    localStorage.levelIndex = 0;
	}

	end.cursors = game.input.keyboard.createCursorKeys();
	end.cursors.up.onDown.add(function() { game.state.start('Play') }, this);
	end.cursors.down.onDown.add(function() { game.state.start('Menu') }, this);
	Game.Menu.prototype.addMute();
    },

    update: function () {
	
    },
};
