"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(id, name, username, password) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
    }
    User.prototype.setGroup = function (group) {
        this.group = group;
    };
    return User;
}());
exports.User = User;
