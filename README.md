# JavaScript: Herencia e Interfaces en Orientación a Objetos

Realice este curso para JavaScript y:
* Profundice tu conocimiento ne la orientación a objetos
* Descubra qué es "DuckType"
* Comprenda cuándo y cómo utilizar la herencia en sus proyectos
* Conozca buenas prácticas de programación
* Vea el código JavaScript moderno que puedes usar en tus proyectos

[REPOSIDTORIO BASE](https://github.com/alura-es-cursos/1785-js-herencia-polimorfismo/tree/ProyectoI)

## 1. Conociendo el problema del cliente Ver el primer. 

### DEFINIENDO NUESTRO PROYECTO
- Recordando el proyecto anterior Banco Popular
- Agregando mejoras
    - clase cuentas de ahorros
        constructor de la clase. parametros
        inicializando los atributos en el contructor
        [link -]()

### ANALIZANDO CODIGO REPETIDO
Luis está escribiendo un código para su cliente y terminó creando 2 clases para representar alumnos y profesores del sistema de la escuela.

Su código está de esta forma:

        class Alumno{
            constructor(nombre, dni, edad) {
                    this.nombre = nombre;
                    this.dni = dni;
                    this.edad = edad;
            }
        }

        class Profesor{
            constructor(nombre, dni, edad) {
                    this.nombre = nombre;
                    this.dni = dni;
                    this.edad = edad;
            }
        }


Ahora la escuela desea agregar el número de registro fiscal (rut). Verificando el código, ¿qué problema va a tener Luis al realizar esa solicitud?

*Luis deberá agregar el atributo en cada una de las clases, repitiendo el proceso, lo cual deberá hacer cada vez que agregue un nuevo atributo.*

>Al tener código duplicado, el trabajo de agregar o mantener el código se duplica.

Lo que aprendimos en esta aula:

Recordamos los conceptos de la Orientación a objetos: Clases, métodos y atributos/propiedades
Buenas prácticas a la hora de declarar atributos.
Declarar los atributos privados en la medida de lo posible
Problemas relacionados a la repetición de código

## 2. Herencia

### IDENTIFICANDO POR TIPO DE CLASE 
- especializacion de las clases | implementacio de condicion de comision
- definiendo un tipo para l clase Cuenta

agregamos atributo tipo al contructor de Cuenta

### HERENCIA 
- extendiendo la clase cuenta (se hereda con extends)
- extendiendo la palabra reservadasa 'super' [llamar cosas del padre]

Cuál es la sintaxis de Javascript para poder crear una clase que herede de otra clase?

Tu código está de esta forma:

>class Autobus extends Vehiculo
 *De esta forma la clase Autobus hereda las propiedades y métodos de la clase Vehiculo*

### ACCEDIENDO Y SOBREESCRIBIENDO / Clase Padre
llamando al padre adquiero pero si no lo llamo puedo sobreescribir en el padre. o bien puedo agregar le cosas , o osbreescribir lo que desee y mantener lo del padre

Pedro comenzó a probar lo que aprendió de herencia en Orientación a Objetos y escribió el siguiente código:

class Empleado{
    getBonificacion(){
        return 100;
    }
}

class Director extends Empleado{
    getBonificacion(){
        return 200;
    }
}

class DirectorTI extends Director{

}

Al hacer su código, ejecutó el método getBonificación y recibió como respuesta 200, cuando lo esperado por él era recibir 100 como respuesta, pues el Director de TI debe recibir ese valor de bonificación. ¿Por qué retornó 200?

>Eso sucede porque la clase DirectorTI no sobreescribe el método getBonificacion.

*Si el sobreescribiera el método getBonificacion en la clase DirectorTI, retornando 100, funcionará como él espera.*
>Eso sucede porque la clase DirectorTI herera de la clase Director y esta última está sobreescribiendo el método getBonificacion de la clase Empleado.

*Acá vemos una clase que hereda de otra clase que ya heredó atributos y métodos de otra clase. Es decir la herencia es posible definirla en múltiples niveles. Debemos tener cuidado pues podemos llegar a generar un árbol de herencia complejo que al final nos puede generar problemas de mantenimiento.*

### METODOS PRIV Y PROTEGIDOS
- creando metodo privado
- separando la logica de negocio por clase

no puedo acceder a metodos privados del padre, entonces puedo 'combinar' metodos del padre y crear msis propios metodos en el hijo
## 3. Clases abstractas

## 4. Sistema interno

## 5. Interfaces y Duck Type
