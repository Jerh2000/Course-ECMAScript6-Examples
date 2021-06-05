const data = {
    fronted: 'jairo',
    backend: 'jairo',
    designer: 'otro'
}

//Devolvemos una matriz de objetos, es decir un arreglo de objetos
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


//Object values

const datos = {
    fronted: 'jairo',
    backend: 'jairo',
    designer: 'otro'
}

//Devuelve en un objetos los datos de un arreglo
const values = Object.values(datos);
console.log(values);

//Paddings
const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,' ------'));