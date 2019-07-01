"use strict";
exports.__esModule = true;
var Group = /** @class */ (function () {
    function Group(id, grouName) {
        this.id = id;
        this.grouName = grouName;
    }
    Group.prototype.addUser = function (user) {
        this.users.push(user);
    };
    Group.prototype.getUser = function () {
        return this.users;
    };
    return Group;
}());
exports.Group = Group;
