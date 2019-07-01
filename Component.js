"use strict";
exports.__esModule = true;
var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.init = function () {
        console.log('init');
    };
    Component.prototype.destroy = function () {
        console.log('destroy');
    };
    Component.prototype.load = function () {
        console.log('load');
    };
    Component.prototype.unload = function () {
        console.log('unload');
    };
    Component.prototype.render = function () {
        console.log('render');
    };
    return Component;
}());
var lf = new Component();
lf.init();
