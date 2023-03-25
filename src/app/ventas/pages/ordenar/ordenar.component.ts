import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: []
})
export class OrdenarComponent {
  
  enMayusculas: boolean = true;
  heroes: Heroe[] = [
    {
      nombre: "Superman",
      vuela: true,
      color: Color.azul
    },
    {
      nombre: "Batman",
      vuela: false,
      color: Color.negro
    },
    {
      nombre: "Chapulín",
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: "Linterna verde",
      vuela: true,
      color: Color.verde
    }
  ];

  cambiarAMayusculas(){
      return this.enMayusculas = !this.enMayusculas;
  }
}
