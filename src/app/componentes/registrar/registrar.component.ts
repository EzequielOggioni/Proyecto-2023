import { Component } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  public usuario="";
  public password="";
  public password2="";
  public registrar(){

    var usuarios = [];
    usuarios =JSON.parse( localStorage.getItem("usuario")??"[]")
    var usuario = {nombre: this.usuario, 
      contraseña:this.password};
      usuarios.push(usuario); 
    localStorage.setItem("usuario",JSON.stringify(
       usuarios));
  }

}
