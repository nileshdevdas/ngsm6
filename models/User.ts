import { Group } from './Group';

export class User {
    group: Group;
    constructor(public id, public name, public username, public password) { }
    setGroup(group: Group) {
        this.group = group;
    }
}