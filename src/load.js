Game.Load = function (game) { };

Game.Load.prototype = {
    preload: function () {
	var loading, loadText;

	// create loading screen
	game.stage.backgroundColor = "#666";
	
	loading = game.add.sprite(Game.w / 2, Game.h / 2, 'loading-color');
	loading.x -= loading.width / 2;
	loading.anchor.y = 0.7;

	game.load.setPreloadSprite(loading);

	loadText = game.add.text(Game.w / 2 - 63, Game.h / 2 + 12, 'loading...', { font: '40px Arial', fill: '#aaaaaa' });

	// load everything
	game.load.image('purple', 'assets/img/square-purple.png');
	game.load.image('blue', 'assets/img/square-blue.png');
	game.load.image('green', 'assets/img/square-green.png');
	game.load.image('lime', 'assets/img/square-lime.png');
	game.load.image('orange', 'assets/img/square-orange.png');
	game.load.image('pink', 'assets/img/square-pink.png');

	game.load.image('grey', 'assets/img/square-grey.png');

	game.load.audio('music', 'assets/aud/Ouroboros.mp3');
	Game.music = game.add.sound('music');
	Game.audio = true;

	game.stage.disableVisibilityChange = true;
    },

    create: function () {
	game.state.start('Menu');
    }
};
