// Asíncrono
async function* anotherGenerator1() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

const other1 = anotherGenerator1();
other1.next()
  .then(response => console.log(response.value));
other1.next()
  .then(response => console.log(response.value));
other1.next()
  .then(response => console.log(response.value));
console.log('Sentencia síncrona')

// Síncrono
function* anotherGenerator2() {
  yield Promise.resolve(1);
  yield Promise.resolve(2);
  yield Promise.resolve(3);
}

const other2 = anotherGenerator2();
other2.next().value
  .then(response => console.log(response));
other2.next().value
  .then(response => console.log(response));
other2.next().value
  .then(response => console.log(response));
console.log('Sentencia síncrona')

// For asíncrono
async function arrayOfNames(array) {
  for await (let value of array) {
    console.log(value);
  }
}
const names = arrayOfNames(['Oscar', 'David', 'Ana', 'Pepe']);
console.log('Sentencia síncrona');