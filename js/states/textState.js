states.textState = function() {
}

states.textState.prototype = (function() {
    var preload = function() {

    };

    var create = function() {
        // change background color
        game.stage.backgroundColor = 0xffffff;
        var style = {
            // font: '20px Arial',
            fill: 'black',
            // fontWeight: 'bold',
            // align: 'center'
        }

        // game.add.text(x, y, string, style) returns object of Text class
        var textObj = game.add.text(game.world.centerX, game.world.centerY, 'hello');

        var texts = 'a quick brown fox jumps over the lazy dog'.split(' ');

        var i = 0;
        setInterval(function() {
            // change text
            textObj.text = texts[i]
            i++;
            if(i >= texts.length) {
                i = 0;
            }
        }, 1000);
    };

    return {
        preload: preload,
        create: create
    };
})();
