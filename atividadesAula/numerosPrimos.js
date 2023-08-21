//achar numeros primos de 1  A 50.

function ePrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            return false;
        }
    }

    return true;
}

for (let i = 1; i <= 50; i++) {
    if (ePrimo(i)) {
        console.log(i);
    }
}