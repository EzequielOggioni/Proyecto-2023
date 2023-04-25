import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  @Input()
public  miProducto:Producto;

  constructor() { 
    this.miProducto = new Producto();
  }
}
