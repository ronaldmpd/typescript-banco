console.log('Modulo BANCO');

import { Direccion,  Cliente, CajaDeAhorro, CuentaCorriente } from "./model/banco/banco-module"; 

let direccion: Direccion = new Direccion('Bol', 'Cbba', 'Calle A');
let cliente : Cliente = new Cliente(1,'cuentaA');
cliente.direccion = direccion;

let cajaDeAhorroBs : CajaDeAhorro = new CajaDeAhorro(1000, 220000, 'Bs', 3.5);
let cajaDeAhorroDolar : CajaDeAhorro = new CajaDeAhorro(1001, 5000, 'Dolares', 2.5);
let cajaDeAhorros : CajaDeAhorro [] = [];
cajaDeAhorros.push(cajaDeAhorroBs);
cajaDeAhorros.push(cajaDeAhorroDolar);
cliente.cajaDeAhorros = cajaDeAhorros;

let cuentaCorrienteBs : CuentaCorriente = new CuentaCorriente(2000, 40000,'Bs');
let cuentaCorrienteDolar : CuentaCorriente = new CuentaCorriente(2001, 30000,'Dolares');
let cuentaCorrientes : CuentaCorriente [] = [];
cuentaCorrientes.push(cuentaCorrienteBs);
cuentaCorrientes.push(cuentaCorrienteDolar);
cliente.cuentasCorrientes = cuentaCorrientes;

console.log('************* Cliente *****************');
console.log('cliente', cliente);