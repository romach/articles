import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: User[]
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.fetchUsers()
      .subscribe((users: User[]) => this.users = users)
  }

}

