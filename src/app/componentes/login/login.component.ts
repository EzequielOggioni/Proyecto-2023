import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public usuario = "";
  public password = "";
  public ingresado = false;
  public ingresar() {
    let usuario: Array<any> = <Array<any>>JSON.parse(localStorage.getItem("usuario") ?? "");
    let i = usuario.findIndex(x => x.nombre == this.usuario);
    if (i < 0)
      return;
    if (usuario[i].contraseña == this.password)
      this.route.navigateByUrl("bienvenido") ; 
    
  }

  /**
   *
   */
  constructor(public route: Router ) {
    
  }

}
