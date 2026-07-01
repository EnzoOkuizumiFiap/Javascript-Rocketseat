// #F0343 4_Criando um objeto

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