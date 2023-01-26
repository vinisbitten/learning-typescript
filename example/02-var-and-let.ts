// js basics - var and let

// let allows you to declare variables by limiting their scope to the block, statement, or expression in which it is used.

function showWithVar(){
    var text = 'Vinicius Bittencourt';
    if(true){
        var text = 'texto';
    }
    console.log("Var: " + text);
}

function showWithLet(){
    let textLet = 'Vinicius Bittencourt';
    if(true){
        let textLet = 'texto';
    }
    console.log("Let: " + textLet);
}
showWithVar();
showWithLet();