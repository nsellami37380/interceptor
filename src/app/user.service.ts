import { Injectable } from '@angular/core';
import { Observable, of } from  'rxjs';
import { delay } from  'rxjs/operators';

export enum ROLE  {ANONYMOUS, USER, ADMIN}

@Injectable({
  providedIn: 'root'
})


export class UserService {

   private role: ROLE = ROLE.ADMIN;
 
  constructor() { }

  public login(): Observable<boolean>  {
    return of(false).pipe(delay(33000));
  }

  public getRole(): ROLE {
    return this.role;
  }
}
