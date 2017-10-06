
import { Direccion } from "./direccion";
import { CajaDeAhorro } from "./caja-de-ahorro";
import { CuentaCorriente } from "./cuenta-corriente";

export class Cliente {
  protected _codigo: number;
  protected _nombre: string;
  protected _direccion: Direccion;
  protected _cajaDeAhorros: CajaDeAhorro[];
  protected _cuentaCorrientes: CuentaCorriente[];

  constructor(codigo: number, nombre: string) {
    this._codigo = codigo;
    this._nombre = nombre;
  }

  get codigo(): number {
    return this._codigo;
  }
  set codigo(codigo: number) {
    this._codigo = codigo;
  }

  get nombre(): string {
    return this._nombre;
  }
  set nombre(nombre: string) {
    this._nombre = nombre;
  }

  get direccion(): Direccion {
    return this._direccion;
  }
  set direccion(direccion: Direccion) {
    this._direccion = direccion;
  }

  get cajaDeAhorros(): CajaDeAhorro[] {
    return this._cajaDeAhorros;
  }
  set cajaDeAhorros(cajaDeAhorros: CajaDeAhorro[]) {
    this._cajaDeAhorros = cajaDeAhorros;
  }

  get cuentasCorrientes(): CuentaCorriente[] {
    return this._cuentaCorrientes;
  }
  set cuentasCorrientes(cuentasCorrientes: CuentaCorriente[]) {
    this._cuentaCorrientes = cuentasCorrientes;
  }

}
