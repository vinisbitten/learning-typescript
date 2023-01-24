
/*
    Basic function syntax:
        function name (param1: type, param2: type): return_type {}
    Use const to declare a function that will not be changed for performance reasons
*/
const soma = function (x: number, y: number): number {
    return x + y;
};

// assign a variable with the function return type
let num: number = soma(2, 3);

/*
    Simple arrow function syntax:
        const soma = (x: number, y: number): number => x + y;
    If the function has only one line, you can omit the curly braces and the return keyword

    More complex arrow function syntax:
        const soma () => {
            
        }
*/
let funcao = (name:string) => {

    return `Luiz Carlos ${name}`


};

let funcao1 = name => `Luiz Carlos ${name}`;


let funcaoDefaultParameters = (first_name:string, last_name:string = 'Diniz') => {

};

funcaoDefaultParameters('Luiz');

let funcaoOptionalParameters = (first_name:string, last_name?:number) => {
    console.log(last_name);
}

funcaoOptionalParameters('Luiz');
