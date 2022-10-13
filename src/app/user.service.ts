import { Injectable } from '@angular/core';
import { Observable, of } from  'rxjs';
import { delay } from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public login(): Observable<boolean>  {
    return of(false).pipe(delay(33000));
  }
}
