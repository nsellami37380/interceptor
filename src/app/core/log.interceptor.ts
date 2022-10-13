import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from  '@angular/common/http';
import { Observable, tap } from "rxjs";

@Injectable({providedIn: 'root'})
export class LogInterceptor implements HttpInterceptor {

  private timeStart: number = 0;
  private timeStop: number = 0;
  public diff: number = 0;
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      this.timeStart = new Date().getTime();
      // console.log("valeur de time start au debut : " + this.timeStart);
      
      //   console.log(req.urlWithParams); // J'affiche l'url avec les params
        // Je passe la requête à la suite des interceptors cachés d'angular
        // Et je retourne ce résultat pour que la requête ait bien lieu
      return next.handle(req).pipe(
        tap((response)=> {
        if(response instanceof HttpResponse) {
          this.timeStop = new Date().getTime();
           this.diff =  this.timeStop - this.timeStart;
           console.log("duree de la requete : " + this.diff + " ms");
          //  console.log(response.body);
            }
        }
        )
      );

      
    }
}
