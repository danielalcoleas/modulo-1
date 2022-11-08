/**
 *  Ejercicio 1
 */

//  Crea tu primer hola mundo por consola!

console.log('¡Hola mundo!');

console.log('Probando el log en JavaScript');

/**
 * Ejercicio 2
 */

// Crea una variable llamada nombre y asígnale tu nombre como valor.
//  Crea una variable llamada edad y asígnale tu edad como valor.
//  Crea una variable llamada mayorDeEdad y asígnale un valor booleano 
//  que indique si eres mayor de edad.

var nombre = 'Daniel';
var edad = 12;
var mayorDeEdad = true;

console.log(nombre + ' ' + edad + ' ' + mayorDeEdad);


// Crea una variable llamada direccion y asígnale un objeto con tu dirección.
// Crea una variable llamada coloresFavoritos y asígnale un array con 
// tus colores favoritos.
// Crea una variable llamada lenguajesFavoritos y asígnale un array con 
// tus lenguajes de programación favoritos.
// Crea una variable llamada mejorLenguaje y asígnale el primer 
// elemento del array lenguajesFavoritos.
// Crea una variable llamada peorLenguaje y asígnale el último elemento 
// del array lenguajesFavoritos.


var direccion = {
    calle: '25 de Mayo',
    numero: 1152,
    ciudad: 'Córdoba',
    provincia: 'Córdoba',
    pais: 'Argentina'
}

console.log(direccion);



var coloresFavoritos = ['PHP', 'JavaScript', 'Python'];

var lenguajesFavoritos = ['html', 'css', 'JavaScript'];
var mejorLenguaje = lenguajesFavoritos[0];
var peorLenguaje = lenguajesFavoritos[2];
var peorLenguajeDos = lenguajesFavoritos[lenguajesFavoritos.length - 1];

console.log(mejorLenguaje);
console.log(peorLenguaje);

/**
 *  - Crea dos variables, una llamada numero1 y otra llamada numero2.
    - Suma las dos variables y muestra el resultado por consola.
    -Crea otras variables de tipo number y realiza las operaciones de resta, 
    multiplicación y división. Mostrando el resultado por consola.
 */


var numero1 = 9;
var numero2 = 10;

console.log(numero1 + numero2);

var precio = 1000;
var costo = 400;
var ganancia = precio - costo;

console.log(ganancia);

var sueldoDiario = 200; 
var diasTrabajados = 12;
var sueldoAPagar = sueldoDiario * diasTrabajados;

console.log(sueldoAPagar);

var precioPorCaja = 600;
var cantidadDeProductos = 6;
var precioPorProducto= precioPorCaja / cantidadDeProductos;

console.log(precioPorProducto);

/*
 * Ejercicio 4
 */

//  - Crea una variable llamada saludo y asígnale un string que contenga hola.
//   -Comprueba con un if si el string saludo es igual a hola. 
//  - Y saca por consola un mensaje que diga "Ha saludado".

var saludo = 'Hola'

if(saludo === 'Hola') {
    console.log('Ha saludado');
}

/* Ejercicio 5 */
//  - Crea un array de 3 pokemons.
//  - Muestra por consola el nombre de cada pokemon.
//  - Bonus de investigación: ¿Cómo se puede mostrar el nombre 
//    de cada pokemon en una línea?
//  - Bonus extra: ¿Cómo se pueda hacer esto con bucles?

// 1 Bulbasaur.
// 2 Ivysaur.
// 3 Venusaur.

let nombrePokemones = ['Bulbasaur', 'Ivysaur', 'Venusaur'];

console.log(nombrePokemones[0]);
console.log(nombrePokemones[1]);
console.log(nombrePokemones[2]);

console.log(nombrePokemones[0] + ' ' + nombrePokemones[1] + ' ' + nombrePokemones[2]);


var nombrePokemonesDos = ['Bulbasaur', 'Ivysaur', 'Venusaur'];

for (var i = 0; i < nombrePokemonesDos.length; i++) {
    console.log(nombrePokemonesDos[i] + ', ');
}

/* Ejercicio 6 */

//  - Crea un array de 3 pokemons, el tipo de dato a usar será un objeto. 
//  Deberá contener nombre, tipoDePokemon.
//  - Crea una condición y si el tipo de pokemon es fuego muestra 
//  por consola el mensaje ¡Es un pokemon de fuego!.

// Picachú
// Charmander
// Bulbasaur




let pokemones = [ 
    {
        nombre: 'Pichachu',
        tipoDePokemon: 'No se',
    },
    {
        nombre: 'Charmander',
        tipoDePokemon: 'Fuego',
    },
    {
        nombre: 'Balbasaur',
        tipoDePokemon: 'No lo se',
    }
]

console.log(pokemones);

var queTipoDePokemonEs = pokemones[1].tipoDePokemon;

if (queTipoDePokemonEs === 'Fuego') {
    console.log('Es un Pokemon de fuego');
} else {
    console.log('No se que tipo de Pokemon es');
}


//Otra forma de hacerlo y mejor

const pokemons = [
    {
        nombre: 'squirtle',
        tipoDePokemon: 'agua'
    },
    {
        nombre: 'pikachu',
        tipoDePokemon: 'eléctrico'
    },
    {
        nombre: 'charmander',
        tipoDePokemon: 'fuego'
    }
];

pokemons.forEach(pokemon => {
    if (pokemon.tipoDePokemon === 'fuego') {
        console.log(`${pokemon.nombre} es un pokemon de fuego!`);
    }
});

pokemons.forEach(pokemon => {
    if (pokemon.tipoDePokemon === 'agua') {
        console.log(`${pokemon.nombre} es un pokemon de agua`);
    }
});