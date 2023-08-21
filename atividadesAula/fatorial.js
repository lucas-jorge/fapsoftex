//calcular fatorial de 6,5 e 4. Depois imprimir o resultado da multiplicação.
function fatorial(numbero) {
    if (numbero === 0) {
        return 1;
    }
    
    let resultado = 1;
    for (let i = numbero; i > 0; i--) {
        resultado *= i;
    }
    
    return resultado;
}
//decremento de 6 a 4.
for (let i = 6; i >= 4; i--) {
    console.log(fatorial(i));
}
//resultado da multiplicação dos fatoriais.
let resultado = fatorial(6) * fatorial(5) * fatorial(4);
console.log(`O produto dos fatoriais de 4 a 6 é ${resultado}`);