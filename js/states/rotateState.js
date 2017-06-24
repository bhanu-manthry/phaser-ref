states.rotateState = function() {
}

states.rotateState.prototype = (function() {
    var preload = function() {
        game.load.image('wheel', 'img/wheel.png');
    };

    var create = function() {
        game.stage.backgroundColor = 0xffffff;
        var wheel1 = game.add.sprite(120, 120, 'wheel');
        wheel1.scale.set(0.4);
        wheel1.anchor.set(0.5);
        // rotate wheel1
        var tween1 = game.add.tween(wheel1);
        // to(properties, duration, ease, autoStart, delay, repeat, yoyo)
        tween1.to({angle: 90}, 1000, Phaser.Easing.Linear.None, true, 0, -1, true);

        var wheel2 = game.add.sprite(centerX, centerY, 'wheel');
        wheel2.scale.set(0.5);
        var tween2 = game.add.tween(wheel2);
        tween2.to({angle: 360}, 7000, Phaser.Easing.Linear.None, true, 0, -1, false);

        var wheel3 = game.add.sprite(400, 120, 'wheel');
        wheel3.scale.set(0.4);
        wheel3.anchor.set(0.5);
        var tween3 = game.add.tween(wheel3);
        tween3.to({ angle: 359 }, 2000, Phaser.Easing.Linear.None, false, 0, -1, false);

        var rotate = true;
        setInterval(function() {
            if(rotate) {
                tween3.start();                
            } else {
                tween3.stop();
            }

            rotate = !rotate;
        }, 2000);
    };

    return {
        preload: preload,
        create: create
    };
})();
