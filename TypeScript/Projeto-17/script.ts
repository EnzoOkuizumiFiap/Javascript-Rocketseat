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





// #F0532 2_Conhecendo interface no TypeScript

interface Product {
    id: number,
    name: String,
}

// Usando uma tipagem com Interface
function newProduct(product: Product) {
    console.log(`ID: ${product.id} Nome Produto: ${product.name}`);
}

newProduct({ id: 1, name: "Produto X" });





// #F0533 3_Como estender interfaces

interface Person {
    id: number,
    name: string,
}

// Estendendo Person para pegar id e name
interface Teacher extends Person {
    subjects: string[]
}

interface Student extends Person {
    age: number
}

let teacher: Teacher = { id: 1, name: "Enzo", subjects: ["Javascript", "Typescript"] };

let student: Student = { id: 2, name: "João", age: 23 };

console.log("Teacher: ", teacher.id, teacher.name, teacher.subjects);
console.log("Student: ", student.id, student.name, student.age);





// #F0534 4_Usando Type

// Tipagem customizada
type Product2 = {
    id: number,
    name: string,
}

function newProduct2(product: Product2) {

}

newProduct({ id: 1, name: "AAAAAAAAAAAAAA" });



type SelectResponse = Product2[] | null;

function selectProducts(): SelectResponse {
    return null;
}





// #F0535 5_Intersecção de tipos

type Person2 = {
    id: number,
    name: string
}

type Teacher2 = Person & {
    subjects: string[]
}

type Student2 = Person & {
    age: number
}

let teacher2: Teacher2
let student2: Student2

teacher2 = { id: 1, name: "Enzo", subjects: ["Javascript", "Typescript"] };
student2 = { id: 2, name: "João", age: 23 };

console.log("Teacher: ", teacher2.id, teacher2.name, teacher2.subjects);
console.log("Student: ", student2.id, student2.name, student2.age);





// #F0536 6_Diferença entre Type e Interface

// Comparativo entre Interface e Type - O uso é igual! Só muda o fato que a Interface podemos estender e o Type atribuímos um alias (apelido)

interface IBaseProduct {
    price: number,
}

interface IProduct extends IBaseProduct {
    id: number,
    name: string,
}

// Podemos fazer duas interfaces com o mesmo nome, que serão unidas em uma só.
interface IProduct {
    quantity: number,
}

// No type a gente está atribuindo um alias (apelido) para o tipo de dado, mas não estamos criando um 
// novo tipo de dado. Para fazer algo parecido como a interface, podemos usar a intersecção de tipos (&) 
// para criar um novo tipo de dado que combina os tipos existentes.
type TBaseProduct = {
    price: number,
}

type TProduct = TBaseProduct & {
    id: number,
    name: string,
}


let product1: IProduct = { id: 1, name: "Produto 1", price: 10.99, quantity: 12 };
let product2: TProduct = { id: 2, name: "Produto 2", price: 15.99 };

// Em Type podemos atribuir um alias (apelido) para tipos primitivos
type TypeString = string; 
type TypeNumber = number;

//interface TesteStrign extends string (); // Não é possível estender tipos primitivos como string, number, boolean, etc.





// #F0537 7_Asserção de tipos

// Fazer quanto o TS não sabe a tipagem de um objeto, então podemos informar a tipagem pra ele
type UserResponse = {
    id: number,
    name: string,
    avatar: string,
}

let userResponse = {} as UserResponse; // Fazendo uma asserção de tipo, dizendo que userResponse é do tipo UserResponse
userResponse = { id: 1, name: "Enzo", avatar: "imagem.com" };

console.log(userResponse.id, userResponse.name, userResponse.avatar);





// #F0538 8_Restringindo valores
type Size = "small" | "medium" | "large"; // Restringindo os valores possíveis para a variável size

let size: Size;
size = "small";

console.log(size);





// #F0539 9_Enums
enum Profile {
    Admin = 1,
    Client = 2,
    Seller = 3
}

let profile: number = Profile.Admin;
console.log(profile); // 1





// #F0540 10_Generic

// Deixar a tipagem mais flexível, sem precisar criar várias funções para cada tipo de dado.
// E também ao criar um Generic, ao definir ele sendo uma String, ele sempre vai ser uma String. Ele não muda de tipo.

/* Convenções de nomes para representar Generics:
 S => state
 T => type
 K => key
 V => value
 E => element
*/

function useState<T>() {
    let state: T;

    function get() {
        return state;
    }

    function set(newValue: T) {
        state = newValue;
    }

    return { get, set };
}

let newState = useState<string>();

newState.set("Olá");
newState.get();

/* Agora que definimos o tipo como string, ele não deixa mais setar um número

newState.set(123);
newState.get();
*/
