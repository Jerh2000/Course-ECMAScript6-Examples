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

//Async y Await


const helloWorld =()=>{
    return new Promise((resolve,reject)=>{
        (true)
           ? setTimeout(()=> resolve('Hello world'),3000)
        : reject(new Error('Test Error'))
    });
}

const helloAsync = async ()=>{
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () =>{
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
}

anotherFunction();