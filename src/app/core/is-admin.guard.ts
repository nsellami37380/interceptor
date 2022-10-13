import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouteConfigLoadEnd, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ROLE, UserService } from '../user.service';



@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {


  constructor(private userS: UserService) {

  
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userS.getRole() == ROLE.ADMIN
  }
  
}
