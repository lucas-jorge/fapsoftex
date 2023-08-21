//achar numeros primos de 1  A 50.

function primoSim(numero) {
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
    if (primoSim(i)) {
        console.log(i);
    }
}
console.log('Curiosidade: 2 é o único número primo que é par!')