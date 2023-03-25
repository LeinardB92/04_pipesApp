import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    // nombre del Pipe, es el que utilizaremos para mandar a ejecutar nuestro pipe.
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
    transform(value: string, enMayusculas: boolean = true): string {

        // if (enMayusculas) {
        //     return value.toUpperCase();
        // }
        // else {return value.toLowerCase()};

        return (enMayusculas) ? value.toUpperCase() : value.toLowerCase();
    }
}
