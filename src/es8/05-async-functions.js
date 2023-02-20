const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Luego de esperar 2 segundos'), 2000)
      : reject(new Error('Error!'))
  })
}

const anotherFn = async() => {
  const something = await fnAsync();
  console.log(something);
  console.log('Hello!');
}

console.log('Antes');
anotherFn();
console.log('Después')

// Practica
const countriesList = (countrie) => {
  const countries = {
    panama: "Ciudad de panamá",
    venezuela: "Caracas",
    argentina: "Buenos Aires",
    colombia: "Bogotá",
    españa: "madrid",
    italia: "roma",
    china:"Pekín",
    rusia:"moscú"
  };

  return new Promise( (res, rej) => {
      setTimeout(() => {
          if (Object.keys(countries).includes(countrie))  {
            for (const iterator of Object.entries(countries)) {
              if (iterator[0] == countrie) {
                res(`La capital de ${countrie} es ${iterator[1]}`);
              }
            }
          } else {
            rej((`La capital de ${countrie} no se encuentra en esta lista`));
          }
      }, 3000)
  })
}

const getCapitalCountries = async () => {
  console.log("Cargando...")
  await countriesList("bolivia")
    .then( res => console.log(res) )
}

getCapitalCountries()
  .catch(rej => console.log(rej));