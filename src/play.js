Game.Play = function (game) { };

Game.Play.prototype = {
    create: function () {
	game.physics.startSystem(Phaser.Physics.Arcade);
	cursors = game.input.keyboard.createCursorKeys();

	player = game.add.sprite(Game.w / 2, Game.h / 2, 'player');
	player.anchor.setTo(0.5, 0.5);
	game.physics.arcade.enable(player);
	player.acceleration = 150;
	player.body.drag.setTo(100, 100);
	player.body.maxVelocity.setTo(200, 200);
	player.body.collideWorldBounds = true;
    },

    update: function () {
	this.controls();
    },

    controls: function () {
	if (cursors.left.isDown) {
	    if (!cursors.right.isDown) {
		player.body.acceleration.x = -player.acceleration;
	    }
	}
	else if (cursors.right.isDown) {
	    player.body.acceleration.x = player.acceleration;
	}
	else {
	    player.body.acceleration.x = 0;
	}

	if (cursors.up.isDown) {
	    if (!cursors.down.isDown) {
		player.body.acceleration.y = -player.acceleration;
	    }
	}
	else if (cursors.down.isDown) {
	    player.body.acceleration.y = player.acceleration;
	}
	else {
	    player.body.acceleration.y = 0;
	}
    },
};
