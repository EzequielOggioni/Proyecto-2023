import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './componentes/error/error.component';
import { LoginComponent } from './componentes/login/login.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { PrendaPipe } from './pipes/prenda.pipe';
import { FiltroProductoPipe } from './pipes/filtro-producto.pipe';
import { ResaltarDirective } from './resaltar.directive';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LoginComponent,
    BienvenidoComponent,
    MenuComponent,
    RegistrarComponent,
    UsuariosComponent,
    UsuarioComponent,
    ProductosComponent,
    ProductoComponent,
    PrendaPipe,
    FiltroProductoPipe,
    ResaltarDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
