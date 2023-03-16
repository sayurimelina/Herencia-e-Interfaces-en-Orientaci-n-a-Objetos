export class CuentaAhorro 
{
    //atributos privados
    #cliente;
    #saldo;

    //atributos publicos: numero y agencia
    constructor(cliente, numero, agencia, saldo) {
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }
    
    //que va hacer esta cuenta metodos
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