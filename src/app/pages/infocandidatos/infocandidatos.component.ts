import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { infoCandidatos2023 } from 'src/app/interfaces/info-candidatos.interface';
import { InfoCandidatosService } from 'src/app/services/info-candidatos.service';
import { Elecciones2023Service } from '../../services/elecciones2023.service';
import { Elecciones2023 } from 'src/app/interfaces/elecciones2023.interface';


@Component({
  selector: 'app-infocandidatos',
  templateUrl: './infocandidatos.component.html',
  styleUrls: ['./infocandidatos.component.css']
})
export class InfocandidatosComponent implements OnInit {
  candidatos: infoCandidatos2023[] = [];
  candidato: infoCandidatos2023 | undefined;
  
  numIndex: any;
  nombreMuniDept: any;
  candidatosPorCiudad: any[] = [];
  
  constructor(
    private infoCandidatosService: InfoCandidatosService,
    private route: ActivatedRoute,
    private elecciones2023Service :Elecciones2023Service,
  ) {}

  ngOnInit(): void{
  

    this.infoCandidatosService.getCandidatos().subscribe(candidatos => {
      this.candidatos = candidatos;
      this.route.params.subscribe(parametros => {
        const index = +parametros['index'];
        if (index >= 0 && index < this.candidatos.length) {
          this.candidato = this.candidatos[index];
        }
      });
    });

    
}

}





