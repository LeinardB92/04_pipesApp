import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: []
})
export class NoComunesComponent {
  
  //i18nSelect
  nombre: string = 'Maritza';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
  };

  //i18nPlural
  clientes: string[] = ['María', 'Pedro', 'Susan', 'Esmeralda', 'Ulises'];
  clientesMapa = {
    '=0':'0 clientes esperando.',
    '=1':'un cliente esperando.',
    'other':'# clientes esperando.'
  };

  cambiarNombre(){
    this.nombre = 'Boanerges';
    this.genero = 'masculino' 
  };

  borrarNombre(){
    this.clientes.pop();
  };

  //KeyValue Pipe
  persona = {
    nombre: 'Boanerges',
    edad: 30,
    direccion: 'Manzana 1'
  };

  //Json Pipe
  heroes: object[] = [
    {
      nombre: 'superman',
      vuela: true
    },
    {
      nombre: 'plasticman',
      vuela: true
    },
    {
      nombre: 'chacal',
      vuela: false
    }
  ]
}
