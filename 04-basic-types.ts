// For this module please use tsc and see the .js file generated
// Note that the .js file is not the same as the .ts file
// Principally the enum type that is not supported by JavaScript

// boolean
var myBool = false; //implicit

// myBool = 'Luiz Carlos'; will throw an error


//----- number -----//
let n = 10;
// let n: number = 10.50; //float will be accepted
// let n: number = 0xFA; //hexadecimal will be accepted

// n = true; will throw an error
// n = 'string'; will throw an error

//----- string -----//
let _name = 'Vinicius Bittencourt';
let name1 = 'Vinicius Bittencourt';

_name = `Student - ${name1}`;
console.log(_name);

//----- Array -----//
let arrayStrings: string[] = ["a", "b", "c"];
let arrayStrings1: Array<any> = ["a", "b", "c"];


//----- Enum -----//

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  // logs 404
  console.log(StatusCodes.NotFound);
  // logs 200
  console.log(StatusCodes.Success);


