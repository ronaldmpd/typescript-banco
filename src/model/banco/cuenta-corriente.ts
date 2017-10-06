import { Cuenta } from "./cuenta";

export class CuentaCorriente implements Cuenta {
    _numero: number;
    _saldo: number;
    _moneda: string;

    constructor(numero: number, saldo: number, moneda: string) {
        this._numero = numero;
        this._saldo = saldo;
        this._moneda = moneda;        
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
        
}