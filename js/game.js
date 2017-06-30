var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'mycanvas', {
    preload: preload,
    create: create,
    update: update
});

game.common = (function() {
    function textBoxFluid(x, y, initialText) {
        var sprite, textObj;

        function _createTextBox(bgColor) {
            var g = game.state.getCurrentState().add.graphics(x, y);
            g.beginFill(bgColor || 0xffffff, 1);

            // lineStyle(thickness, color, alpha)
            g.lineStyle(1, 0x000000, 1);
            g.drawRect(0, 0, textObj.width + 10, textObj.height);

            sprite = game.state.getCurrentState().add.sprite(x, y, g.generateTexture());
            sprite.anchor.set(0.5);

            // destroy graphics
            g.destroy();

            game.world.bringToTop(textObj);
        };

        var style = {
            fill: 'black'
        };

        textObj = game.add.text(x, y, initialText, style);
        textObj.anchor.set(0.5);

        _createTextBox();

        return {
            setText: function(t, bgColor) {
                textObj.text = t;
                sprite.destroy();
                _createTextBox(bgColor);
            },
            sprite: sprite
        };
    }

    function textBox(x, y, w, h, initialText) {
        var sprite, textObj;

        function _createTextBox(bgColor) {
            var g = game.state.getCurrentState().add.graphics(x, y);
            g.beginFill(bgColor || 0xffffff, 1);

            // lineStyle(thickness, color, alpha)
            g.lineStyle(1, 0x000000, 1);
            g.drawRect(0, 0, w, h);

            sprite = game.state.getCurrentState().add.sprite(x, y, g.generateTexture());
            sprite.anchor.set(0.5);

            // destroy graphics
            g.destroy();

            game.world.bringToTop(textObj);
        };

        var style = {
            fill: 'black'
        };

        textObj = game.add.text(x, y, initialText, style);
        textObj.anchor.set(0.5);

        _createTextBox();

        return {
            setText: function(t, bgColor) {
                textObj.text = t;
                sprite.destroy();
                _createTextBox(bgColor);
            },
            sprite: sprite
        };
    }

    function backMenuBtn() {
        var text = game.add.text(game.world.width - 300, 50, 'Back to menu', {stroke: 'white', strokeThickness: 3});
        text.inputEnabled = true;
        text.events.onInputDown.add(function(t) {
            game.common.intervalIds.forEach(function(f) {
                clearInterval(f);
            });

            game.common.timeoutIds.forEach(function(f) {
                clearTimeout(f);
            });
            game.state.clearCurrentState();
            game.state.start('menuState');
        });
    }

    return {
        textBox: textBox,
        textBoxFluid: textBoxFluid,
        backMenuBtn: backMenuBtn,
        intervalIds: [],
        timeoutIds: []
    };
})();

// all these variables are used across all javascript files;
var centerX, centerY, weather;

function preload() {
    // all the required assets should be loaded here

    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    // properties with center x and y points
    centerX = game.world.centerX;
    centerY = game.world.centerY;

    game.state.add('menuState', states.menuState);
    game.state.add('textState', states.textState);
    game.state.add('textBoxState', states.textBoxState);
    game.state.add('rotateState', states.rotateState);
    game.state.add('spriteAnimationState', states.spriteAnimationState);
    game.state.add('pipesState', states.pipesState);
    game.state.add('bringToTopState', states.bringToTopState);
}

function create() {
    game.state.start('menuState');

    game.forceSingleUpdate = true;
    game.renderer.renderSession.roundPixels = true;
}

function update() {
    // this function is in an infinite loop internally
}
