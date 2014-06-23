Game.Menu = function (game) { };

menu = { 
    levelSquares: [],
    validLevels: [],
};

Game.Menu.prototype = {
    create: function () {
	menu.validLevels[0] = true;
	if (localStorage.highestLevelIndex) {
	    for (var i = 0; i < +localStorage.highestLevelIndex; i++) {
		menu.validLevels[i] = true;
	    }
	}
	this.createLevelSquares();
	
    },

    update: function () {
	// upon some input:
//	game.state.start('Play');
    },

    toggleAudio: function () {
	if (Game.audio) {
	    Game.audio = false;
	    if (Game.music.isPlaying) {
		Game.music.pause();
	    }
	}
	else {
	    Game.audio = true;
	    if (Game.music.paused) {
		Game.music.resume();
	    }
	}
    },

    createLevelSquares: function () {
	var color;

	for (var i = 0; i < 5; i++) {
	    color = 'grey';

	    if (menu.validLevels[i]) {
		color = Game.levels[i].enemyColor;
	    }
	    menu.levelSquares[i] = game.add.sprite(20 + 75 * i, Game.h - 20, color);
	    menu.levelSquares[i].scale.setTo(60 / 18, 60 / 18);
	    menu.levelSquares[i].anchor.setTo(0, 1);
	}
    },

    addMute: function (that) {
	play.muteKey = game.input.keyboard.addKey(Phaser.Keyboard.M);
	play.muteKey.onDown.add(this.toggleAudio, that);
    },
};
