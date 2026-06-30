// Declarar uma variável sem valor.
var user;

console.log(user); // undefined

// Declarar uma variável com valor.
var email = "enzo@gmail.com";
console.log(email);

// Substituir o valor da variável.
email = "japa@gmail.com"
console.log(email);





// JS é case-sensitive, ou seja, diferencia letras maiúsculas de minúsculas.
var product = "Teclado Mecânico";
var Product = "Mouse Gamer";

console.log(product);
console.log(Product);




// Usando Let para declarar variáveis. É dinâmica, ou seja, pode ser reatribuída.
let username;

console.log(username); // undefined

let email2 = "enzo@gmail.com";
console.log(email2);

email2 = "japa@gmail.com";
console.log(email2);




// Usando Const para declarar variáveis. É estática, ou seja, não pode ser reatribuída.
const number = 42;
console.log(number);

/* Irá gerar um erro, pois o valor não pode ser alterado.
number = 55;
console.log(number); // TypeError: Assignment to constant variable.
*/






// Scope - Variáveis declaradas com var têm escopo global ou de função, enquanto let e const têm escopo de bloco.
// Hoisting - Variáveis declaradas com var são "içadas" (hoisted) para o topo do escopo, enquanto let e const não são "içadas".

console.log(user2); // undefined, pois a variável é "içada" (hoisted) para o topo do escopo, mas não é inicializada.
var user2 = "Enzo";


//Escopo Global
var email3 = "enzo@gmail.com";

{
    // Escopo de Bloco
    console.log(email3); // Acessível, pois var tem escopo global ou de função.
}

{
    // Var tem escopo Global
    var age = 19;

    let idade = 19; // Acessível apenas dentro deste bloco.
}

console.log(age); // Acessível, pois var tem escopo global ou de função.

//console.log(idade); // ReferenceError: idade is not defined, pois let tem escopo de bloco.


{
    //console.log(address); // ReferenceError: Cannot access 'address' before initialization, pois let tem escopo de bloco e não é "içada" (hoisted) como var.
    let address = "Rua X";

    console.log(address); // Rua X
}


let city = "São Paulo";

{
    console.log(city); // É possível acessar a variável city, pois let tem escopo de bloco e a variável é declarada antes do console.log.

    // Também podemos mudar o valor de address
    address = "Rua Y";
    console.log(address); // Rua Y
}




// Tipos Primitivos JS - string, number, boolean, null, undefined

// String 
let username2 = "Enzo";
console.log(typeof username2); // string
console.log("Uma string com aspas duplas");
console.log('Uma string com apóstrofo (aspas simples)');
console.log(`
    Uma string com template literals (crase)
    E também permite escrever 
    com múltiplas linhas.
`);


// Template Literals - Permite interpolar variáveis e expressões dentro de uma string usando a sintaxe ${variável ou expressão}.
let username42 = "Enzo";
let email42 = "enzo@gmail.com";
let mensagem = `O usuário ${username42} tem o email ${email42}!!`;

console.log(mensagem); // O usuário Enzo tem o email enzo@gmail.com


// Number
let numero = 5;
console.log(typeof numero); // number

let numeroReais = 5.5;
console.log(typeof numeroReais); // number

console.log(12.5 / username42); // NaN (Not a Number), pois não é possível dividir um número por uma string que não representa um número válido.


// Boolean
console.log(true); // true
console.log(false); // false

let isLoading = true;
console.log(typeof isLoading); // boolean
console.log(isLoading); // true


// Undefined e Null

let emptiness;
console.log("O valor é ", emptiness); // undefined, pois a variável foi declarada mas não foi inicializada.

let empty = null;
console.log("O valor é ", empty); // null, pois a variável foi declarada e inicializada com o valor null, que representa a ausência intencional de qualquer valor ou objeto.


/*
    Conversão de Tipos 

    - type casting ou type conversion é o processo de converter um valor de um tipo para outro. Em JavaScript, isso pode ser feito de forma explícita ou implícita.

    - Conversão Explícita: Ocorre quando o programador intencionalmente converte um valor de um tipo para outro usando funções ou métodos específicos, como Number(), String(), Boolean(), etc.
    - Conversão Implícita: Ocorre quando o JavaScript automaticamente converte um valor de um tipo para outro durante a execução do código, geralmente em operações que envolvem tipos diferentes, como concatenação de strings e números.

    - Coerção de Tipos: É um tipo específico de conversão implícita onde o JavaScript tenta converter um valor para um tipo específico, geralmente durante operações aritméticas ou de comparação.
*/

