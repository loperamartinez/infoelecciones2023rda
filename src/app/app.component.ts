import { Component } from '@angular/core';
import { InfoCorporacionService } from './services/info-corporacion.service';
import { InfoPaginaService } from './services/info-pagina.service';
import { InfoElecciones2019Service } from './services/info-elecciones2019.service';
import { Elecciones2023Service } from './services/elecciones2023.service';
import { InfoCandidatosService } from './services/info-candidatos.service';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elecciones2023';

  constructor( 
    public infoPaginaService: InfoPaginaService,
    public infoCorporacionService: InfoCorporacionService,
    public infoElecciones2019Service: InfoElecciones2019Service,
    public elecciones2023Service: Elecciones2023Service,
    public infoCandidatosService: InfoCandidatosService,
    private router: Router,) {}

    ngOnInit() {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          window.scrollTo(0, 0);
        }
      });
    }

  }


