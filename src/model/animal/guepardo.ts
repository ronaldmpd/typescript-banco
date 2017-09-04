import { Animal } from "./animal"; 

export class Guepardo extends Animal {
    constructor(nombre: string) {
        super(nombre);
    }
    
    mover(distancia: number=50) {
        console.log('Corriendo para cazar...');
        super.mover(distancia);
    }
}