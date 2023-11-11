import { Injectable } from '@angular/core';
import { Elecciones2023 } from '../interfaces/elecciones2023.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Elecciones2023Service {

  info: any = {};
  cargando = true;
  elecciones2023: any;

  constructor( private http: HttpClient) {

    this.cargarCorporaciones();

    const eleccionesData = localStorage.getItem('elecciones2023Data');
    if (eleccionesData) {
      this.elecciones2023 = JSON.parse(eleccionesData);
      this.cargando = false;
    } else {
      this.cargarCorporaciones();
    }
  }

  private cargarCorporaciones(){
    //LEER JSON

    this.http.get('https://elecciones2023-2d1fa-default-rtdb.firebaseio.com/elecciones2023.json')
      .subscribe( (resp: Elecciones2023) => {

        console.log(resp);
        this.elecciones2023 = resp;
        this.cargando = false;
        localStorage.setItem('elecciones2023Data', JSON.stringify(resp));

      });
  }

  


}
