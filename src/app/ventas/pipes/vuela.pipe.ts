import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    // nombre del Pipe, es el que utilizaremos para mandar a ejecutar nuestro pipe.
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

    transform(value: boolean): string {
        return (value) ? "Vuela" : "No vuela";
    }
}