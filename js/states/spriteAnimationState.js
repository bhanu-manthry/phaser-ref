states.spriteAnimationState = function() {
}

states.spriteAnimationState.prototype = (function() {
    var state = this;
    var preload = function() {
        game.load.spritesheet('earth', 'img/earth.png', 213, 160, 12);
    };

    var create = function() {
        game.common.backMenuBtn();
        game.stage.backgroundColor = 0x000000;
        var earth = game.add.sprite(100, 100, 'earth');
        earth.animations.add('rotate');

        // play(name, frameRate, loop, killOnComplete)
        earth.animations.play('rotate', 15, true);
        earth.smoothed = true;

        var text = game.add.text(10, 500, 'hello', {fill: 'white', fontSize: '70px'});

        // tween to move text front and back
        game.add.tween(text).to({x: 500}, 2000, Phaser.Easing.Linear.None, true, 0, -1, true);
    };

    return {
        preload: preload,
        create: create
    };
})();
