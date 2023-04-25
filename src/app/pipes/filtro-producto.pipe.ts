import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../clases/producto';

@Pipe({
  name: 'filtroProducto'
})
export class FiltroProductoPipe implements PipeTransform {

  transform(value: Producto[], filtro:string ): Producto[] {
   if(filtro == "")
      return value;
    return value.filter(t=> t.marca.toLowerCase()
    .includes(filtro.toLowerCase()) || t.nombre.toLowerCase()
    .includes(filtro.toLowerCase()) || t.precio.toString().toLowerCase()
    .includes(filtro.toLowerCase()) || t.tipoPrenda.toString().toLowerCase()
    .includes(filtro.toLowerCase())  );
  }

}
