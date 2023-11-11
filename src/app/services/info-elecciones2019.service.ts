import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Elecciones2019 } from '../interfaces/info-elecciones.interface';
import { Elecciones2019pei } from '../interfaces/info-elecciones2019pei';
import { Elecciones2019rda } from '../interfaces/info-elecciones2019rda.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoElecciones2019Service {
  
  info: any = {};
  cargando = true;
  elecciones2019: any;
  elecciones2019pei: any;
  elecciones2019rda: any;

  constructor( private http: HttpClient) {

    this.cargarElecciones2019();
    this.cargarElecciones2019pei();
    this.cargarElecciones2019rda();
  }

  private cargarElecciones2019(){
    //LEER JSON

    this.http.get('https://elecciones2023-2d1fa-default-rtdb.firebaseio.com/elecciones2019.json')
      .subscribe( (resp: Elecciones2019) => {

        console.log(resp);
        this.elecciones2019 = resp;
        this.cargando = false;
      });
  }

  private cargarElecciones2019pei(){
    //LEER JSON

    this.http.get('https://elecciones2023-2d1fa-default-rtdb.firebaseio.com/elecciones2019pei.json')
      .subscribe( (resp: Elecciones2019pei) => {

        console.log(resp);
        this.elecciones2019pei = resp;
        this.cargando = false;
      });
  }

  private cargarElecciones2019rda(){
    //LEER JSON

    this.http.get('https://elecciones2023-2d1fa-default-rtdb.firebaseio.com/elecciones2019rda.json')
      .subscribe( (resp: Elecciones2019rda) => {

        console.log(resp);
        this.elecciones2019rda = resp;
        this.cargando = false;
      });
  }
}
