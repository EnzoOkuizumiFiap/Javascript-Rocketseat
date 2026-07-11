// #F0384 1_Aprendendo sobre classes

/* 
    Classes são uma forma de criar objetos e definir seu comportamento por meio de construtores e métodos
    Uma classe é basicamente um modelo para criar objetos. Ela contém um construtor, que é um método especial chamado quando um objeto é instanciado a partir da classe.
    Além do construtor, você pode adicionar métodos a uma classe. Métodos são funções associadas a objetos e descrevem o comportamento desses objetos

    Herança
    Uma classe pode herdar propriedades e métodos de outra classe. Isso é feito usando a palavra-chave "extends". A classe que herda é chamada de subclasse, enquanto a classe da qual ela herda é chamada de superclasse.
*/





// #F0385 2_Criando uma classe com um método construtor
class Person {
    constructor(name) {
        console.log("Olá", name);
    }
}

const person = new Person("Enzo");





// #F0386 3_Criando propriedades dentro das classes
class Product {
    constructor(name) {
        this.name = name; // this se refere ao contexto de product / name é o parâmetro
    }
}

const product1 = new Product("Teclado");
console.log(product1.name);

const product2 = new Product("Mouse");
console.log(product2.name);





// #F0387 4_Adicionando métodos nas classes
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    sendEmail() {
        console.log("Email enviado para", this.name, "no endereço", this.email);
    }
}

const user = new User("Enzo", "enzo@gmail.com");
user.sendEmail();





// #F0388 5_O que é método estático
class User2 {
    constructor(message) {
        this.message = message;
    }

    static showMessage(mensagem) {
        console.log("Essa é uma mensagem. Mensagem direto:", mensagem);
    }

    static showMessage2() {
        console.log("Essa é uma mensagem. Mensagem construtor:", this.message);
    }
}

//const user2 = new User2();

// Conseguimos acessar um método (sendo ela estática) sem instanciar a classe!!
User2.showMessage("Olha o zap!!");

// E não funciona com atributos do construtor! Ele devolve undefined
User2.showMessage2("Essa é uma mensagem");





// #F0389 6_Como aplicar herança com classes
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeNoise() {
        console.log("Algum som genérico do animal");
    }
}

class Dog extends Animal {

}

class Cat extends Animal {

}

const dog = new Dog("Belu");
console.log(dog.name);
dog.makeNoise();

const cat = new Cat("Mel");
console.log(cat.name);
cat.makeNoise();





// #F0390 7_Sobrescrevendo métodos
class Dog2 extends Animal {
    makeNoise() {
        console.log("AUAUAUAUAUUAUAUAUAUAU");
    }
}

class Cat2 extends Animal {
    makeNoise() {
        console.log("MIAIUAIUIAUIAUIAUIUAU");
    }

    run() {
        console.log(`CORRENDOOOOOOO ${this.name}...`);
    }
}

const dog2 = new Dog2("Belu");
console.log(dog.name);
dog2.makeNoise();

const cat2 = new Cat2("Mel");
console.log(cat.name);
cat2.makeNoise();
cat2.run();





// #F0391 8_Aprendendo sobre herança e cadeia de protótipos

// Prototype chain (cadeia de protótipos) é o mecanismo que o JavaScript usa para permitir a herança. Quando você tenta acessar uma propriedade ou método de um objeto, o JavaScript procura nele. Se não encontrar, ele sobe na cadeia e procura no "protótipo" do objeto, e assim por diante.





// #F0392 9_Criando um objeto prototype
const address = {
    city: "São Paulo",
    country: "Brasil"
}

console.log(address); // Tem um Prototype exibindo no console do navegador


const users = ["Enzo", "João", "Maria"];
console.log(users);

const userName = "Enzo Okuizumi";
console.log(userName.__proto__); // Prototype do objeto string





// #F0393 10_Como utilizar classes pra lidar com exceções
let obj = [];
let index = 300;

try {
    //obj.execute();

    if (!obj.includes(17)) {
        throw new Error("O número 17 não está disponível");
    }

    if (index > 99) {
        throw new RangeError("Número está fora do intervalo. Escolha um número de 0 à 99.");
    }

} catch (error) {
    if (error instanceof TypeError) {
        console.log("Método indisponível");
    } else if (error instanceof RangeError) {
        console.log(error.message);
    } else {
        console.log("Não foi possível realizar a ação");
    }
}





// #F0394 11_Como utilizar classes para criar erros customizado
class MyCustomError {
    constructor(message) {
        this.message = "Classe de Error customizada: " + message;
    }
}


try {
    //throw new Error("Erro genérico!");

    // Erro Customizado
    throw new MyCustomError("Erro personalizado lançado!");
} catch (error) {
    if (error instanceof MyCustomError) {
        console.log(error.message);
    } else {
        console.log("Não foi possível executar!");
    }
}

