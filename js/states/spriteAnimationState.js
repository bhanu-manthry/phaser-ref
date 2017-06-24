states.spriteAnimationState = function() {
}

states.spriteAnimationState.prototype = (function() {
    var state = this;
    var preload = function() {
        game.load.spritesheet('earth', 'img/earth.png', 213, 160, 12);
    };

    var create = function() {
        // game.stage.backgroundColor = 0xffffff;
        var earth = game.add.sprite(100, 100, 'earth');        
        earth.animations.add('rotate');

        // play(name, frameRate, loop, killOnComplete)
        earth.animations.play('rotate', 15, true);
        earth.smoothed = true;
    };

    return {
        preload: preload,
        create: create
    };
})();
