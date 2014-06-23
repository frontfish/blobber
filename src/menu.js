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
		if (i + 1 < Game.levels.length) {
		    menu.validLevels[i + 1] = true;
		}
	    }
	}
	this.createLevelSquares();
	this.addControls();
    },

    update: function () {
	// upon some input:
//	game.state.start('Play');
    },

    addControls: function () {
	menu.cursors = game.input.keyboard.createCursorKeys();
	menu.cursors.left.onDown.add(this.moveLeft, this);
	menu.cursors.right.onDown.add(this.moveRight, this);
	menu.cursors.up.onDown.add(this.startGame, this);
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

	menu.frame = game.add.sprite(this.fromGridLoc(+localStorage.levelIndex), Game.h - 15, 'frame');
	menu.frame.anchor.setTo(0, 1);
    },

    fromGridLoc: function (gridValue) {
	return 15 + 75 * gridValue;
    },

    moveLeft: function () {
	if (menu.validLevels[+localStorage.levelIndex - 1]) {
	    +localStorage.levelIndex--;
	    menu.frame.x = this.fromGridLoc(+localStorage.levelIndex);
	}
    },

    moveRight: function () {
	if (menu.validLevels[+localStorage.levelIndex + 1]) {
	    +localStorage.levelIndex++;
	    menu.frame.x = this.fromGridLoc(+localStorage.levelIndex);
	}
    },

    addMute: function (that) {
	play.muteKey = game.input.keyboard.addKey(Phaser.Keyboard.M);
	play.muteKey.onDown.add(this.toggleAudio, that);
    },

    startGame: function () {
	game.state.start('Play');
    },
};
