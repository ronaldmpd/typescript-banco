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

import { Direccion,  Cliente, Cuenta, CajaDeAhorro } from "./model/banco/banco-module"; 

let direccion: Direccion = new Direccion('Bol', 'Cbba', 'Calle A');
let cliente : Cliente = new Cliente(1,'cuentaA');
cliente.direccion = direccion;
console.log('direccion', direccion);
console.log('cliente', cliente);

let cajaDeAhorroBs : CajaDeAhorro = new CajaDeAhorro(1000, 200, 'Bs');
let cajaDeAhorroDolar : CajaDeAhorro = new CajaDeAhorro(1000, 200, 'Dolares');

let cajaDeAhorros : CajaDeAhorro [] = [];
cajaDeAhorros.push(cajaDeAhorroBs);
cajaDeAhorros.push(cajaDeAhorroDolar);
cliente.cajaDeAhorros = cajaDeAhorros;
console.log('cajaDeAhorros', cajaDeAhorros);
console.log('************* Cliente*****************');
console.log('cliente', cliente);