import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent {

  public provincias: any[] = [];
  public localidades  : any[] = [];
  public provincias1: any[] = [
    { name: "CABA" },
    { name: "Buenos Aires" },
    { name: "Catamarca" },
    { name: "Chaco" },
    { name: "Chubut" },
    { name: "Córdoba" },
    { name: "Corrientes" },
    { name: "Entre Ríos" },
    { name: "Formosa" },
    { name: "Jujuy" },
    { name: "La Pampa" },
    { name: "La Rioja" },
    { name: "Mendoza" },
    { name: "Misiones" },
    { name: "Neuquén" },
    { name: "Río Negro" },
    { name: "Salta" },
    { name: "San Juan" },
    { name: "San Luis" },
    { name: "Santa Cruz" },
    { name: "Santa Fe" },
    { name: "Santiago del Estero" },
    { name: "Tierra del Fuego" },
    { name: "Tucumán" }
  ];
  public pciaSeleccionada: any = {};
  constructor(public http: HttpClient) {
    
    
 //   let url: string = "https://countriesnow.space/api/v0.1/countries/states";
    let url: string = "http://localhost:7200/provincias";
    this.http.get<any>(url, {}).pipe(
        catchError((err, cau) => {
          this.provincias = this.provincias1;
          return cau;
        }
        )).subscribe(
          (next) => {
            this.provincias = next.data;
          } 
        ); 
  }

  buscarLoc(){
    let url: string = "https://countriesnow.space/api/v0.1/countries/state/cities";
    let valor = this.pciaSeleccionada;
    this.http.post<any>(url,
      { "country": "argentina","state": valor}, {}).pipe(
        catchError((err, cau) => {
          this.localidades = this.provincias1;
          return cau;
        }
        )).subscribe(
          (next) => {
            this.localidades = next.data;
          }
        );
  }


}
