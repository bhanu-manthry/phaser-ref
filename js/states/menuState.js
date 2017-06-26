var states = {};
states.menuState = function() {
}

states.menuState.prototype = (function() {
    var menu = ['text', 'text box', 'rotate', 'sprite sheet animation'];
    var preload = function() {
        // all the required assets should be loaded here
    };

    var create = function() {
        game.stage.backgroundColor = 0xffffff;
        var texts = [];
        var yStart = 100;
        var style = {
            fontSize: '50px'
        };

        var menuOption = '';

        menu.forEach(function(m, i) {
            var menuText = this.game.add.text(centerX, yStart+=70, m, style);
            menuText.anchor.set(0.5);
            texts.push(menuText);
            console.log(texts[i].inputEnabled = true);

            texts[i].events.onInputDown.add(function(t) {
                this.game.state.clearCurrentState();
                style.fill = 'red';
                t.setStyle(style);
                switch(t.text) {
                    case 'text':
                        this.game.state.start('textState');
                        break;
                    case 'text box':
                        this.game.state.start('textBoxState');
                        break;
                    case 'rotate':
                        this.game.state.start('rotateState');
                        break;
                    case 'sprite sheet animation':
                        this.game.state.start('spriteAnimationState');
                        break;
                }
            });

            texts[i].events.onInputUp.add(function(t) {
                style.fill = 'black';
                t.setStyle(style);
            });
        });
    };

    return {
        preload: preload,
        create: create
    };
})();
