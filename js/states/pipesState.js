states.pipesState = function() {
}

states.pipesState.prototype = (function() {
    var preload = function() {

    };

    // obj = {
    //     x,
    //     y,
    //     width,
    //     height,
    //     color,
    //     strokeColor,
    //     strokeWidth
    // };

    function box(obj, cb) {
        var g, sprite;
        function create(color) {
            g = game.add.graphics(obj.x, obj.y);
            g.beginFill(color);
            g.lineStyle(5, obj.strokeColor);

            g.drawRect(0, 0, obj.width, obj.height);

            sprite = game.add.sprite(obj.x, obj.y, g.generateTexture());

            if(cb) {
                // further improvements on sprite are performed by callback function
                cb(sprite);
            }

            g.destroy();
        }

        create(obj.color);

        function setColor(color) {
            sprite.destroy();
            create(color);
            if(cb) {
                cb(sprite);
            }
        }

        return {
            setColor: setColor,
            sprite: sprite
        };
    }

    var create = function() {
        game.common.backMenuBtn();
        // change background color
        game.stage.backgroundColor = 0xffffff;

        var b1 = box({
            x: 200,
            y: 150,
            width: 500,
            height: 20,
            color: 0xff0000,
            strokeColor: 0x000000,
            strokeWidth: 2
        });

        var b2 = box({
            x: 700,
            y: 160,
            width: 570,
            height: 20,
            color: 0xff0000,
            strokeColor: 0x000000,
            strokeWidth: 2,
            anchor: {
                x: 1, y: 0.5
            }
        }, function(sprite) {
            sprite.anchor.set(1, 0.5)
            sprite.angle = -30;
        });


        var b3 = box({
            x: 200,
            y: 430,
            width: 570,
            height: 20,
            color: 0xff0000,
            strokeColor: 0x000000,
            strokeWidth: 2
        });

        setTimeout(function() {
            b1.setColor(0x00ff00);
        }, 1000);

        setTimeout(function() {
            b2.setColor(0x00ffff);
        }, 2000);

        setTimeout(function() {
            b3.setColor(0xddff00);
        }, 4000);
    };

    return {
        preload: preload,
        create: create
    };
})();
