import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Elecciones2023 } from 'src/app/interfaces/elecciones2023.interface';
import { Elecciones2023Service } from 'src/app/services/elecciones2023.service';

@Component({
  selector: 'app-elecciones2023',
  templateUrl: './elecciones2023.component.html',
  styleUrls: ['./elecciones2023.component.css']
})
export class Elecciones2023Component implements OnInit {
  nombreCorporacion: any;
  nombreMuniDept: any;
  candidatosPorCiudad: any[] = [];
  inicio:any;

  constructor(
    public elecciones2023Service: Elecciones2023Service,
    private route: ActivatedRoute
  ) {}

  

  ngOnInit(): void {
    this.nombreMuniDept = this.route.snapshot.params['ciudad'];
    // Filtra los candidatos por la ciudad seleccionada
    this.candidatosPorCiudad = this.elecciones2023Service.elecciones2023.filter(
      (candidato: Elecciones2023) => candidato.ciudad === this.nombreMuniDept
      
    );

    if(this.nombreMuniDept === 'Pereira'){
      this.inicio=5;
    }
    else if(this.nombreMuniDept === 'Dosquebradas'){
      this.inicio=0;
    }
    else if(this.nombreMuniDept === 'Risaralda'){
      this.inicio=12;
    }
    
    
  
  }
}

