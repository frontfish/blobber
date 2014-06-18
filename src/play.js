Game.Play = function (game) { };

var play = {
    enemySpeed: 100,
};

Game.Play.prototype = {
    create: function () {
	var drag = 200;
	var maxVelocity = 200;
	var acceleration = 500;

	play.startTime = game.time.now;

	game.physics.startSystem(Phaser.Physics.Arcade);
	play.cursors = game.input.keyboard.createCursorKeys();

	play.player = game.add.sprite(Game.w / 2, Game.h / 2, 'player');
	play.player.imageWidth = 18;
	play.player.anchor.setTo(0.5, 0.5);
	play.player.scale.setTo(0.5, 0.5);
	game.physics.arcade.enable(play.player);
	play.player.acceleration = acceleration;
	play.player.body.drag.setTo(drag, drag);
	play.player.body.maxVelocity.setTo(maxVelocity, maxVelocity);
	play.player.body.collideWorldBounds = true;

	play.enemies = game.add.group();
	play.enemies.enableBody = true;
	play.enemiesCreated = 0;

	play.scoreText = game.add.text(10, 10, 'score: 0', { font: '20px Arial', fill: '#aaa' });
    },
    
    update: function () {
	game.physics.arcade.overlap(play.player, play.enemies, this.eat, null, this);
	game.physics.arcade.overlap(play.enemies, play.enemies, this.eat, null, this);

	play.enemies.forEachAlive(this.enemyBoundary, this);

	if (game.time.now - play.startTime > 500 * play.enemiesCreated) {
	    this.generateEnemy(play.enemySpeed);
	}

	if (!play.player.alive) {
	    this.endGame();
	}

	this.controls();

	play.scoreText.text = 'score: ' + Math.floor((play.player.area() - 81) / 18);
    },

    generateEnemy: function (velocity) {
	var x, y, widths, width, theta, vel, enemy;
	vel = {};
	widths = [
	    Math.floor(play.player.width / 1.5),
	    Math.floor(play.player.width / 1.5),
	    Math.floor(play.player.width / 1.5),
	    Math.floor(play.player.width / 1.5),
	    Math.floor(play.player.width * 1),
	    Math.floor(play.player.width * 1),
	    Math.floor(play.player.width * 1.2),
	];

	width = widths[Math.rand(widths.length)];

	switch (Math.rand(4)) {
	case 0:
	    x = 0 - Math.ceil(width / 2);
	    y = Math.rand(Game.h);
	    break;
	case 1:
	    x = Game.w + Math.ceil(width / 2);
	    y = Math.rand(Game.h);
	    break;
	case 2:
	    x = Math.rand(Game.w);
	    y = 0 - Math.ceil(width / 2);
	    break;
	case 3:
	    x = Math.rand(Game.w);
	    y = Game.h + Math.ceil(width / 2);
	    break;
	}

	theta = Math.atan((Game.h / 2 - y) / (Game.w / 2 - x)); // theta = angle to center

	if (x > Game.w / 2) {
	    theta += Math.PI; 
	}

	theta += Math.random() * (Math.PI / 3) - Math.PI / 6;  // theta +- 30 degrees

	vel.x = velocity * Math.cos(theta);
	vel.y = velocity * Math.sin(theta);

	enemy = play.enemies.create(x, y, 'enemy');
	enemy.imageWidth = 18;
	enemy.scale.setTo(width / enemy.imageWidth, width / enemy.imageWidth);
	enemy.anchor.setTo(0.5, 0.5);
	enemy.body.velocity = vel;
	
	play.enemiesCreated++;
    },

    enemyBoundary: function (enemy) {
	if (enemy.x - enemy.width / 2 < 0) { // left boundary
	    enemy.body.velocity.x = Math.abs(enemy.body.velocity.x);
	}
	if (enemy.x + enemy.width / 2 > Game.w) { // right boundary
	    enemy.body.velocity.x = -Math.abs(enemy.body.velocity.x);
	}
	if (enemy.y - enemy.height / 2 < 0) { // top boundary
	    enemy.body.velocity.y = Math.abs(enemy.body.velocity.y);
	}
	if (enemy.y + enemy.height / 2 > Game.h) { // bottom boundary
	    enemy.body.velocity.y = -Math.abs(enemy.body.velocity.y);
	}
    },

    eat: function (obj1, obj2) {
	var eater, food, newEaterWidth;

	eater = obj1.area() >= obj2.area() ? obj1 : obj2;
	food = obj1 === eater ? obj2 : obj1;

	if (eater !== food) {
	    newEaterWidth = Math.sqrt(eater.area() + food.area() / 2);
	    
	    // velocity is changed to conserve momentum as if mass was conserved
	    eater.body.velocity.x = (eater.area() * eater.body.velocity.x + food.area() * food.body.velocity.x) / (eater.area() + food.area());
	    eater.body.velocity.y = (eater.area() * eater.body.velocity.y + food.area() * food.body.velocity.y) / (eater.area() + food.area());

	    eater.scale.setTo(newEaterWidth / eater.imageWidth, newEaterWidth / eater.imageWidth);

	    food.kill();
	}
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

    endGame: function () {
	game.state.start('Play');
    }
};
