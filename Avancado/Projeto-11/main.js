// #F0442 2_Conhecendo o ES Modules

// ES Modules ou ESM é o sistema de módulo do JS, ela define um formato para organizar e estruturar o código em módulos, permitindo a modularização e reutilização do código.






// #F0443 3_Criando os módulos
import { sum, multiply } from "./calc.js"; // Importando funções do arquivo calc.js

console.log("4 + 6 =", sum(4, 6));
console.log("4 * 6 =", multiply(4, 6));





// #F0444 4_Importando tudo
import * as calculo from "./calc.js"; // Precisamos definir isso calc para definir um nome

console.log("4 + 6 =", calculo.sum(4, 6));
console.log("4 * 6 =", calculo.multiply(4, 6));





// #F0445 5_Exportação padrão ou nomeada
import batata, { multiply2 } from "./calc2.js";

console.log("4 + 6 =", batata(4, 6));
console.log("4 * 6 =", multiply2(4, 6));





// #F0446 6_Renomeando as exportações
import { dividir } from "./calc2.js";

console.log("4 / 6 =", dividir(4, 6));





// #F0447 7_Renomeando as importações
import { multiply2 as m } from "./calc2.js";

console.log("4 * 6 =", m(4, 6));




// #F0448 8_Usando classes nos módulos
import { Calc } from "./calc3.js";

const calc = new Calc();

console.log("4 + 6 =", calc.sum3(4, 6));
console.log("4 * 6 =", calc.multiply3(4, 6));
console.log("Nome da calculadora:", calc.name);





// #F0449 1_Conhecendo o setTimeout()

// setTimeout() executa uma função após um intervalo de tempo especificado.

setTimeout(() => {
    console.log("Olá, tudo bem? setTimeout()");
}, 1000); // 1000 milissegundos = 1 segundo






// #F0450 2_Conhecendo o setInterval

// setInterval() executa uma função repetidamente após um intervalo de tempo especificado.
let value = 10;

const interval = setInterval(() => {
    console.log(value);
    value--;

    if (value === 0) {
        console.log("FELIZ ANO NOVO!!!");

        // Interrompe o intervalo de execuções.
        clearInterval(interval); 
    }

}, 1000);

