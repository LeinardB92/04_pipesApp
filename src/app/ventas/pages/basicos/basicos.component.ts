import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: []
})
export class BasicosComponent {
  
  nombreLower: string = "boanerges";
  nombreUpper: string = "BOANERGES";
  nombreCompleto: string = "RaMon BoanerGERs";

  fecha: Date = new Date(); // Fecha propia de JavaScript, que será la de hoy.

}
