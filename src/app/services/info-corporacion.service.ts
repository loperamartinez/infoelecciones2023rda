import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Corporacion } from '../interfaces/info-corporaciones.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoCorporacionService {

  info: any = {};
  cargando = true;
  corporaciones: any;

  constructor( private http: HttpClient) {

    this.cargarCorporaciones();
  }

  private cargarCorporaciones(){
    //LEER JSON

    this.http.get('https://elecciones2023-2d1fa-default-rtdb.firebaseio.com/corporacion.json')
      .subscribe( (resp: Corporacion) => {

        console.log(resp);
        this.corporaciones = resp;
        this.cargando = false;
      });
  }
}
