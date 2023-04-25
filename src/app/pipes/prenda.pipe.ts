import { Pipe, PipeTransform } from '@angular/core';
import { TipoPrenda } from '../clases/producto';

@Pipe({
  name: 'prenda'
})
export class PrendaPipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case TipoPrenda.buzo:
          return "Buzo";
        break;
        case TipoPrenda.pantalon:
          return "pantalon";
        break;
        case TipoPrenda.remera:
          return "remera";
        break;
      default:
        return "error";
        break;
    }
    
    return "";
  }

}
