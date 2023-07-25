let qntRodas = 2;
let peso = 1000;
let numPassag = 2;

if (qntRodas >= 2 || qntRodas <= 3) {
  console.log('Sua habilitação é A');
}
if (qntRodas == 4 && numPassag <= 8 && peso <= 3500) {
  console.log('Sua habilitação é B');
}
if (qntRodas >= 4 && peso >= 3500 && peso <= 6000) {
  console.log('Sua habilitação é C');
}
if (qntRodas >= 4 && numPassag > 8) {
  console.log('Sua habilitação é D');
}
if (qntRodas >= 4 && peso > 6000) {
  console.log('Sua habilitação é E');
}