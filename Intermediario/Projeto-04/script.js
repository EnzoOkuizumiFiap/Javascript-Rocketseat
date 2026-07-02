// #F0343 4_Criando um objeto
console.log("\n\x1b[1m F0343 4_Criando um objeto \x1b[0m");

/**
 * OBJETO 
 *   - Uma coleção de dados e/ou funcionalidades;
 *   - Podem ter propriedades e métodos;
*/

// Criando um objeto vazio.
const obj = {};
console.log(obj);
console.log(typeof obj);

// Cria um objeto com propriedades e métodos
// Chave: Valor
const user = {
    email: "enzo@gmail.com",
    age: 18,
    name: {
        first_name: "Enzo",
        surname: "Okuizumi",
    },
    address: {
        street: "Rua X",
        number: 23,
        city: "São Paulo",
        postal_code: "12345-123",
    },
    message: () => {
        console.log("Pão!");
    }
};

// Acessando propriedades e métodos usando a notação de Ponto. 
console.log(user.email);
console.log(user.address.city);
user.message(); // Executa o método do objeto!!


//Acessando propriedades e método usando notação de Colchetes.
console.log(user["email"]);
console.log(user["name"]["first_name"]);
user["message"]();





const user2 = {
    name: "Enzo",
    message: function() {
        console.log(`Olá ${user2.name}`);
        console.log(`Olá ${this.name}`); // Igual no Java o This, está referenciando ao name do objeto. Lembrete: NÃO funciona em Arrow Function!
    }
}

user2.message();





const product = {
    name: "Teclado",
    quantity: 100,
}

console.log("Valor Original: Nome: " + product.name + ", Quantidade: " + product.quantity);

// Alterando valores do Objeto
product.name = "Mouse"
product["quantity"] = 50

console.log("Valor Alterado: Nome: " + product.name + ", Quantidade: " + product.quantity);





/*
OPTIONAL CHAINING (?.) - Encadeamento opcional
Se a propriedade ou função chamada é nullish (null ou undefined), a expressão retorna undefined em vez de gerar um erro.

Útil ao explorar o conteúdo de um objeto quando não existe garantia da existência de determinadas propriedades obrigatórias.
*/

const user3 = {
    id: 1,
    name: "Enzo",
    /*
    address: {
        street: "Av. Brasil",
        city: "São Paulo",
        geo: {
            latitude: 47.8080,
            longitude: 17.5674,
        },
    },
    

    message: function() {
        console.log(`Olá, ${this.name}!`);
    }
    */
}

console.log(user3?.address?.street);

user3.message?.();






/* 

    OPERADOR DE COALESCÊNCIA NULA (??) 
    Operador lógica que retorna o seu operando do lado direito quando o seu operador do lado esquerdo
    é null ou undefined. Caso contrário, ele retorna o seu operando do lado esquerdo.

*/

let content = null; // Somente com null e undefined
console.log(content ?? "Conteúdo Padrão");

content = "Olá, Enzo!";
console.log(content ?? "Conteúdo Padrão");



const userPhoto = {
    name: "Enzo",
    avatar: undefined
}

console.log(userPhoto.avatar ?? "default.png");





// #F0349 10_O que é uma função construtora?
console.log("\n\x1b[1m F0349 10_O que é uma função construtora? \x1b[0m");

// Função que cria um objeto e retorna ele.
function createProduct(name) {
    const product = {}

    // Adicionando uma propriedade ao objeto
    product.name = name;
    
    // Adicionando um método ao objeto
    product.details = function() {
        console.log(`O nome do produto é ${this.name}`);
    }

    // Retornando o objeto criado
    return product;
}

// Criando um objeto usando a função construtora
const product1 = new createProduct("Teclado"); // O new cria um novo objeto utilizando a estrutura da função construtora
// Acessando as propriedades e métodos do objeto criado
console.log(product1.name);
product1.details();

// Criando outro objeto usando a função construtora
const product2 = new createProduct("Mouse");
console.log(product2.name);
product2.details();


