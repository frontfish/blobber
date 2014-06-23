Game.Menu = function (game) { };

menu = { 
    levelSquares: [],
    validLevels: [],
};

Game.Menu.prototype = {
    create: function () {
	localStorage.levelIndex = localStorage.levelIndex || 0;
	localStorage.highestLevelIndex = localStorage.highestLevelIndex || 0;
	localStorage.gameBeat = localStorage.gameBeat || false;

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

	menu.title = game.add.sprite(Game.w / 2, 20, 'title');
	menu.title.anchor.x = 0.5;
	menu.title.alpha = 0;
	menu.title.scale.setTo(0.001, 0.001);

	menu.byText = game.add.text(Game.w - 50, 85, 'by Christopher Hinstorff', { font: '24px Arial', fill: '#ccc' });
	menu.byText.alpha = 0;
	menu.byText.anchor.x = 1;

	menu.instructionsText = game.add.text(15, 195, 'You are the purple square\nEat smaller squares\nAvoid bigger squares', { font: '20px Arial', fill: '#caf', align: 'left' });
	menu.instructionsText.x = -menu.instructionsText.width;
	menu.instructionsText.anchor.y = 1;

	menu.controlsText = game.add.text(Game.w - 15, 195, 'Mute with M\nUse the arrow keys\nPress UP to begin', { font: '20px Arial', fill: '#ccc', align: 'right' });
	menu.controlsText.x = Game.w + menu.controlsText.width;
	menu.controlsText.anchor.setTo(1, 1);

	// tweening
	game.add.tween(menu.title).to({ alpha: 1 }, 500, null, true, 0, 0, false);
	game.add.tween(menu.title.scale).to({ x: 1, y: 1 }, 500, null, true, 0, 0, false);
	game.add.tween(menu.byText).to({ alpha: 1 }, 1250, null, true, 500, 0, false);
	game.add.tween(menu.instructionsText).to({ x: 15 }, 750, null, true, 1750, 0, false);
	game.add.tween(menu.controlsText).to({ x: Game.w - 15 }, 500, null, true, 2250, 0, false);

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

	this.addMute();
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

	    menu.levelSquares[i].alpha = 0;
	    game.add.tween(menu.levelSquares[i]).to({ alpha: 1 }, 250, null, true, 500 + i * 250, 0, false);
	}

	menu.frame = game.add.sprite(this.fromGridLoc(+localStorage.levelIndex), Game.h - 15, 'frame');
	menu.frame.anchor.setTo(0, 1);
	menu.frame.alpha = 0;
	game.add.tween(menu.frame).to({ alpha: 1 }, 250, null, true, 500 + (+localStorage.levelIndex * 250), 0, false);
    },

    fromGridLoc: function (gridValue) {
	return 15 + 75 * gridValue;
    },

    moveLeft: function () {
	if (menu.validLevels[+localStorage.levelIndex - 1]) {
	    +localStorage.levelIndex--;
	    menu.frame.x = this.fromGridLoc(+localStorage.levelIndex);
	    if (Game.audio) {
		Game.levels[+localStorage.levelIndex].getEatSound().play('', 0, 0.5, false, true);
	    }
	}
    },

    moveRight: function () {
	if (menu.validLevels[+localStorage.levelIndex + 1]) {
	    +localStorage.levelIndex++;
	    menu.frame.x = this.fromGridLoc(+localStorage.levelIndex);
	    if (Game.audio) {
		Game.levels[+localStorage.levelIndex].getEatSound().play('', 0, 0.5, false, true);
	    }
	}
    },

    addMute: function (that) {
	play.muteKey = game.input.keyboard.addKey(Phaser.Keyboard.M);
	play.muteKey.onDown.add(this.toggleAudio, that);
    },

    startGame: function () {
	if (Game.audio) {
	    Game.levels[+localStorage.levelIndex].getEatSound().play('', 0, 0.5, false, true);
	}
	game.state.start('Play');
    },
};
