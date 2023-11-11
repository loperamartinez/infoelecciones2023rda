import { Component } from '@angular/core';
import { InfoCorporacionService } from 'src/app/services/info-corporacion.service';
import { InfoElecciones2019Service } from 'src/app/services/info-elecciones2019.service';


@Component({
  selector: 'app-elecciones2019',
  templateUrl: './elecciones2019.component.html',
  styleUrls: ['./elecciones2019.component.css']
})
export class Elecciones2019Component {

  constructor(public infoElecciones2019Service: InfoElecciones2019Service,) {}

} 
