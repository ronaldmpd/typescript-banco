export class Cuenta {
    protected _numero: number;
    protected _saldo: number;
    protected _moneda: string;
   

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