let value = "9";
console.log(typeof value); // string
console.log(typeof Number(value)); // number, pois a função Number() converte a string "9" para o número 9.

let Age = 18;
console.log(typeof Age.toString()); // string, pois o método toString() converte o número 18 para a string "18".
console.log(typeof String(Age)); // string, pois a função String() converte o número 18 para a string "18".

let opcao = 1;
console.log(typeof Boolean(opcao)); // boolean, pois a função Boolean() converte o número 1 para o valor booleano true, já que qualquer número diferente de zero é considerado verdadeiro em JavaScript.


// Coerção de Tipos - Ocorre quando o JavaScript tenta converter um valor para um tipo específico, geralmente durante operações aritméticas ou de comparação.

console.log("10" + 5); // "105", pois o operador + com uma string e um número resulta em concatenação de strings, convertendo o número 5 para a string "5".

console.log("5" - 2); // 3, pois o operador - força a conversão da string "5" para o número 5, resultando na operação 5 - 2.

// Tipos Não Primitivos JS - object, array, function

// ??? Simplesmente ele não abordou...




// Operadores Aritméticos: +, -, *, /, %, ** 

console.log("SOMA: ", 12 + 8); // 20

console.log("SUBTRAÇÃO: ", 12 - 8); // 4

console.log("MULTIPLICAÇÃO: ", 12 * 8); // 96

console.log("DIVISÃO: ", 12 / 8); // 1.5

console.log("MÓDULO: ", 12 % 8); // 4, pois o operador % retorna o resto da divisão de 12 por 8.

console.log("EXPONENCIAÇÃO: ", 12 ** 2); // 144, pois o operador ** eleva o número 12 à potência de 2, resultando em 12 * 12 = 144.



// Incremento e Decremento: ++, --

let numerao = 10;

//numerao = numero + 1;

numerao++; // Incremento, equivalente a numerao = numerao + 1
console.log(numerao); // 11

numerao--; // Decremento, equivalente a numerao = numerao - 1
console.log(numerao); // 10

console.log(numerao++); // 10, pois o operador de pós-incremento retorna o valor atual de numerao antes de incrementá-lo.
console.log(numerao); // 11, pois numerao foi incrementado após a linha anterior.

console.log(++numerao); // 12, pois o operador de pré-incremento incrementa numerao antes de retornar seu valor.

// Segue a mesma lógica para o operador de decremento (--), onde o valor é decrementado antes ou depois de ser retornado, dependendo se é pré-decremento ou pós-decremento.

// Incrementar mais de um valor
numerao += 5; // Equivalente a numerao = numerao + 5

console.log(numerao); // 17, pois numerao foi incrementado em 5, resultando em 12 + 5 = 17.

numerao -= 3; // Equivalente a numerao = numerao - 3

console.log(numerao); // 14, pois numerao foi decrementado em 3, resultando em 17 - 3 = 14.





// Grouping Operator (Ordem De Precedência) -> ()

let total = 2 + 3 * 4; // 14, pois a multiplicação tem precedência sobre a adição.

let total2 = (2 + 3) * 4; // 20, pois os parênteses alteram a ordem de precedência, fazendo com que a adição seja realizada antes da multiplicação.

let average = (9.5 + 7 + 5) / 3; // 7.16, pois os parênteses alteram a ordem de precedência, fazendo com que a adição seja realizada antes da divisão.


// Igual A e Diferente De


let one = 1;
let two = 2;

// == igual a 
console.log(one == two); // False

console.log(one == 1); // True

console.log(one == "1"); // True, pois o operador == realiza coerção de tipos, convertendo a string "1" para o número 1 antes de comparar os valores.

// === estritamente igual a
console.log(one === "1"); // False, pois o operador === não realiza coerção de tipos, comparando os valores e os tipos, resultando em false já que um é número e o outro é string.


// != diferente de

console.log(one != two); // true

console.log(one != 1); // false

console.log(one != "1"); // false, pois o operador != realiza coerção de tipos, convertendo a string "1" para o número 1 antes de comparar os valores, resultando em false já que ambos são considerados iguais após a coerção.

// === estritamente igual a
console.log(one !== "1"); // true, pois o operador !== não realiza coerção de tipos, comparando os valores e os tipos, resultando em true já que um é número e o outro é string.




// Maior, Menor e Igual

let balance = 500;
let payment = 120;