console.log(product1 === product2); // false, pois são objetos diferentes na memória


// Exemplos de funções construtoras disponíeveis no próprio JavaScript
let myName = new String("Enzo");
console.log(myName);

let price = "40.6".replace(".", "");
console.log(price);

let date = new Date("2024-1-1");
console.log(date);



// Criando uma função construtora Person
function Person(name) {
    this.name = name;
    this.message = function() {
        console.log(`Olá, ${this.name}!`);
    }
}

const person1 = new Person("Enzo");
console.log(person1.name);
person1.message();

const person2 = new Person("João");
console.log(person2.name);
person2.message();





// #F0350 1_Texto Maiúsculo e Minúsculo
console.log("\n\x1b[1m F0350 1_Texto Maiúsculo e Minúsculo \x1b[0m");

let message = "Estou estudando os fundamentos do Javascript.";
console.log(message);

// Exibindo o texto em maiúsculo
console.log(message.toUpperCase());

// Exibindo o texto em minúsculo
console.log(message.toLowerCase());





// #F0351 2_Obtendo o comprimento de uma string
console.log("\n\x1b[1m F0351 2_Obtendo o comprimento de uma string \x1b[0m");

// Comprimento de uma string
console.log(message.length); // lenght é uma propriedade!! Não um método (método no final abre e fecha parênteses)


let password = "1234";

if (password.length < 6) {
    console.log("A senha deve ter ao menos 6 caracteres");
}

// Quantos digitos tem um número??
let value = 12345;

console.log(String(value).length); // A propriedade lenght não está disponível para Numbers, temos que converter para String e aí sim usar o lenght
console.log(value.toString().length); // Podemos usar toString() também





// #F0352 3_Substituindo e fatiando um texto
console.log("\n\x1b[1m F0352 3_Substituindo e fatiando um texto \x1b[0m");

// Substituindo parte de um texto
console.log(message.replace("os fundamentos do JavaScript", "Métodos de String"));

// Extraindo uma parte da String -> slice(start, end)
console.log(message.slice(6, 30));

// Extraindo uma parte da String de trás para frente
console.log(message.slice(-11));


// Removendo Espaços em branco no início e no final da String (não remove no meio da String) -> trim()
let textWithSpace = "   Texto de Exemplo    ";
console.log(textWithSpace.trim().length);





// #F0353 4_Completando uma string
console.log("\n\x1b[1m F0353 4_Completando uma string \x1b[0m");

// Exemplo Cartão de Crédito
const creditCard = "1234567812344928";
// console.log(creditCard.length);

// Pegado os 4 últimos Dígitos
const lastDigits = creditCard.slice(-4);
// console.log(lastDigits);

// Usando o padStart(), ele preenche a string do início 
const maskedNumber = lastDigits.padStart(creditCard.length, "X");
console.log(maskedNumber);

// Usando o padEnd(), ele preenche a string do início 
const number = "123";
console.log(number.padEnd(10, "#"));





// #F0354 5_Separando e unindo strings
console.log("\n\x1b[1m F0354 5_Separando e unindo strings \x1b[0m");

// Separar a String
let text = "Estudar, Aprender, Praticar";

let separate = text.split(",");
console.log(separate);

let message2 = "Estou aprendendo Javascript";
console.log(message2.split(" "));

// Unir a String
let joined = separate.join(" -");
console.log(joined);





// #F0355 6_Encontrando um conteúdo no texto
console.log("\n\x1b[1m F0355 6_Encontrando um conteúdo no texto \x1b[0m");

// Obtém a posição da palavra
console.log(message.indexOf("estudando"));
console.log(message.indexOf("javascript")); // Retorna -1, pois não encontrou!


// Verifica se existe palavra na String - includes() retorna True ou False
console.log(message.includes("Javascript"));
console.log(message.toLowerCase().includes("javascript"));

console.log(message.includes("Estou estudando os fundamentos"));





// #F0356 1_Aprendendo sobre arrays
console.log("\n\x1b[1m F0356 1_Aprendendo sobre arrays \x1b[0m");

