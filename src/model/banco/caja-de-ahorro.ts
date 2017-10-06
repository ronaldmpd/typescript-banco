import { Cuenta } from "./cuenta";

export class CajaDeAhorro implements Cuenta {
    _numero: number;
    _saldo: number;
    _moneda: string;

    protected _interes: number;

    constructor(numero: number, saldo: number, moneda: string, interes: number) {
        this._numero = numero;
        this._saldo = saldo;
        this._moneda = moneda;
        this._interes = interes;
    }

    get numero(): number {
        return this._numero;
    }
    set numero(numero: number) {
        this._numero = numero;
    }

    get saldo(): number {
        return this._saldo;
    }
    set saldo(saldo: number) {
        this._saldo = saldo;
    }

    get moneda(): string {
        return this._moneda;
    }
    set moneda(moneda: string) {
        this._moneda = moneda;
    }

    get interes(): number {
        return this._interes;
    }
    set interes(interes: number) {
        this._interes = interes;
    }

    aplicarIntereses(): void {
        console.log('Aplicando interes');
        //console.log(`Aplicando interese numero de cuenta: ${super.numero} saldo: ${super.saldo} moneda: ${super.moneda}.`);        
    }
}