// > Maior que 
console.log(balance > payment); // true

// < Menor que 
console.log(balance < payment); // false

// >= Maior ou Igual que 
balance = 120;
console.log(balance >= payment); // true

// <= Menor ou Igual que
balance = 500;
console.log(balance <= payment); // false



// Operadores de Atribuição


value = 1; // Atribuição simples, onde o valor 1 é atribuído à variável value.
console.log(value); // 1

// Incremento
value += 2;

// Decremento
value -= 1;

// Multiplicação
value *= 3;

// Divisão
value /= 2;

// Potenciação
value **= 2;

// Módulo
value %= 2;



// Operadores Lógicos

// AND (E) && - Retorna true se ambos os operandos forem true.

let emailzao = true;
let passwordzao = true;

console.log(emailzao && passwordzao); // true, pois ambos os operandos são true.

passwordzao = false;

console.log(emailzao && passwordzao); // false, pois passwordzao é false e ambos não são verdadeiros.



// OR (OU) || - Retorna true se pelo menos um dos operandos for true.

console.log(emailzao || passwordzao); // true, pois emailzao é true e pelo menos um dos operandos é verdadeiro.

// Também pode usar AND e OR juntos, mas é importante lembrar da precedência dos operadores, onde o AND tem precedência sobre o OR.

let isAdmin = true;
console.log(passwordzao && emailzao || isAdmin); // true, pois passwordzao é false e isAdmin é true, então a expressão inteira é true.

// NOT (NÃO) ! - Retorna true se o operando for false e vice-versa.

console.log(!emailzao); // false, pois emailzao é true e o operador ! inverte o valor para false.




// Estrutura de Condição
let agezao = 16;

console.log(agezao >= 18 ? "Você pode dirigir" : "Você não pode dirigir"); // Você não pode dirigir

console.log(agezao < 18 ? "Você não pode dirigir" : "Você pode dirigir"); // Você não pode dirigir


// FALSY e TRUTHY

/*
    FALSY - São valores que são considerados falsos em um contexto booleano. Os valores falsy em JavaScript são: false, 0, -0, 0n (BigInt zero), "", null, undefined e NaN.

    TRUTHY - São valores que são considerados verdadeiros em um contexto booleano. Quase todos os valores em JavaScript são truthy, exceto os falsy mencionados acima. Por exemplo, strings não vazias, números diferentes de zero, objetos, arrays e funções são considerados truthy.

*/

console.log("### EXEMPLOS DE FALSY ###");

console.log(false ? "VERDADEIRO" : "FALSO"); // false
console.log(0 ? "VERDADEIRO" : "FALSO"); // false
console.log(-0 ? "VERDADEIRO" : "FALSO"); // false
console.log(0n ? "VERDADEIRO" : "FALSO"); // false
console.log("" ? "VERDADEIRO" : "FALSO"); // false
console.log(null ? "VERDADEIRO" : "FALSO"); // false
console.log(undefined ? "VERDADEIRO" : "FALSO"); // false
console.log(NaN ? "VERDADEIRO" : "FALSO"); // false




console.log("### EXEMPLOS DE TRUTHY ###");

console.log(true ? "VERDADEIRO" : "FALSO"); // true
console.log(1 ? "VERDADEIRO" : "FALSO"); //true
console.log(-1 ? "VERDADEIRO" : "FALSO"); // true 
console.log(0.1 ? "VERDADEIRO" : "FALSO"); // true
console.log("0" ? "VERDADEIRO" : "FALSO"); // true
console.log(" " ? "VERDADEIRO" : "FALSO"); // true
console.log("false" ? "VERDADEIRO" : "FALSO"); // true
console.log({} ? "VERDADEIRO" : "FALSO"); // true, pois um objeto vazio é considerado truthy.
console.log([] ? "VERDADEIRO" : "FALSO"); // true, pois um array vazio é considerado truthy.





// If (SE)

let hour = 11;

if (hour <= 12) {
    console.log("Bom dia!");
    console.log("Seja bem vindo!");
} 



// IF ELSE (SE...SENÃO)

let agezazao = 17;

if (agezazao < 18) {
    console.log("Você não pode dirigir");
} else {
    console.log("VocÊ pode dirigir!");
}



// IF ELSE IF (SE..SENÃO SE...)

let hourzao = 11;

/*
if (hourzao <= 12) {
    console.log("Bom dia");
} else if (hourzao > 18) {
    console.log("Boa tarde");
} else if (hourzao > 12) {
    console.log("Boa noite");
}
*/

