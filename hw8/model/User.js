import {v4} from 'uuid';

export class User {
  constructor(name, email) {
    this.id = v4();
    this.name = name;
    this.email = email;
  }
}