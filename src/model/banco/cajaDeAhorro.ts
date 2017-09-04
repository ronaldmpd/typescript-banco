import { Cuenta } from "./cuenta";

export class CajaDeAhorro extends Cuenta {
    protected _interes: number;

    constructor(numero: number, saldo: number, moneda: string) {
        super(numero, saldo, moneda);
    }
    
    aplicarIntereses() : void {        
        console.log('Aplicando interes');
        //console.log(`Aplicando interese numero de cuenta: ${super.numero} saldo: ${super.saldo} moneda: ${super.moneda}.`);        
    }
}