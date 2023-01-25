// create an interface 
interface AnimalInterface {
    name: string;
    color: string;
    correr();
    andar();
    comer();
}

// Animal implements AnimalInterface
class Animal implements AnimalInterface {
    constructor(public name: string, public color: string) {
    }

    correr(){

    }

    andar(){
        console.log('andar do animal')
    }

    comer(){
      console.log('comer do animal')
    }
}

// Coelho inherits from Animal
class Coelho extends Animal{
    // new property
    tamanhoOrelha: number;
    // overwriting comer()
    comer():void {
        console.log('coelho comeu cenoura');
    }
    // extending andar()
    andar() {
        super.andar();
        console.log('coelho andou');
    }
    // correr() - not implemented
}

let coelho:Coelho = new Coelho('Meu coelho','preto');
console.log(coelho.name);
console.log(coelho.color);
coelho.andar();
coelho.correr(); // wont write anything
coelho.comer()