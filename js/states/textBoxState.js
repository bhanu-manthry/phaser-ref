states.textBoxState = function() {
}

states.textBoxState.prototype = (function() {

    var textBoxFluid, textBox, string, colors, i = 0;
    var preload = function() {
    };

    var create = function() {
        game.common.backMenuBtn();
        game.stage.backgroundColor = 0xffffff;
        textBoxFluid = game.common.textBoxFluid(centerX, centerY, 'hello');
        textBox = game.common.textBox(centerX, centerY + 100, 100, 50, 'hello');
        textBox.setText('hello', 0xff0000);

        string = 'this is some random text'.split(' ');
        colors = [0xAD1457, 0xc62828, 0x00695C, 0x7CB342, 0xFFA726];



        var interval = setInterval(function() {
            textBoxFluid.setText(string[i], colors[i]);
            i++;

            if(i >= string.length) {
                i = 0;
            }
        }, 1000);

        game.common.intervalIds.push(interval);
    };



    var update = function() {

        // t.setText(string[i], colors[i]);
        // i++;
        //
        // if(i >= string.length) {
        //     i = 0;
        // }
    };

    return {
        preload: preload,
        create: create,
        update: update
    };
})();
