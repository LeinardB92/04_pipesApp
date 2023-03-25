// Las enumeraciones asignan un valor de 0 a n, a cada elemento del enum.
// rojo -> 0, negro -> 1, azul -> 2, verde -> 3
export enum Color{
    rojo, negro, azul, verde
}

export interface Heroe {
    nombre: string;
    vuela: boolean;
    color: Color;
}
