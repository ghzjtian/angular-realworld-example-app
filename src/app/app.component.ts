import { Component, OnInit } from '@angular/core';

import { UserService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor (
    private userService: UserService
  ) {}

  ngOnInit() {
    // 一开始就验证用户的权限信息.
    this.userService.populate();
  }
}
