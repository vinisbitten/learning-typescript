// Class in typescript is realy similar to class in java
class Animal {
    //name: string;
    //color: string;
    constructor(public name:string, public color:string){}
    sayHello = () => `Hello, I'm ${this.name} and I'm ${this.color}`; 
}
let myAnimal: Animal = new Animal('Coelho','branco');

console.log("My animal name: ", myAnimal.name);
console.log("My aninmel color: ", myAnimal.color);
console.log("My animal say hello: ", myAnimal.sayHello());