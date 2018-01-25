import { UserService } from 'shared/services/user.service';
import { AuthService } from 'shared/services/auth.service';
import { Observable } from 'rxjs/Observable';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private userService: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.appUser$
      .map(user => {
        if (user.isAdmin === true) {
          return true;
        }

        this.router.navigate(['\login'], {
          queryParams: {
            returnUrl: state.url
          }
        });

        return false;
      });
  }
}
