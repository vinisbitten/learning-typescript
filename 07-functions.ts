// function declaration
let soma = function (x: number, y: number): number {
    return x + y;
};

// simple arrow function
let arrow = (name:string) => {
    return `Vinícius ${name}`
};

// smallest arrow function
let smallest = name => `Vinícius ${name}`;

// function with default parameters
let DefaultParameters = (first_name:string, last_name:string = 'Bittencourt') => `${first_name} ${last_name}`;

// function with optional parameters
let OptionalParameters = (first_name:string, last_name?:number) => `${first_name} ${last_name}`;

console.log("Function declaration: ", soma(2,2));
console.log("Simple arrow function: ",arrow('Bittencourt'));
console.log("Smallest arrow function: ", smallest('Bittencourt'));
console.log("Default parameter function: ", DefaultParameters('Vinícius'));
console.log("Optional parameter function: ", OptionalParameters('Vinícius'));

/*
    Simple arrow function syntax:
        const soma = (x: number, y: number): number => x + y;
    If the function has only one line, you can omit the curly braces and the return keyword

    More complex arrow function syntax:
        const soma = () => {
            // multiple lines
        };
    
    If the function has only one parameter, you can omit the parentheses
    If the function has only one parameter and it is an object, you must wrap the object in parentheses

    Even cleaner arrow function syntax:
        const soma = n => x + 1;
*/