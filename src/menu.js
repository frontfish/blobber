Game.Menu = function (game) { };

Game.Menu.prototype = {
    create: function () {

    },

    update: function () {
	// upon some input:
	game.state.start('Play');
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

    addMute: function (that) {
	play.muteKey = game.input.keyboard.addKey(Phaser.Keyboard.M);
	play.muteKey.onDown.add(this.toggleAudio, that);
    },
};
