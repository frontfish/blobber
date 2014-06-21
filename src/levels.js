Game.levels = [];

Game.levels[0] = {
    backgroundColor: '#eee',
    drag: 200,
    maxVelocity: 200,
    acceleration: 500,
    initialPlayerWidth: 9,

    enemySpeed: 100,
    enemyColor: 'blue',

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
    backgroundColor: '#eee',
    drag: 200,
    maxVelocity: 200,
    acceleration: 500,
    initialPlayerWidth: 9,

    enemySpeed: 100,
    enemyColor: 'green',

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
