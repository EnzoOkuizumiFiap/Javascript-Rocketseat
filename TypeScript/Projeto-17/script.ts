// #F0520 2_O Que é o TypeScript

/*
    JavaScript é uma linguagem NÃO-TIPADA. Isto é, podemos criar uma variável para receber conteúdo de tipos diferentes.

    Por exemplo, podemos criar funções que esperam números e chamá-las enviando uma string ou vice-versa.

    É uma característica bastante flexível e que tornou o JS bastante popular. Mas, para o crescimento consistente da aplicação é importante definir regra.
    
    Aqui entra o Typescript! VANTAGENS:

    - Feeback mais rápido de erros
    - Antecipa erros que seriam visto em execução
    - Ajuda a manter o código consistente
    - Ajuda no trabalho em times
    - Processo de refatoração mais fácil
    - Recurso de Autocomplete
    - Pode adotar gradualmente em uma base de código
*/





// #F0522 4_Verificação de tipo estático

// const message = "Hello Typescript!";
let message = "Hello Typescript!";

function showMessage() {
    console.log(message);
}


/* ERRO, ela é uma constante, você não pode mudar! (Antes)
message = "Typescript";
*/
showMessage();

const user = {
    name: "Enzo Okuizumi",
    email: "enzo@gmail.com"
}

// Propriedade existe? NÃO DÁ para acessar uma propriedade que não existe!
//console.log(user.avatar);
console.log(user.email);





// #F0523 1_Tipos primitivos

// username pode receber qualquer um desses valores... ENTRETANTO, colocamos : e definimos o seu tipo! No caso, string
let username: string;

username = "Enzo"; // Defina string

/* DÁ ERRO, pois ESTAMOS USANDO TYPESCRIPT e esses valores são diferentes de String
username = 17; // Defina number
username = true; // Defina boolean
*/


// number para número
let total: number;
total = 3;
total = 7.5;

// boolean para verdadeiro ou falso
let isLoading: boolean;
isLoading = true;
isLoading = false;





// #F0524 2_Inferência de tipos e tipagem explícita

// Tipagem explícita
let myName: string;
myName = "Enzo";

// Inferência de tipos - infere/deduz que a variável é do tipo string
let message2 = "Oi, tudo bem?";
message2 = "Sim. Tudo ótimo!";





// #F0525 3_Tipo Any

// Com tipo any, a variável aceita qualquer valor (Não precisa definir o tipo)
let message3: any;
message3 = "Hello";
message3 = 123;
message3 = true;





// #F0526 4_Tipagem em arrays

// Tipagem explícita ou Anotação de Tipo (Type Annotation)
let names: string[] = ["Enzo", "Mayk"]; // Array de strings
let numbers: number[] = [1, 2, 3, 4, 5]; // Array de números

// Também podemos definir o tipo assim!
let names2: Array<string> = ["Enzo", "Mayk"];
let numbers2: Array<number> = [1, 2, 3, 4, 5];


// Inferência de tipos
let products = ["Produto X", "Produto Y", "Produto Z"];





// #F0527 5_Tipagem em funções

function sum(x: number, y: number): number {
    const result = x + y;
    console.log("Resultado: " + result);

    return result;
}

const result = sum(7, 8);



const showMessage2 = (name: string): string => {
    const message = "Olá," + name;
    return message;
}

showMessage2("Enzo");





// #F0528 6_Tipagem em objetos

// Tipando objeto, definindo propriedades name, age e avatarUrl (? é opcional) 
let user2: { name: string, age: number, avatarUrl?: string } = {
    name: "Enzo",
    age: 19
}


function signIn(email: string, password: string) {
    // Lógica de conectar o usuário na aplicação
    console.log("Usuário: " + email, " e senha: ", password); 
}

signIn("enzo@gmail.com", "123456");


// Aqui usamos desestruturação de objeto para tipar os parâmetros da função signIn2
// SEM desestruturar o objeto, fica assim: signIn2(user: { email: string, password: string }) / aí teriamos que acessar user.email e user.password
function signIn2({ email, password }: { email: string, password: string }) {
    // Lógica de conectar o usuário na aplicação
    console.log("Usuário: " + email, " e senha: ", password);
}

signIn2({ email: "enzo@gmail.com", password: "123456" });





// #F0529 7_Null e Undefined

// undefined - Quando uma variável é declarada, mas não inicializada, ela recebe o valor undefined.
let value: number;

//console.log(value); // undefined

let user3 = {
    name: "Enzo"
}

//console.log(user3.email);  // undefined


// null - Utilizado quando quer definir a AUSÊNCIA de valor.
let email = null;

console.log(email); // null

if (!email) {
    console.log("Informe o email");
}





// #F0530 8_Union Types

// Pode ter vários tipos de valores
let response: string | null;

response = "Teste";
response = null;


// Tudo que usamos anteriormente foram TIPOS PRIMITIVOS!!

