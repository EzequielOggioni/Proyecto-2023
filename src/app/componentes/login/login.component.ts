import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';
import { TokenGuard } from 'src/app/Guard/token.guard';
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
    // let usuario: Array<Usuario> = <Array<Usuario>>JSON.parse(localStorage.getItem("usuario") ?? "[]");
    // let i = usuario.findIndex(x => x.usuario == this.usuario.usuario);
    // if (i < 0)
    //   return;
    // if (usuario[i].password == this.usuario.password)
    //   {
    //     this.token.salida =true;
    //     this.route.navigateByUrl("bienvenido") ; 
    //   }  

    this.http.post<Usuario[]>("http://localhost:7200/login",this.usuario)
    .subscribe(data=>{
      if(data.length ==1){
        localStorage.setItem('UsuarioLogeuado',JSON.stringify(data[0]));
        this.token.salida =true;
        this.route.navigateByUrl("bienvenido") ;
      }
    } );
  }
quitar(){
  this.otronombredevariable.quitarUno();

} 
  constructor(public route: Router, 
    public otronombredevariable:ProductosService,
    public token:TokenGuard, public http:HttpClient ) {
  }

}
