"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(a) {
        this.a = a;
        this.nums = [1, 2, 3, 4, 5, 6, 7];
        console.log("Employee Created");
    }
    Employee.prototype.getSalary = function (a, b) {
        return 100 + "";
    };
    Employee.prototype.getDetails = function () {
        var user = {};
        return user;
    };
    return Employee;
}());
exports.Employee = Employee;
var emp = new Employee(10);
console.log(emp.nums);
emp.nums.forEach(function (each) {
    console.log(each);
});
