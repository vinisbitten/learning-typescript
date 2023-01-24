// js basics - const variable

// Const improves performance because it allows the JavaScript engine to make certain assumptions about the variable.

// Const allows you to declare constants, which are block-scoped, much like variables defined using the let statement. The value of a constant cannot change through reassignment, and it can't be redeclared.

// The keyword const is a little misleading. It does not define a constant value. It defines a constant reference to a value.

const myNum = 2;
// myNum = 4; will throw an error

// using const with objects (can change the object properties)

const myObj = {
    name: 'Vinicius Bittencourt'
};

myObj.name = 'Student';

console.log(myNum);
console.log(myObj.name);