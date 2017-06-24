var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'mycanvas', {
    preload: preload,
    create: create,
    update: update
});

game.common = (function() {
    function textBox(x, y, initialText) {
        var sprite, textObj;

        function _createTextBox(bgColor) {
            var g = game.add.graphics(x, y);
            g.beginFill(bgColor || 0xffffff, 1);

            // lineStyle(thickness, color, alpha)
            g.lineStyle(1, 0x000000, 1);
            g.drawRect(0, 0, textObj.width + 10, textObj.height);

            sprite = game.add.sprite(x, y, g.generateTexture());
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
            }
        };
    }

    return {
        textBox: textBox
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
}

function create() {
    game.state.start('spriteAnimationState');

    game.forceSingleUpdate = true;
    game.renderer.renderSession.roundPixels = true;
}

function update() {
    // this function is in an infinite loop internally
}
