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




/* MÉTODOS DE ARRAY EM JAVASCRIPT
    
    Métodos são funções associadas a objetos que permitem realizar ações específicas.
    No caso dos arrays, esses métodos servem para manipular, transformar ou acessar seus elementos.
    
    Alguns dos métodos mais usados são:

    - map(): cria um novo array aplicando uma função a cada elemento.
    - filter(): retorna um novo array apenas com os elementos que atendem a uma condição.
    - find(): retorna o primeiro elemento que satisfaz uma condição.
    - findIndex(): retorna o índice do primeiro elemento que satisfaz uma condição.
    - every(): verifica se todos os elementos atendem a uma condição (retorna true/false).
    - some(): verifica se pelo menos um elemento atende a uma condição (retorna true/false).
    - reduce(): reduz o array a um único valor, acumulando os resultados de uma função.
*/

// #F0427 2_Método map()

// Método map() chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada. E no final, devolve o novo array.
const products = ["Teclado", "Mouse", "Monitor"];

// Percorrendo itens do array - para cada item que existe no array, ele executa a função
products.map((product) => {
    console.log(product);
});

// Sintaxe Reduzida
products.map((product) => console.log(product));


// Utilizando o novo objeto retornado
const formatted = products.map((product) => {
    //let CaixaAlta = product.toUpperCase();
    
    return {
        id: Math.random().toFixed(2),
        description: product,
        CaixaAlta: product.toUpperCase(),
    }
});

console.log(formatted);





// #F0428 3_Método filter()

// Método filter() cria um novo array com todos os elementos que passaram na condição

const words = ["Javascript", "HTML", "CSS", "Web"];

// Filtrando paalvras que tenham mais do que 3 letras
const result = words.filter((word) => word.length > 3);
console.log(result);

// Array de Objetos - Relembrando: [ ] - Array, { } - Objeto
const products2 = [
    {description: "Teclado", price: 150, promotion: true},
    {description: "Mouse", price: 70, promotion: false},
    {description: "Monitor", price: 900, promotion: true},
]

// Exemplo de um filtro de produtos na promoção
const promotion = products2.filter((product) => product.promotion === true);
const priceVerification = products2.filter((product) => product.price < 100);
console.log(promotion);
console.log(priceVerification);





// #F0429 4_Método findIndex()

// Método findIndex() retorna o índice no array do primeiro elemento que satisfazer a condição. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.

const values2 = [4, 6, 8, 12];

// Obtendo o primeiro índice do elemento que o valor é maior do que 4
const index = values2.findIndex((value) => value > 4);
console.log(index);
console.log(values2[index]);

// Exemplo quando não encontra
console.log(values2.findIndex((values2) => values2 > 12));





// #F0430 5_Método find()

// Método find() retorna o valor do primeiro elemento do array que satisfizer a condição. Caso contrário, undefnied é retornado.

const values3 = [5, 12, 8, 130, 44];

// Retorna o primeiro elemento que valor é maior que 10
const found = values3.find((value) => value > 10); 
console.log(found);


// Exemplo com objetos 
const fruits2 = [
    {name: "apple", quantity: 23},
    {name: "banana", quantity: 25},
    {name: "orange", quantity: 52},
]

const result2 = fruits2.find((fruit) => fruit.name === "banana");
console.log(result2);

/*
    Por que temos que fazer isso .find((paramêtro) => { corpo da função }) ??
    fruits2.find((fruit) => fruit.name === "banana"); <- Callback, que é uma função passada como parâmetro para outra função.
    
    (Em métodos de array, o próprio método chama essa função para cada item e usa o retorno para decidir o que fazer.)
    Aqui, o find (Ele percorre todo o array) chama essa arrow function para cada item e usa o retorno true/false para decidir se encontrou o elemento.
*/





// #F0431 6_Método every()

// Método every() testa se TODOS os elementos do array passam na condição e retorna um valor Boolean.


// Exemplo de array de idades
const ages = [15, 30, 39, 29];

// Verificamos se todas as idades são maiores ou igual a 18
const result3 = ages.every((age) => age >= 18); // () => Usa callback
console.log(result3);





// #F0432 7_Método some()

// Método some() testa se ao menos UM dos elementos no array passa na condição e retorna um valor true ou false


// Exemplo de array de idades
const result4 = ages.some((age) => age < 18);
console.log(result4);





// #F0433 8_Método reduce()


/*
    Método reduce() é utilizado para reduzir um array a um único valor

    Parâmetros:
    - Array original (values)
    - Acumulator (acumulador) -> Guardando o valor atual
    - Valor da iteração (currentValue)
    - Valor Inicial (0)
    - Index (index da iteração atual - opcional) 
*/

const values4 = [1, 2, 3, 4, 5];

const sum = values4.reduce((accumulator, currentValue, index) => {
    console.log("INDEX:", index);
    console.log("ACUMULADOR:", accumulator);
    console.log("VALOR ATUAL:", currentValue);

    console.log(`SOMA ${accumulator} + ${currentValue}:`, accumulator + currentValue);
    console.log("=====================================");

    return accumulator + currentValue;
}, 10) // <- Valor inicial (defini 10 para mostrar que é o accumulator que guarda o valor inicial e faz as operações, currentValue pega os valores do array)

// Resumindo, o reduce() vai percorrer o array values4 e para cada elemento, ele vai somar o valor do acumulador com o valor atual (currentValue) e retornar o resultado da soma. 
// E no final, colocamos isso em uma variável (sum) que vai retornar o valor final da soma de todos os elementos do array.
console.log("RESULTADO DA SOMA FINAL: " + sum);

