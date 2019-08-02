import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../core';
import { map ,  take } from 'rxjs/operators';

@Injectable()
export class NoAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {

    // 取得现在用户验证的状态，如果是已经登录了的，就不允许到这个网站.
    return this.userService.isAuthenticated.pipe(take(1), map(isAuth => !isAuth));

  }
}
