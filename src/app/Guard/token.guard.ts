import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate , RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../componentes/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate, CanDeactivate<LoginComponent>{
 
  public salida = false;
  

  constructor() {
    
    

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      return this.salida;
  }

  canDeactivate<T> (component: T, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    return this.salida || nextState.url.indexOf('registrar')>0 ;
  }
  
}
