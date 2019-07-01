export class Employee {
    nums = [1, 2, 3, 4, 5, 6, 7];
    private user: string;
    constructor(public a: number) {
        console.log("Employee Created")
    }
    getSalary(a: number, b: Number): String {
        return 100 + "";
    }
}
var emp = new Employee(10);
console.log(emp.nums);
emp.nums.forEach(each => console.log(each));











