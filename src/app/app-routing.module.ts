import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './componentes/error/error.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { TokenGuard } from './Guard/token.guard';

const routes: Routes = [
  {path:'bienvenido',component:BienvenidoComponent}, 
  {path:'login',component:LoginComponent, canDeactivate:[TokenGuard], children:[{path:'hola',component:BienvenidoComponent} 
]} ,
  {path:'' ,component:LoginComponent}, 
  {path:'usuarios', component: UsuariosComponent,canActivate:[TokenGuard]},
  {path:'registrar' ,component:RegistrarComponent}, 
  {path:'productos', component:ProductosComponent},
  {path:'**',component:ErrorComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
