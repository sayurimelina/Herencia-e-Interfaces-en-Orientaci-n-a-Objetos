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

## 2. video

## 3. Herencia

## 4. Clases abstractas

## 5. Sistema interno

## 6. Interfaces y Duck Type
