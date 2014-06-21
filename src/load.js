Game.Load = function (game) { };

Game.Load.prototype = {
    preload: function () {
	// create loading screen
	game.stage.backgroundColor = "#ddd";

	// load everything
	game.load.image('purple', 'assets/img/square-purple.png');
	game.load.image('blue', 'assets/img/square-blue.png');
	game.load.image('green', 'assets/img/square-green.png');
	game.load.image('lime', 'assets/img/square-lime.png');
	game.load.image('orange', 'assets/img/square-orange.png');
	game.load.image('pink', 'assets/img/square-pink.png');
    },

    create: function () {
	game.state.start('Menu');
    }
};
