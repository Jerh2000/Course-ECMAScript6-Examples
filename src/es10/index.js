let array = [1,2,3,[1,2,3,[1,2,3]]];
console.log(array.flat(2));

let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value =>[value,value*2]));

let hello = '                         hello World';
console.log(hello);
console.log(hello.trimStart());

let hello2 = 'hello World                       ';
console.log(hello2);
console.log(hello2.trimEnd());


try{

}catch{
    error;
}

//Devolver un objeto de un arreglo
let entries = [["nombre","Jairo"],["edad",20]];
console.log(Object.fromEntries(entries));

//Objeto de tipo simbolo

let mySimbol = `My symbol`;
let symbol = Symbol(mySimbol);
console.log(symbol.description);