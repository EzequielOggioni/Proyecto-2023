import { Component } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  
  public listaUsuarios:Array<Usuario> =[];

  constructor() {
    
    this.listaUsuarios =   <Array<Usuario>> JSON.parse(localStorage.getItem('usuario')??"[]" );
  }
  public quitar(miUsuario:Usuario){
    let index = this.listaUsuarios.findIndex(x => x == miUsuario);
    this.listaUsuarios.splice(index,1);

    localStorage.setItem('usuario',JSON.stringify(this.listaUsuarios));    
  }
}