if (hourzao <= 12) {
    console.log("Bom dia");
} else if (hourzao > 18 && hourzao <= 18) {
    console.log("Boa tarde");
} else {
    console.log("Boa noite");
}




// Switch Case
let option = 1;

switch (option) {
    case 1:
        console.log("Consultar pedido");
        console.log("Aguarde...");
        break;
    case 2: 
        console.log("Falar com atendente");
        break;
    case 3:
        console.log("Cancelar pedido");
        break;
    default:
        console.log("Você selecionou uma opção inválida");
}


// Tratamento de Exceção

try {
    // Tenta executar algo.
    console.log(result);
} catch(error) {
    // CAPTURA o erro para tratar.
    console.log("Erro: ", error);
} finally {
    console.log("Fim");
}

let result = 0;

try {
    if(result === 0) {
        throw new Error("O valor é igual a zero.");
    }
} catch (error) {
    console.log(error);
} finally {
    console.log("Fim")
}



// CRIANDO MINHA PRIMEIRA FUNÇÃO!!!

function message() {
    console.log("Hello, World");
}

message();
message();
message();


/*
    - Parâmetro: é a variável (escopo da função) que irá receber um valor em uma função
    - Argumentos: é o valor que é passado para a função.
*/ 

function message2(usuario) {
    console.log("Olá", usuario);
}

message2("enzo");
message2("Ana");



function sum (a, b) {
    console.log(`Soma entre ${a} + ${b} = ${a + b}`);
}

sum(5, 5);
sum(42, 20);
sum(12, 19);



// Definindo um valor (argumento) padrão
function joinText(text1, text2 = "", text3 = "") {
    console.log(text1, text2, text3);
}

joinText("Enzo", "Okuizumi", "Miranda");
joinText("Okuizumi", "Enzo", "Miranda");
joinText("Enzo"); // Vai ser undefined nos outros se não tiver um valor padrão / No caso, colocamos uma String vazia ""




// Retornando valores em uma função e exibindo 

function soma(a, b) {
    let result = a + b;
    return result;
}

let response = soma(7, 7);
console.log("Retornando valor de uma Função:",response);


console.log("Retornando o valor de uma Função de forma mais direta:",soma(5, 6));




// Escopo de Função (Hoisting)

showMessage("Olá, Enzo! Usando Hoisting");

// uma função é içada ao topo também!! Então conseguimos usar uma função antes mesmo dela ser declarada!!
function showMessage(message) {
    console.log(message);
    endLine();

    // Lembrete: O escopo dela é somente dentro dessa função
    function endLine() {
        console.log("\n--------- The End ---------");
    }
}

// Não existe nesse escopo;
// endLine();




// Comentários de Documentação - JSDoc

/**
 * Authenticates the user
 * @param {String} email user email.
 * @param {String} password more than 6 characters.
 * @returns {Number} user id.
 */
function signIn(email, password) {
    // Fluxo de autenticação do usuário 

    return 7;
}

signIn("enzo@gmail.com", "123@mudar");



// Função anônima (função que não possui nome)

const showMensagem = function() {
    return "Olá, Enzo!!"
}

const showMensagem2 = function(nome, mensagem) {
    return `Olá, ${nome}, a sua mensagem é ${mensagem}`
}

console.log(showMensagem2("Enzo", "Gosto de pão"));



// Arrow Function
const showMessage2 = () => {
    console.log("Olá!!");
}

console.log(showMessage);
showMessage2();

const showMessage3 = (username, email) => {
    console.log(`Olá ${username}. Seu email é ${email}`);
}

showMessage3("Enzo", "enzo@gmail.com");



// Callback Function -> é uma função passada para outra função como um argumento.

function execute(taskName, callback) {
    console.log("Executando a Tarefa", taskName);


    callback();
}

function callback() {
    console.log("Tarefa finalizada.");
}

// Passando uma funçao pronta (callback) como argumento para outra função
execute("Download do arquivo...", callback);


// Ou também podemos criar a função no próprio parâmetro - (Função Anônima) No caso, a função que criamos (callback) é executada também. Então cuidado!!
execute("Upload do arquivo...", function(){
    console.log("Função de callback com uma função anônima");
});


// Utilizando Arrow Function
execute("Excluindo arquivo...", () => {
    console.log("Arquivo Excluído!!");
});

// Simplificando Arrow Function
execute("Salvando arquivo...", () => console.log("Arquivo Salvo!"));

