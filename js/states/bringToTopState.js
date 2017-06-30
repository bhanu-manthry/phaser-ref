states.bringToTopState = function() {
}

states.bringToTopState.prototype = (function() {
    var world, airplanes = [];

    var preload = function() {
        game.load.image('airplane', 'img/airplane.png');
        game.load.image('world', 'img/world.jpg');
    };

    var create = function() {
        airplanes[1] = game.add.sprite(200, 500, 'airplane');
        world = game.add.sprite(0, 0, 'world');
        game.common.backMenuBtn();
        world.width = game.world.width;
        world.height = game.world.height;

        game.world.bringToTop(airplanes[1]);

        airplanes[1].scale.set(0.2);
        airplanes[1].anchor.set(0.5);

        var tween = game.add.tween(airplanes[1]);
        // to(properties, duration, ease, autoStart, delay, repeat, yoyo)
        tween.to({x: 800}, 5000, Phaser.Easing.Linear.None, true, 0, -1, true);



        airplanes[2] = game.add.sprite(900, 500, 'airplane');
        airplanes[2].scale.set(0.2);
        airplanes[2].anchor.set(0.5);

        var tween = game.add.tween(airplanes[2]);
        // to(properties, duration, ease, autoStart, delay, repeat, yoyo)
        tween.to({x: 200}, 5000, Phaser.Easing.Linear.None, true, 0, -1, true);
    };

    return {
        preload: preload,
        create: create
    };
})();
