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

