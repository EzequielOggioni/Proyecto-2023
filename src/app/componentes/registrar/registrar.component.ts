import { Component } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  public usuario=new Usuario();
  public password2="";
  public registrar(){

    var usuarios:Usuario[] = [];
    usuarios =JSON.parse( localStorage.getItem("usuario")??"[]")
    
    // var usuario = {nombre: this.usuario., 
    //   contraseña:this.password};
      usuarios.push(this.usuario); 
    localStorage.setItem("usuario",JSON.stringify(
       usuarios));
  }

}
