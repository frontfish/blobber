Game.End = function (game) { };

end = {};

Game.End.prototype = {
    create: function () {
	if (+localStorage.levelIndex === Game.levels.length) {
	    localStorage.levelIndex = 0;
	}

	end.cursors = game.input.keyboard.createCursorKeys();
	end.cursors.up.onDown.add(function() { 
	    if (Game.audio) {
		Game.levels[+localStorage.levelIndex].getEatSound().play('', 0, 0.5, false, true);
	    }
	    game.state.start('Play');
	}, this);
	end.cursors.down.onDown.add(function() { game.state.start('Menu') }, this);
	Game.Menu.prototype.addMute();

	end.successText = game.add.text(Game.w / 2, 40, 'Success!', { font: '95px Arial', fill: '#ccc' });
	end.successText.anchor.x = 0.5;
	end.successText.alpha = 0;

	end.playText = game.add.text(Game.w / 2, 200, 'Press UP to continue', { font: '33px Arial', fill: this.parseColor(Game.levels[localStorage.levelIndex].enemyColor || 'purple') });
	end.playText.anchor.x = 0.5;
	end.playText.alpha = 0;

	end.menuText = game.add.text(Game.w / 2, 245, 'Press DOWN to return to menu', { font: '20px Arial', fill: '#ccc' });
	end.menuText.anchor.x = 0.5;
	end.menuText.alpha = 0;

	end.scoreText = game.add.text(10, 10, Game.Play.prototype.calcScore() + ' / ' + play.level.scoreGoal, { font: '20px Arial', fill: '#aaa' });

	end.attrText = game.add.text(Game.w - 3, Game.h - 3, 'music: "Ouroboros" by Kevin Macleod (incompetech.com)', { font: '10px Arial', fill: '#aaa' });
	end.attrText.anchor.setTo(1, 1);
	end.attrText.alpha = 0;

	if (!play.levelWon) {
	    end.successText.text = 'Failure!';
	    end.playText.text = 'Press UP to try again';

	    end.levelText = game.add.text(Game.w - 5, 5, (+localStorage.levelIndex + 1) + ' / ' + Game.levels.length, { font: '12px Arial', fill: '#aaa' });
	    end.levelText.anchor.x = 1;
	}
	else {	  
	    end.successText.fill = this.parseColor('purple');
	    end.scoreText.fill = this.parseColor('purple');

	    end.beatText = game.add.text(Game.w / 2, 135, 'You beat level ' + (+localStorage.levelIndex || Game.levels.length), { font: '20px Arial', fill: '#ccc' });
	    end.beatText.anchor.x = 0.5;
	    end.beatText.alpha = 0;
	    game.add.tween(end.beatText).to({ alpha: 1 }, 500, null, true, 0, 0, false);

	    if (+localStorage.levelIndex === 0 && localStorage.gameBeat === 'false') {
		end.beatText.text = "Congratulations, you beat the game!";
		end.playText.fill = this.parseColor('purple');
		localStorage.gameBeat = true;
	    }
	}

	// tweens
	game.add.tween(end.successText).to({ alpha: 1 }, 500, null, true, 0, 0, false);
	game.add.tween(end.playText).to({ alpha: 1 }, 250, null, true, 250, 0, false);
	game.add.tween(end.menuText).to({ alpha: 1 }, 250, null, true, 500, 0, false);
	game.add.tween(end.attrText).to({ alpha: 1 }, 500, null, true, 750, 0, false);
    },

    update: function () {
	
    },

    parseColor: function (text) {
	switch (text) {
	case 'purple':
	    return '#caf';
	case 'blue':
	    return '#acf';
	case 'green':
	    return '#afc';
	case 'lime':
	    return 'cfa';
	case 'orange': 
	    return 'fca';
	case 'pink':
	    return 'fac';
	}
    },
};
