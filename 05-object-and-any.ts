//object
let obj = {
    first_name: 'Vinícius',
    last_name: 'Bittencourt'
};

// obj = "string"; // won't trigger an error in js

let obj1: Object = {
    category: "categoria 1",
    product: "produto 1",
};

// obj1 = 2; // will throw an error

console.log("Object 0: ", obj)
console.log("Object 1: ", obj1)

let variable: any = 4;

variable = {};

variable = "string";

variable = false;

let myArray:Array<any> = [2,"string",false,{name: 'Luiz Carlos'}];

/*
Declaring:
let myArray:any[] = [2,"string",false,{name: 'Luiz Carlos'}];

Equals declaring:
let myArray:any[] = [2,"string",false,{name: 'Luiz Carlos'}];
*/