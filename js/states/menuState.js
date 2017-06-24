var states = {};
states.menuState = function() {
}

states.menuState.prototype = (function() {
    var menu = ['text', 'text box', 'rotate', 'sprite sheet animation'];
    var preload = function() {
        // all the required assets should be loaded here
        console.log(menu);
    };

    var create = function() {
    };

    return {
        preload: preload,
        create: create
    };
})();
