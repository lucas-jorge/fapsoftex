function compare(n){
    if (typeof n === "string"){
        return console.log("o tipo inserido foi uma string")
    }else if (n%2 === 0){
        return console.log("o numero inserido foi par");
    }else{
        return console.log("o numero inserido foi impar");
    }
    }

const teste1 = compare("teste");
const teste2 = compare(5);
const teste3 = compare(6);