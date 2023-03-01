const array = ["one", "two", "three", "four", "five", "six"];

let time = (new Date).getTime();
console.log(array[array.length - 1]);
console.log('Calculando el tamaño del array tomó', (new Date).getTime() - time, 'segundos');
time = (new Date).getTime();
console.log(array.at(-1));
console.log('Con el método at tomó', (new Date).getTime() - time, 'segundos');