//digite alguns exemplos de frases palíndromas e não palíndromas no console do navegador.

//função que retorna se a frase é palindroma ou não com true ou false no console.
 function palindromo(frase) {
     if (frase.length <= 1) {
         return true;
     }
     if (frase[0] !== frase[frase.length - 1]) {
         return false;
     }
     return palindromo(frase.slice(1, frase.length - 1));
}
console.log(palindromo("arara"));
console.log(palindromo("desenvolvimento"));
console.log(palindromo("reviver"));
console.log(palindromo("radar"));
console.log(palindromo("reter"));
console.log(palindromo("comida"));
console.log(palindromo("torre"));
console.log(palindromo("ana"));
console.log(palindromo("osso"));
console.log(palindromo("ovo"));