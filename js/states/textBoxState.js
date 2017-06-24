states.textBoxState = function() {
}

states.textBoxState.prototype = (function() {
    var preload = function() {
    };

    var create = function() {
        game.stage.backgroundColor = 0xffffff;
        var t = game.common.textBox(centerX, centerY, 'hello', 0xffffff, 'white');

        var string = 'this is some random text'.split(' ');
        var colors = [0xAD1457, 0xc62828, 0x00695C, 0x7CB342, 0xFFA726];

        var i = 0;
        setInterval(function() {
            t.setText(string[i], colors[i]);
            i++;

            if(i >= string.length) {
                i = 0;
            }
        }, 1000);
    };

    return {
        preload: preload,
        create: create
    };
})();
