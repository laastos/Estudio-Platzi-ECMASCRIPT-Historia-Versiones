// Declaring
class User {
  // Atributos
  name;
  age;

  // Métodos
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(`Nuevo usuario: ${this.name}`);
  }
  #speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
};
// Instance
const bebeloper = new User('David', 15);
console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 20);
console.log(bebeloper.greeting());