import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
@Input('dadasad')
  public usuario:Usuario;
  
@Output() 
public eliminar =new  EventEmitter();

  informarEliminar(){
    this.eliminar.emit();
  }
  
  constructor() {
  
     this.usuario = new Usuario();
    // this.usuario.dni = 321321;
    // this.usuario.fechaNac = new Date();
    // this.usuario.imagen = 'https://avatars.githubusercontent.com/u/31676316?s=400&v=4';
    // this.usuario.nombre = 'Elprofe';
    // this.usuario.tipoUsuario = 3;
  }
}
