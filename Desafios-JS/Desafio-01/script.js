// Desafio 01
// Criando Variáveis - criei nome como sendo const, pois nunca muda, idade fui de let, pois muda!!
const nome = "Ana";
let idade = "20";

console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

if (idade > 18) {
    console.log(`Você pode dirigir ${nome}! Você é maior de idade`);
} else {
    console.log(`Você não pode dirigir ${nome}! Você é menor de idade!`);
}
console.log("\n");




// Desafio 02 
let notas = [10, 8, 8];

const somaTotal = notas.reduce((acc, nota) => acc + nota, 0);
media = somaTotal / notas.length;

if (media > 7) {
    console.log("Parabéns!! Sua Nota é maior que 8, você é um cabaço inteligente!");
} else if (media >= 6 || media <= 7) {
    console.log("CABAÇOOOOO!! Sua nota é bem mediana! Vai estudar Cabação!");
} else if (media <= 5 || media >= 0) {
    console.log("DESISTA DOS SEUS SONHOS IMEDIATAMENTE!");
} else {
    console.log("Parabéns!! Você transcendeu os cálculos e conseguiu ter um resultados INESPERADO!");
}
console.log("\n");





// Desafio 03
const prompt = require("prompt-sync")();
let numero = Number(prompt("Informe um número: "));

for (let index = 0; index <= numero; index++) {
    console.log(`${numero} x ${index}: ${numero * index}`);
}

