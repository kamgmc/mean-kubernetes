import { Component } from '@angular/core';
import {UserService} from './services/user.service'
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  users: User[] = [];

  constructor(private userService: UserService) {
    this.userService.getUsers()
      .then((response: User[]) => {
        console.log(response);
        this.users = response;
      });
  }
}
