import { Component, OnInit } from '@angular/core';
import {UserService} from "../user-service.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users;
  constructor(private _userService: UserService) {
  }

  ngOnInit() {
        this._userService.getUserList().subscribe(
      response => {
        console.log(response);
      },
      error => console.log(error)
    )

  }

}
