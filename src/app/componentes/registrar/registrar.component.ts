import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormControlName, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Usuario } from 'src/app/entidades/usuario';
import { ValidadorPasswordDirective } from 'src/app/validador-password.directive';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  public usuario=new Usuario();
  public password2="";

public miFormulario:FormGroup = new FormGroup({

  nombre : new FormControl('',Validators.required),
   contrasena: new FormControl('',Validators.required),
   password2: new FormControl(''),
   imagen: new FormControl(''),
   fechaNac: new FormControl('',[Validators.required]),
   dni: new FormControl(''),
   tipoUsuario: new FormControl('')
} );

public largo(control: AbstractControl): ValidationErrors | null
{
    return control.value < 5000000 ?  {"menorA5M": true } : null ;
} 


  public aceptar(){
    
    console.info(this.miFormulario.value);
  }
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
