// Declaring
class User {
  // Atributos
  name;
  // Métodos
  constructor(name) {
    this.name = name
    console.log(`Nuevo usuario: ${this.name}`)
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
  speak() {
    return 'Hello';
  }
};
// Instance
const newUser = new User('David');
console.log(newUser.greeting());