Game.End = function (game) { };

end = {};

Game.End.prototype = {
    create: function () {
	if (+localStorage.levelIndex === Game.levels.length) {
	    localStorage.levelIndex = 0;
	}

	end.cursors = game.input.keyboard.createCursorKeys();
	end.cursors.up.onDown.add(+localStorage.levelIndex === 0 && play.levelWon ? function() { game.state.start('Menu') } : function() { game.state.start('Play') }, this);
	end.cursors.down.onDown.add(function() { game.state.start('Menu') }, this);
	Game.Menu.prototype.addMute();

	end.successText = game.add.text(Game.w / 2, 30, 'Success!', { font: '95px Arial', fill: '#ccc' });
	end.successText.anchor.x = 0.5;
	end.playText = game.add.text(Game.w / 2, 200, 'Press UP to continue', { font: '33px Arial', fill: this.parseColor(play.level.enemyColor) });
	end.playText.anchor.x = 0.5;
	end.menuText = game.add.text(Game.w / 2, 245, 'Press DOWN to return to menu', { font: '20px Arial', fill: '#ccc' });
	end.menuText.anchor.x = 0.5;

	if (!play.levelWon) {
	    end.successText.text = 'Failure!';
	    end.playText.text = 'Press UP to try again';

	    end.levelText = game.add.text(Game.w - 5, 5, (+localStorage.levelIndex + 1) + ' / ' + Game.levels.length, { font: '12px Arial', fill: '#aaa' });
	    end.levelText.anchor.x = 1;
	}
	else {	  
	    end.successText.fill = this.parseColor('purple');

	    end.beatText = game.add.text(Game.w / 2, 125, 'You beat level ' + localStorage.levelIndex, { font: '20px Arial', fill: '#ccc' });
	    end.beatText.anchor.x = 0.5

	    if (+localStorage.levelIndex === 0) {
		end.beatText.text = "Congratulations, you beat the game!";
		end.playText.fill = this.parseColor('purple');
	    }
	}
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
