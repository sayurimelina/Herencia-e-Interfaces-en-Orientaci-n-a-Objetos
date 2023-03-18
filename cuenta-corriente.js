import { Cliente } from "./cliente.js";
import { Cuenta } from "./cuenta.js";

//haciendo extension - CUENTA CORRIENTE - CUENTA CON FUNCIONAMIENTO DE CUENTA DE AHORRO
export class CuentaCorriente extends Cuenta
{
    static cantidadCuentas = 0;

    constructor(cliente, numero ,agencia) {
        //lamamos al constructor padre de Cuenta porque extendimos y intentas tomar cosas pero no tiene todo entonces aplicamos 'super' es como ' this '
        super(cliente, numero, agencia, 0); //saldo= 0  para que inicie siempre en 0 ya no es necesario forzar en los otros contructores
        CuentaCorriente.cantidadCuentas++;
    }
    prueba() {
        super.prueba();
        console.log("metodos del hijo")
    }

}