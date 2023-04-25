import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public usuario:Usuario = new Usuario(); 
  public ingresado = false;
  public ingresar() {
    let usuario: Array<Usuario> = <Array<Usuario>>JSON.parse(localStorage.getItem("usuario") ?? "[]");
    let i = usuario.findIndex(x => x.nombre == this.usuario.nombre);
    if (i < 0)
      return;
    if (usuario[i].contrasena == this.usuario.contrasena)
      this.route.navigateByUrl("bienvenido") ; 
    
  }
quitar(){
  this.otronombredevariable.quitarUno();

}
  /**
   *
   */
  constructor(public route: Router, public otronombredevariable:ProductosService ) {
  }

}
