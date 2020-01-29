import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UsersComponent implements OnInit {
  
  public users: Array<User>;

  constructor(private userService: UserService) {
    this.users = userService.getUsers();
    console.log(this.users);
  }

  ngOnInit() {
  }
}