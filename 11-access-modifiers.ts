interface AnimalInterface {
    name: string;
    color: string;
    /*correr();
    andar();
    comer();*/
}

/*
    public: can be accessed from anywhere
    private: can only be accessed from inside the class
    protected: can be accessed from inside the class and its subclasses
*/

class Animal implements AnimalInterface {
    private atributo;
    protected atributo1 = 'valor';


    constructor(public name: string, public color: string) {

    }

    private correr(){

    }

    andar(){
        this.correr()
    }

    comer(){
        this.atributo = 'valor';
      console.log('comer do animal')
    }
}

class Coelho extends Animal{
    tamanhoOrelha: number;

    comer(){
        console.log(this.atributo1);
        //super.correr(); // will throw an error
        super.comer();
        console.log('comer do coelho');
    }
}

let coelho:Coelho = new Coelho('Meu coelho','preto');
console.log(coelho.name);
console.log(coelho.color);
coelho.andar();
//coelho.correr();
coelho.comer();
// coelho.atributo1; // will throw an error