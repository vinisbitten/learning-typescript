let myName: any = "Vinícius Bittencourt";

let count = (<string>myName).length;

/*
Declaring:
let count = (<string>myName).length;

Equals declaring:
let count = (myName as string).length;
*/

let obj = {
    name: 'Vinícius Bittencourt'
};

/*
    obj.texto = 'Student';
        would throw an error
    because the object doesn't have the property "texto"
    but since we are converting to type, we can add any property
*/

(<any>obj).texto = 'Student';

/*
Declaring:
(<any>obj).texto = 'Student';

Equals declaring:
(obj as any).texto = 'Student';
*/

console.log(obj);

let num = 2;

// adding "" will convert the number to string
let numString = num + "";

console.log(typeof numString);

let stringNum = "-234";

// adding + before the variable will convert the string to number
let num2 = +stringNum;

console.log(typeof num2);
console.log(num2);