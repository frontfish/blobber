Game.Load = function (game) { };

Game.Load.prototype = {
    preload: function () {
	// create loading screen
	game.stage.backgroundColor = "#ddd";

	// load everything
	game.load.image('player', 'assets/img/player.png');
	game.load.image('enemy', 'assets/img/enemy.png');
    },

    create: function () {
	game.state.start('Menu');
    }
};
