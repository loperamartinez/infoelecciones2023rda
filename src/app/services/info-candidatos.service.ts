import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { labels } from '../interfaces/labels.interface';
import { infoCandidatos2023 } from '../interfaces/info-candidatos.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoCandidatosService {

  info: any = {};
  cargando = true;


  constructor( private http: HttpClient) {
    this.cargarInfo();

    const eleccionesData = localStorage.getItem('elecciones2023Data');
    if (eleccionesData) {
      this.info = JSON.parse(eleccionesData);
      this.cargando = false;
    } else {
      this.cargarInfo();
    }
  }

  private cargarInfo(){

    return new Promise <void>( ( resolve, reject ) => {
      this.http.get('https://elecciones2023-2d1fa-default-rtdb.firebaseio.com/infocandidatos.json')
      .subscribe( (resp: infoCandidatos2023) =>{
  
        this.info = resp;
        this.cargando = false;
        resolve();
        localStorage.setItem('infoCandidatosData', JSON.stringify(resp));
      }
      );
    })
    
  }
 
  getCandidatos(): Observable<infoCandidatos2023[]> {
    return this.http.get<infoCandidatos2023[]>('https://elecciones2023-2d1fa-default-rtdb.firebaseio.com/infocandidatos.json');
  }

  getCandidato(index: string){
    return this.http.get(`https://elecciones2023-2d1fa-default-rtdb.firebaseio.com/infocandidatos/${ index }.json`);
  }

  
}
