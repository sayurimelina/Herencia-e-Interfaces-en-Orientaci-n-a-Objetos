//encapzulacion 

export class Cuenta
{
    //atributos privados
    #cliente;
    #saldo;

    //atributos publicos: numero y agencia
    constructor(cliente, numero, agencia, saldo) {
        //this.tipo = tipo;
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }
    set setCliente(valor) {
        if (valor instanceof Cliente)
            this.#cliente = valor;
        
    }

    get getCliente(){
        return this.#cliente;
    } 

    //que va hacer esta cuenta metodos
    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        /* poner parametro tipo y dar parsametros
        if (this.tipo == 'Corriente')
            valor = valor * 1.05; // comision 105% = 5% de lo que retiro y se cobra a lo que me queda en la cuenta
        else if(this.tipo == 'Ahorro')
            valor = valor * 1.02;  // comision 2% del retiro
        */
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
    prueba() {
        console.log('metodo padrisimo en cuenta');
    }
}