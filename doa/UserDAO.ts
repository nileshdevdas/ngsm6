import { User } from '../models/User';
import { Group } from '../models/Group';
class UserDOA {
    users: User[];
    group: Group[];
    createUser(user: User) {
        this.users.push(user);
    }
    createGroup(group: Group) {
        this.group.push(group);
    }
}


