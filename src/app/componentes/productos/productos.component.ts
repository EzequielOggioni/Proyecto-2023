import { Component } from '@angular/core';
import { Producto, TipoPrenda } from 'src/app/clases/producto';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos: Producto[];
  busqueda: string = ""

  constructor(public nombrequeyoquieraparaelservicio: ProductosService) {
    this.productos = nombrequeyoquieraparaelservicio.getProducto();
  }

}
