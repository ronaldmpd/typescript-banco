import { LONGITUD_MINIMA } from "./constants"; 

export class Animal {
      protected _nombre: string;
     

    constructor(nombre: string) {
        this._nombre = nombre;
    }

    mover(distancia: number=0) {
        console.log(`${this._nombre} se movio ${distancia}m.`);
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(nombre: string) {
        console.log('set nombre');
        if(nombre.length < LONGITUD_MINIMA){
            console.error('Error nombre muy corto');
            return;
        }
         
        this._nombre = nombre;
    }


}






