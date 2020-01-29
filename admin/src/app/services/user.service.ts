import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private users: Array<User>;

  constructor(private httpClient: HttpClient) {
    this.users = [];
    this.getAllUsers();
  }

  getAllUsers() {
    this.httpClient.get('http://localhost:5000/api/users').subscribe(response => {
      let allUsers = Object.values(response);
      allUsers.forEach(user => {
        let bufferUser = new User(user.Id, user.name, user.surname,
                                  user.email, user.password, user.role);
        this.users.push(bufferUser);
      });
      console.log(this.users);
    });
  }

  getUsers() {
    return this.users;
  }

  setUser(Id, name, surname, email, password, role) {
    this.httpClient.post('http://localhost:5000/api/users/create/', {
                          Id: Id,
                          name: name,
                          surname: surname,
                          email: email,
                          password: password,
                          role: role
                        }).subscribe(response => {
      console.log(response);
    });
  this.getAllUsers();
  }
}