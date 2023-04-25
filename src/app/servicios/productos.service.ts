import { Injectable } from '@angular/core';
import { Producto, TipoPrenda } from '../clases/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
 private productos:Producto[];

  getProducto():Producto[]{
    return this.productos;
  }
  quitarUno():void{
    this.productos.pop();
  }

  constructor() { 
    
  this.productos = [];
  this.productos.push(<Producto>{marca:'Nique',nombre:'coleccion 2022',precio: 596,stock:30, tipoPrenda :TipoPrenda.remera  });
  this.productos.push(<Producto>{marca:'Adiddas',nombre:'lisa',precio: 1596,stock:15, tipoPrenda :TipoPrenda.remera  });
  this.productos.push(<Producto>{marca:'Levis',nombre:'coleccion 2022',precio: 896,stock:20, tipoPrenda :TipoPrenda.pantalon  });
  this.productos.push(<Producto>{marca:'Puma',nombre:'lisa',precio: 996,stock:18, tipoPrenda :TipoPrenda.buzo  });
  this.productos.push(<Producto>{marca:'Nique',nombre:'estampas',precio: 1206,stock:9, tipoPrenda :TipoPrenda.pantalon  });
  this.productos.push(<Producto>{marca:'Puma',nombre:'Messi',precio: 2096,stock:13, tipoPrenda :TipoPrenda.buzo  });

  }
}
