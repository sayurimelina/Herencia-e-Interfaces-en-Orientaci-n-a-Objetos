/*Importación de clases*/
import { Cliente} from './cliente.js'
import { Cuenta } from './cuenta.js';
/*
import { CuentaCorriente} from './cuenta-Corriente.js';
import { CuentaAhorro } from './cuenta-ahorro.js';
*/

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('Maria','16979808','8989');

const cuentaDeLeonardo = new Cuenta(cliente, '1', '001', 0);
const cuentaDeMaria = new Cuenta(cliente2,'2','002', 0);

//se usa const proque estamos usando objetos
const CuentaAhorroLeonardo = new Cuenta(cliente, '9985', '001', 0);



console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(150);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retirarDeCuenta(80);
console.log(cuentaDeLeonardo.verSaldo());

console.log(CuentaAhorroLeonardo);
