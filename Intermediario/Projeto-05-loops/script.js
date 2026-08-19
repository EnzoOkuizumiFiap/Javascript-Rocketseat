// #F0365 2_Loop while

// WHILE (Enquanto): executa até que a condição seja VERDADEIRA

let execute = true;

while (execute) {
    let response = window.prompt("Deseja continuar? 1 (SIM) ou 2 (NÃO)");
    if (response === "2") {
        execute = false;
    }
}

console.log("Segue o fluxo...");





// #F0366 3_Loop infinito

let value = false; // Deixei como false para não causar loop infinito
while(value) {
    console.log("Executando while...");
}





// #F0367 4_Loop do while

// DO WHILE: Repete até que a condição especificada seja VERDADEIRA. No Entando, a instrução será executada pelo menos uma vez antes da condição ser verificada.

let value2 = 0;

do {
    value2++
    console.log(value2)
} while (value2 < 10);

console.log("Segue o fluxo...");





// #F0368 5_Loop for

/*
  FOR repete até que a condição seja FALSA

  - variável de controle
  - condição
  - incremento ou decremento da variável de controle
*/

for (step = 0; step < 10; step++) {
    console.log("Step é " + step);
}


// Exemplo Tabuada
console.log("\n Exemplo Tabuada do 7");

let sete = 7;
for (i = 0; i <= 10; i++) {
    console.log(`${sete}x${i} = ${sete*i}`);
}





// #F0369 6_For in

// For...in executa iterações a partir de um objeto e percorre as propriedades

let person = {
    name: "Enzo",
    surname: "Okuizumi",
    email: "enzo@gmail.com"
}


// Percorrendo as propriedades dentro (IN) do obj person
for (let property in person) {
    // Exibe o nome da propriedade
    console.log(property);

    // Exibe o conteúdo da propriedade
    console.log(person[property]);
}


// Fazendo com Array 
let students = ["Enzo", "João", "Amanda"];

for (let i in students) {
    //console.log(i);
    console.log(students[i]);
}





// #F0370 7_For of

// for...of itera sobre valores de um objeto iterável
let students2 = ["Rogrido", "Amanda", "John"];

// Pega 1 estudante dessa lista de estudantes (students2) e mostra o valor que está em cada posição (NÃO ÍNDICE)
for (let student of students2) {
    console.log(student);
}

// Não dá pra fazer com Obj, pois não é iterável! Mas podemos colocar ele dentro de um Array e rodar!
let user = [
    {
        name: "Enzo",
        email: "enzo@gmail.com"
    }
]

for (let value of user) {
    console.log(value.email);
}





// #F0371 8_Break

// Break encerra a execução da repetição ou switch para seguir para a instrução seguinte.

// Utilizando o break para finalizar uma repetição
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    
    console.log(i);
}





// #F0372 9_Continue

// Continue encerra (pula) a execução das instruções na iteração atual e continua a execução do loop com a próxima iteração

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Ele pulou o 5!! O continue volta para o For!! 
    }

    console.log(i);
}

