import { Cliente } from "./cliente.js";
import { Cuenta } from "./cuenta.js";

//haciendo extension - CUENTA CORRIENTE CUENTA CON FUNCIONAMIENTO DE CUENTA DE AHORRO
export class CuentaCorriente extends Cuenta
{
    static cantidadCuentas = 0;

    constructor(cliente, numero ,agencia) {
        CuentaCorriente.cantidadCuentas++;
    }

}