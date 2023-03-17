/*Importación de clases*/
import { Cliente} from './cliente.js'
import { CuentaAhorro } from './cuenta-ahorro.js';
import { CuentaCorriente } from './cuenta-corriente.js';
import { Cuenta } from './cuenta.js';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('Maria','16979808','8989');

const cuentaDeLeonardo = new CuentaCorriente('Corriente',cliente, '1', '001', 0);
const cuentaDeMaria = new CuentaCorriente('Corriente',cliente2,'2','002', 0);

//se usa const proque estamos usando objetos
const CuentaAhorroLeonardo = new CuentaAhorro('Ahorro', cliente, '9985', '001', 0);


//cuenta corriente con comision
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(150);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retirarDeCuenta(70);
console.log(cuentaDeLeonardo.verSaldo());

//cuenta ahorro sin comision
console.log(CuentaAhorroLeonardo);
CuentaAhorroLeonardo.depositoEnCuenta(200);
console.log(CuentaAhorroLeonardo.verSaldo());
CuentaAhorroLeonardo.retirarDeCuenta(120);
console.log(CuentaAhorroLeonardo.verSaldo());
