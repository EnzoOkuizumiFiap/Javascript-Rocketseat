// #F0421 4_Conhecendo o strict mode

// O strict mode (modo restrito): ativando esse modo. os erros que eram silenciosos passa a gerar excessões no JS.
"use strict";

function showMessage() {
    let personName = "Enzo Okuizumi";

    console.log("Olá,", personName);
}

showMessage();

class Student {
    get point() {
        return 7;
    }
}

let student = new Student();
//student.point = 10; // Erro: Cannot set property point of #<Student> which has only a getter - Pois o strict mode não permite setar propriedades que são somente leitura.

console.log(student.point); // 7


//delete window.document; // Erro: Cannot delete property 'document' of #<Window> which has only a getter - Pois o strict mode não permite deletar propriedades que são somente leitura.

// Erro: Duplicate parameter name not allowed in this context - Pois o strict mode não permite parâmetros duplicados em funções.
/*
function sum(a, a, c) {
    return a + a + c;
}

const result = sum(1, 3, 2); // 3 + 3 + 2 = 8

*/






// #F0422 5_Desestruturação de array

// destructuring assignment (atribuição via desestruturação) - É uma forma de extrair dados de arrays ou objetos em variáveis distintas.

const data = ["Enzo Okuizumi", "enzo@gmail.com"];

// Desestruturando conteúdo do array
const [username, email] = data; // Pegando a primeira posição do array e atribuindo a variável username e a segunda posição do array e atribuindo a variável email.

console.log(data); // ["Enzo Okuizumi", "enzo@gmail.com"]
console.log(username); // Enzo Okuizumi
console.log(email); // enzo@gmail.com


const fruits = ["Banana", "Maçã", "Laranja"];

// Desestruturar somente o primeiro
const [fruta_0] = fruits;
console.log(fruta_0);

const [banana, maça] = fruits;
console.log(banana, maça); // Banana Maçã

// Ignorando o primeiro na desestruração
const [_, apple] = fruits;
console.log(apple); // Maçã


// Ignorando o primeiro e segundo elemento do array
const [ , , laranja] = fruits; 
console.log(laranja); // Laranja





// #F0423 6_Desestruturação de objetos

// destructuring assignment (atribuição via desestruturação) - É uma forma de extrair dados de arrays ou objetos em variáveis distintas.

const product = { 
    description: "Teclado",
    price: 250
}

const {description, price} = product; // Pegando a propriedade description do objeto product e atribuindo a variável description e a propriedade price do objeto product e atribuindo a variável price.

console.log("Descrição:",description); // Teclado
console.log("Preço:",price); // 250



function newProduct({description, price}) { // Desestruturando o objeto passado como parâmetro da função newProduct.
    console.log("### Novo produto ###");
    console.log("Descrição:", description);
    console.log("Preço:", price);
}

// Chamando a função newProduct e passando um objeto como parâmetro.
newProduct({
    price: 150,
    description: "Mouse"
});





// #F0424 7_Conhecendo rest params

// Rest params {...} permite representar um número indefinido de argumentos como um array.

function values(a, ...rest) { // O parâmetro rest (ou args) deve ser o último parâmetro da função.
    console.log(a);

    console.log(rest); // Exibe o conteúdo do rest que é um array.
    console.log(...rest); // O operador spread (...) permite expandir um array em elementos individuais.
    console.log(rest.length); // Retorna o tamanho do array rest - 3 elementos
}

values(2, 1, 3, 4); // 2, [1, 3, 4] - O primeiro parâmetro é atribuído a variável a e os demais parâmetros são atribuídos ao array rest.





// #F0425 8_Conhecendo o spread

// spread (espalhar) permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos. (Simplicando: O operador spread (...) permite expandir um array em elementos individuais.)

const numbers = [1, 2, 3];
console.log(...numbers); // 1 2 3 - O operador spread (...) permite expandir um array em elementos individuais.


// Criando um array de objetos
const data2 = [
    {
        name: "Enzo Okuizumi",
        email: "enzo@gmail.com",
        avatar: "e.png",
    },
    {
        name: "João da Silva",
        email: "joao@gmail.com",
        avatar: "j.png"
    }
]
// Lembrete: [ ] - Array, { } - Objeto

console.log(data2); // Exibe o array de objetos data

// Utilizando o spread no array com objetos 
console.log(...data2); // Exibe os objetos do array data de forma individual, sem o array.

