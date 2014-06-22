Game = {
    w: 400,
    h: 300,
};

Game.Boot = function (game) { };

Game.Boot.prototype = {
    preload: function () {
	game.load.image('loading-color', 'assets/img/loading-color.png');
    },

    create: function () {
	game.state.start('Load');
    }
};

Math.rand = function (max) {
    return Math.floor(Math.random() * max);
};

Phaser.Sprite.prototype.area = function () {
    return this.width * this.height; 
};
