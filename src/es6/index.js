function newFunction(name,age,country){
    var name = name || 'Jairo';
    var age = age || 20;
    var country = country || 'CO';
    console.log(name,age,country);
}

//es6
function newFunction2(name='Jairo',age=20,country='CO'){
    console.log(name,age,country);
}

newFunction2();
newFunction2('Andrea','22','MX');

//Templates literal
let hello = "Hola";
let world = "World";
let fraseEpica = hello + ' ' + world;
console.log(fraseEpica);
let fraseEpica2 = `${hello} ${world}`;
console.log(fraseEpica2);

//Multilenea
let lorem = "Lore fffnds dsfnk sfffsdkni  sfnsdnf sfnsdf ndsfn \n"
             + "otra frase epica que necesitamos";

//with es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica`;

console.log(lorem);
console.log(lorem2);


//Destructuracion de elementos

let person = {
   'name': 'Jairo',
   'age': 20,
   'country': 'CO'
};
console.log(person.name,person.age);

//with es6
let {name,age,country}=person;
console.log(name,age);

//Operador de propagacion
let team1 = ['Jairo','Julian','Ricardo'];
let team2 = ['Valeria','Yesica','Camila'];

let education = ['David',...team1,...team2];
console.log(education);


//Scope e variables let y var
{
    var global = "Global var";

}
{
    let globalLet = "Globa Let";
    console.log(globalLet);
}
console.log(global);


//CONST no permite cambiar el valor
const a = 'b';
a = 'a'; //No lo permite marca error no se puede asignar valor a una constante

//Objetos
let nombre = 'Jairo';
let edad = 20;

obj = {nombre: nombre, edad:edad};
//es6
obj2 = {nombre,edad};

console.log(obj2);

//Arrow functions

const nombres = [
    {nombre: 'Jairo',edad:20},
    {nombre: 'Pepo',edad:21}
];

let listaDeNombre = nombre.map(function(item){
    console.log(item.nombre);
});

let listaDeNombre2 = nombre.map(item => console.log(item.nombre));

const listaDeNombre3 = (nombre,edad)=>{

}

const listaDeNombre4 = nombre=>{

}

const square = num => num*num;

//Promesas
const helloPromise = ()=>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('Todo bien');
        }else{
            reject('Todo mal bro');
        }
    });
}

helloPromise()
.then(response=>console.log(response))
.catch(error => console.log(error));

//Clases

class calculadora{
    constructor(){
        this.valorA = 0;
        this.valorB = 0;
    }
    sumar(valorA,valorB){
        this.valorA = valorA;
        this.valorB = valorB;
        return this.valorA + this.valorB;
    }
}
const calc = new calculadora();
console.log(calc.sumar(2,2));

//import y export
import {hello} from './module';
console.log(hello());



//Funcion especial Generator

function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);