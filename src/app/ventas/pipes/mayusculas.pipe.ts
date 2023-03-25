import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    // nombre del Pipe, es el que utilizaremos para mandar a ejecutar nuestro pipe.
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
    transform(value: string): string {
        return 'Hola mundo';
    }
}
