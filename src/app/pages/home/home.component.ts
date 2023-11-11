import { Component } from '@angular/core';
import { InfoCorporacionService } from '../../services/info-corporacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor( public infoCorporacionService: InfoCorporacionService) {}

}
