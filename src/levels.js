Game.levels = [];

Game.levels[0] = {
    backgroundColor: '#666666',
    drag: 200,
    maxVelocity: 200,
    acceleration: 500,
    initialPlayerWidth: 9,

    enemySpeed: 100,
    enemyColor: 'blue',
    enemySpawnRate: 500,

    getEatSound: function () {
	return Game.sounds.eat.waylow;
    },

    getEnemyWidths: function () {
	return [
	    Math.floor(play.player.initialWidth * 0.66),
	    Math.floor(play.player.initialWidth * 1),
	    Math.floor(play.player.initialWidth * 2),
	    Math.floor(play.player.initialWidth * 4),
	    Math.floor(play.player.initialWidth * 8),
	    Math.floor(play.player.width * 0.66),
	    Math.floor(play.player.width * 0.66),
	    Math.floor(play.player.width * 1),
	    Math.floor(play.player.width * 1),
	    Math.floor(play.player.width * 1),	    
	];
    },

    getSpawnSide: function () {
	var possible = ['left', 'right'];
	return possible[Math.rand(possible.length)];
    },
    hardBoundaries: {
	left: false,
	right: false,
	top: true,
	bottom: true,
    },

    scoreGoal: 500,
};

Game.levels[1] = {
    backgroundColor: '#585858',
    drag: 200,
    maxVelocity: 200,
    acceleration: 500,
    initialPlayerWidth: 9,

    enemySpeed: 110,
    enemyColor: 'green',
    enemySpawnRate: 500,

    getEatSound: function () {
	return Game.sounds.eat.low;
    },

    getEnemyWidths: function () {
	return [
	    Math.floor(play.player.initialWidth * 1),
	    Math.floor(play.player.initialWidth * 1),
	    Math.floor(play.player.initialWidth * 2),
	    Math.floor(play.player.initialWidth * 4),
	    Math.floor(play.player.initialWidth * 8),
	    Math.floor(play.player.width * 0.66),
	    Math.floor(play.player.width * 1),
	    Math.floor(play.player.width * 1),
	    Math.floor(play.player.width * 1),
	    Math.floor(play.player.width * 1),	    
	];
    },

    getSpawnSide: function () {
	var possible = ['top', 'bottom'];
	return possible[Math.rand(possible.length)];
    },
    hardBoundaries: {
	left: true,
	right: true,
	top: false,
	bottom: false,
    },

    scoreGoal: 500,
};

Game.levels[2] = {
    backgroundColor: '#555555',
    drag: 200,
    maxVelocity: 200,
    acceleration: 500,
    initialPlayerWidth: 9,

    enemySpeed: 200,
    enemyColor: 'lime',
    enemySpawnRate: 500,

    getEatSound: function () {
	return Game.sounds.eat.medium;
    },

    getEnemyWidths: function () {
	return [
	    Math.floor(play.player.initialWidth * 0.66),
	    Math.floor(play.player.initialWidth * 1),
	    Math.floor(play.player.initialWidth * 2),
	    Math.floor(play.player.initialWidth * 4),
	    Math.floor(play.player.initialWidth * 8),
	    Math.floor(play.player.width * 0.66),
	    Math.floor(play.player.width * 0.66),
	    Math.floor(play.player.width * 1),
	    Math.floor(play.player.width * 1),
	    Math.floor(play.player.width * 1),	    
	];
    },

    getSpawnSide: function () {
	var possible = ['left', 'right'];
	return possible[Math.rand(possible.length)];
    },
    hardBoundaries: {
	left: false,
	right: false,
	top: true,
	bottom: true,
    },

    scoreGoal: 500,
};

Game.levels[3] = {
    backgroundColor: '#444444',
    drag: 200,
    maxVelocity: 200,
    acceleration: 500,
    initialPlayerWidth: 9,

    enemySpeed: 120,
    enemyColor: 'orange',
    enemySpawnRate: 500,

    getEatSound: function () {
	return Game.sounds.eat.high;
    },

    getEnemyWidths: function () {
	return [
	    Math.floor(play.player.initialWidth * 1),
	    Math.floor(play.player.initialWidth * 1),
	    Math.floor(play.player.initialWidth * 2),
	    Math.floor(play.player.initialWidth * 4),
	    Math.floor(play.player.initialWidth * 8),
	    Math.floor(play.player.width * 0.66),
	    Math.floor(play.player.width * 1),
	    Math.floor(play.player.width * 1),
	    Math.floor(play.player.width * 1),	    
	];
    },

    getSpawnSide: function () {
	var possible = ['left', 'top'];
	return possible[Math.rand(possible.length)];
    },
    hardBoundaries: {
	left: false,
	right: true,
	top: false,
	bottom: true,
    },

    scoreGoal: 750,
};

Game.levels[4] = {
    backgroundColor: '#444444',
    drag: 200,
    maxVelocity: 200,
    acceleration: 500,
    initialPlayerWidth: 9,

    enemySpeed: 150,
    enemyColor: 'pink',
    enemySpawnRate: 250,

    getEatSound: function () {
	return Game.sounds.eat.wayhigh;
    },

    getEnemyWidths: function () {
	return [
	    Math.floor(play.player.initialWidth * 0.66),
	    Math.floor(play.player.initialWidth * 1),
	    Math.floor(play.player.initialWidth * 2),
	    Math.floor(play.player.initialWidth * 4),
	    Math.floor(play.player.initialWidth * 8),
	    Math.floor(play.player.width * 0.66),
	    Math.floor(play.player.width * 0.66),
	    Math.floor(play.player.width * 1),
	    Math.floor(play.player.width * 1),
	    Math.floor(play.player.width * 1),	    
	];
    },

    getSpawnSide: function () {
	var possible = ['top', 'bottom'];
	return possible[Math.rand(possible.length)];
    },
    hardBoundaries: {
	left: true,
	right: true,
	top: false,
	bottom: false,
    },

    scoreGoal: 1000,
};
