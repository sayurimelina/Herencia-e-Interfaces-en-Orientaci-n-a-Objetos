import { Cliente } from "./cliente.js";

export class CuentaCorriente
{
    #cliente;
    numero;
    #saldo;
    agencia;

    static cantidadCuentas = 0;

    set setCliente(valor) {
        if (valor instanceof Cliente)
            this.#cliente = valor;
        
    }

    get getCliente(){
        return this.#cliente;
    } 

    constructor(cliente, numero ,agencia) {

        this.setCliente = cliente;
        this.#saldo = 0;
        this.numero = numero;
        this.agencia = agencia;
        CuentaCorriente.cantidadCuentas++;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino){
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);

    }
}