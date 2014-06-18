Game.Play = function (game) { };

var play = { };

Game.Play.prototype = {
    create: function () {
	var drag = 200;
	var maxVelocity = 200;
	var acceleration = 500;

	play.startTime = game.time.now;

	game.physics.startSystem(Phaser.Physics.Arcade);
	play.cursors = game.input.keyboard.createCursorKeys();

	play.player = game.add.sprite(Game.w / 2, Game.h / 2, 'player');
	play.player.anchor.setTo(0.5, 0.5);
	game.physics.arcade.enable(play.player);
	play.player.acceleration = acceleration;
	play.player.body.drag.setTo(drag, drag);
	play.player.body.maxVelocity.setTo(maxVelocity, maxVelocity);
	play.player.body.collideWorldBounds = true;

	play.enemies = game.add.group();
	play.enemies.enableBody = true;
    },
    
    update: function () {
	game.physics.arcade.overlap(play.player, play.enemies, this.destroyEnemy, null, this);

	this.generateEnemy(200);

	this.controls();
    },

    generateEnemy: function (velocity) {
	var x, y, theta, vel, enemy;
	vel = {};

	switch (Math.rand(4)) {
	case 0:
	    x = 0;
	    y = Math.rand(Game.h);
	    break;
	case 1:
	    x = Game.w;
	    y = Math.rand(Game.h);
	    break;
	case 2:
	    x = Math.rand(Game.w);
	    y = 60;
	    break;
	case 3:
	    x = Math.rand(Game.w);
	    y = Game.h;
	    break;
	}

	theta = Math.atan((Game.h / 2 - y) / (Game.w / 2 - x)); // theta = angle to center

	if (x > Game.w / 2) {
	    theta += Math.PI; 
	}

	theta += Math.random() * (Math.PI / 3) - Math.PI / 6;  // theta +- 30 degrees

	vel.x = velocity * Math.cos(theta);
	vel.y = velocity * Math.sin(theta);

	enemy = play.enemies.create(x, y, 'player');
	enemy.scale.setTo(0.5, 0.5);
	enemy.body.velocity = vel;

	console.log('enemy: ' + x + ', ' + y + '       ' + (180 * theta / Math.PI).toPrecision(2));
    },

    destroyEnemy: function (player, enemy) {
	enemy.destroy();
    },

    controls: function () {
	if (play.cursors.left.isDown) {
	    if (!play.cursors.right.isDown) {
		play.player.body.acceleration.x = -play.player.acceleration;
	    }
	}
	else if (play.cursors.right.isDown) {
	    play.player.body.acceleration.x = play.player.acceleration;
	}
	else {
	    play.player.body.acceleration.x = 0;
	}

	if (play.cursors.up.isDown) {
	    if (!play.cursors.down.isDown) {
		play.player.body.acceleration.y = -play.player.acceleration;
	    }
	}
	else if (play.cursors.down.isDown) {
	    play.player.body.acceleration.y = play.player.acceleration;
	}
	else {
	    play.player.body.acceleration.y = 0;
	}
    },
};
