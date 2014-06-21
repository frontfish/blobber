Game.End = function (game) { };

Game.End.prototype = {
    create: function () {
	game.state.start('Play');
    },

    update: function () {

    },
};
