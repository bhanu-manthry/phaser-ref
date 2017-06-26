states.textBoxState = function() {
}

states.textBoxState.prototype = (function() {

    var t, string, colors, i = 0;
    var preload = function() {
    };

    var create = function() {
        game.common.backMenuBtn();
        game.stage.backgroundColor = 0xffffff;
        t = game.common.textBox(centerX, centerY, 'hello', 0xffffff, 'white');

        string = 'this is some random text'.split(' ');
        colors = [0xAD1457, 0xc62828, 0x00695C, 0x7CB342, 0xFFA726];
    };

    var update = function() {

        t.setText(string[i], colors[i]);
        i++;

        if(i >= string.length) {
            i = 0;
        }
    };

    return {
        preload: preload,
        create: create,
        update: update
    };
})();
