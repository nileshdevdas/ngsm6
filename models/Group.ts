import { User } from './User'

export class Group {
    users: User[];
    constructor(public id, public grouName) { }

    addUser(user: User) {
        this.users.push(user);
    }

    getUser() {
        return this.users;
    }
}