/*
Module animal
//import { Animal } from "./model/animal/animal"; 
//import { Gato } from "./model/animal/gato"; 
//import { Guepardo } from "./model/animal/guepardo"; 
import { Animal, Gato, Guepardo } from "./model/animal/animal-module"; 

import { sayHello } from "./model/animal/funtions"; 

let gato: Animal = new Gato('Misifu');
let guepardo: Guepardo = new Guepardo('Corredor');

gato.mover(2);
guepardo.mover();

gato.nombre = 'to';
gato.mover();
console.log("gato.nombre: " + gato.nombre);

console.log('sayHello:' + sayHello());
*/
console.log('Modulo BANCO');

import { Direccion,  Cliente, CajaDeAhorro, CuentaCorriente } from "./model/banco/banco-module"; 

let direccion: Direccion = new Direccion('Bol', 'Cbba', 'Calle A');
let cliente : Cliente = new Cliente(1,'cuentaA');
cliente.direccion = direccion;
//console.log('direccion', direccion);
//console.log('cliente', cliente);

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