// ASSUNTO IMPORTANTE!!

/* Array é uma coleção ordenada de valores. Onde cada item possui índice */





// #F0357 2_Criando um array com um construtor
console.log("\n\x1b[1m F0357 2_Criando um array com um construtor \x1b[0m");

const newArray = new Array();
console.log(newArray); // []
console.log(newArray.length); // 0
console.log(typeof newArray); // É um Object (????) Então tá bom, né...

// [] - Array
// {} - Object

// Cria o Array com 10 posições vazias
const available = new Array(10);
console.log(available); // Exibe 10 posições vazias desse Array, bem parecido com Java!!
console.log(available.length);





// #F0358 3_Criando e acessando um array
console.log("\n\x1b[1m F0358 3_Criando e acessando um array \x1b[0m");

// Criando o array
let fruits = ["Maça", "Banana", "Laranja", "Melancia"];
console.log(fruits);

// Quantidade de itens do Array
console.log(fruits.length);

// Acessa o item pelo índice
console.log(fruits[1]);

// Tentamos acessar um índice que não existe
console.log(fruits[7]); // undefined

// Como acessar a última posição do Array? Obtemos dinamicamente o último item
console.log(fruits[fruits.length - 1]);





// #F0359 4_Convertendo uma string para array
console.log("\n\x1b[1m F0359 4_Convertendo uma string para array \x1b[0m");

let fullName = "Enzo Okuizumi Miranda";
console.log(fullName);


// Cria um Array com os nomes separando pelo espaço
console.log(fullName.split(" ")); // [ 'Enzo', 'Okuizumi', 'Miranda' ]

// Cria um Array com as letras
console.log(Array.from(fullName)); // ['E', 'n', 'z', 'o', ' ', 'O', 'k', 'u', 'i', 'z', 'u', 'm', 'i', ' ', 'M', 'i', 'r', 'a', 'n', 'd', 'a']





// #F0360 5_Adicionando e removendo um item do array
console.log("\n\x1b[1m F0360 5_Adicionando e removendo um item do array \x1b[0m");

let users = []

// Add um item ao final do Array 
users.push("Enzo");
users.push("João");
users.push("Marcos");
console.log(users);

// Add um item ao início do Array
users.unshift("Ana");
console.log(users);


// Remover um item do Array

// Remove o último item do Array
users.pop();
console.log(users);

// Remove o primeiro item do Array
users.shift();
console.log(users);





// #F0361 6_Usando o índice
console.log("\n\x1b[1m F0361 6_Usando o índice \x1b[0m");

let frutas = ["Apple", "Watermelon", "Lemon", "Strawberry"];

// Encontra e retorna o índice do elemento no Array (E retorna -1 caso não encontre!)
let position = frutas.indexOf("Watermelon");
console.log(position);


// Usando o splice(start, quantos elementos quer remover?)
const spliceTest = frutas.splice(1, 2);
console.log(spliceTest);

// Remove um item um item pela posição do índice (1 é o número de itens para remover)
const removerLemon = frutas.splice(position, 1);
console.log(removerLemon);





// #F0362 7_Quais elementos o array aceita
console.log("\n\x1b[1m F0362 7_Quais elementos o array aceita \x1b[0m");

let meuArray = [
    "Um texto",
    10,
    true, 
    function() {
        console.log("Função dentro do Array")
    },
    {
        nome: "Enzo",
        sobrenome: "Okuizumi"
    },
]

// Texto
console.log(meuArray[0]);

// Número
console.log(meuArray[1]);

// Boolean
console.log(meuArray[2]);

// Função
meuArray[3]();

// Objeto
console.log(meuArray[4]);





// #F0363 8_Verificando se existe um conteúdo no array
console.log("\n\x1b[1m F0363 8_Verificando se existe um conteúdo no array \x1b[0m");

// Verifica se um item existe no Array - includes() é case-sensitive
console.log(fruits.includes("Maça"));

console.log(fruits.includes("Morango"));
