// #F0435 2_Conhecendo sobre imutabilidade

/*
    IMUTABILIDADE - MUITO IMPORTANTE PARA REACT

    Uma vez algo imutável é criado você não pode modificar seus valores ou propriedades. Em vez disso, você cria uma cópia modificada para manter o original inalterado.

    EXEMPLO (WRONG):
    const address1 = {
        street: "Av. Brasil",
        number: 20,
    }

    const address2 = addres1; -> address2 NÃO é uma cópia de address1. Será uma referência!
    address2.number = 30; -> O address2 vai modificar o address1. Porque address2 faz referência a address1 e NÃO um novo objeto na memória.


    
    ESTRATÉGIA
    Geralmente há duas maneiras de alterar dados. 
        1. Mudar o dado alterando diretamente seu valor
        2. Substituir o dado antigo por uma nova CÓPIA com as alterações desejadas

    
        EXEMPLO 2 (CERTO):
    Cria um novo objeto na memória chamado address2 com as propriedades e valores do address1.

    const address1 = {
        street: "Av. Brasil",
        number: 20,
    }

    // const address2 = addres1; -> NO NO NO
    
    const address2 = { ...address1 }; -> Usando spread operator (Pegando todos os valores do address1 e despejando/espalhando dentro de address2). Ele vai alocar um novo espaço na memória!
    address2.number = 30;


    
    Detectar mudanças em objetos imutáveis é consideravelmente fácil. Se ele for diferente do anterior, concluímos que o objeto foi alterado.

*/





// #F0436 3_Aplicando imutabilidade
const address1 = {
    street: "Av. Brasil",
    number: 20
}

// Isso não é uma cópia. É uma referência!! Address2 vai apontar na mesma memória que address1! 
const address2 = address1;
console.log(address1, address2);

// Alterando address2
address2.number = 30;
console.log(address1, address2);



// Agora vamos aplicar os conceitos de IMUTABILIDADE

// Criando um novo objeto utilizando as propriedades e valores de address1
const address3 = { ...address1 }; // Usamos spread para criar uma cópia do address1 para o address3
address3.number = 10;
console.log(address1, address3); // Objetos diferentes!!

// Podemos fazer assim também:
const address4 = { ...address1, number: 15 }; // Ordem importa, pois se passarmos number primeiro e depois o ...address1, ele vai sobrepor o nosso number!
console.log(address1, address4);



// Exemplo com Array
const list1 = ["Apple", "Banana"];
const list2 = list1;

list2.push("Watermelon"); // Acontece o mesmo com array, precisamos criar um cópia para funcionar!
console.log(list1, list2);


const list3 = [...list1, "Pineapple"]; // Fazendo direto!
//list3.push("pineapple");
console.log(list1, list3);





// #F0437 4_Shallow e Deep Copy

// Shallow Copy (cópia superficial): Não pega os itens aninhados
const htmlCourse = {
    course: "HTML",
    students: [{ name: "Enzo", email: "enzo@gmail.com" }] // Considera um objeto aninhado
}

/*
// Queremos mudar o nome do Curso para Javascript, mas manter os students. Em seguida vamos adicionar um novo student.
const jsCourse = {
    ...htmlCourse,
    course: "Javascript"
}

// Vai modificar o htmlCourse também, students é uma referência e NÃO uma cópia.
jsCourse.students.push({ name: "João", email: "joão@gmail.com" });
*/


// Deep Copy (cópia profunda)
const jsCourse = {
    ...htmlCourse,
    course: "Javascript",
    students: [...htmlCourse.students, { name: "Maria", email: "maria@gmail.com" }] // Temos que passar especificamente todos os objetos que temos dentro de students do htmlCourse para jsCourse
}
jsCourse.students.push({ name: "João", email: "joão@gmail.com" });


// OUTRA FORMA:
const cssCourse = {
    ...htmlCourse,
    course: "CSS",
}

cssCourse.students = [
    ...htmlCourse.students,
    { name: "Marcos", email: "marcos@gmail.com" }
]

console.log(htmlCourse, jsCourse, cssCourse);

/* Quando usar:
    Shallow Copy -> Para propriedades de valores primitivos, String, number e etc... 
    Deep Copy -> Quando tiver objetos mais complexos, como Array, Objetos Aninhados e etc... 
*/





// #F0438 5_Shallow freezing

// CONGELAR um objeto para impedir a modificação do mesmo.

const book = {
    title: "Objetos Imutáveis",
    category: "javascript",
    author: {
        name: "Rodrigo",
        email: "rodrigo@gmail.com"
    }
}

// O Javascript em si não impõe restrições à modificações dos objetos
book.category = "HTML";


// Congela o objeto e impede a modifacação.
Object.freeze(book);
book.category = "CSS";

// LEMBRETE: Object.freeze() não impede modificações PROFUNDAS, é só um congelamento raso. Então OBJETOS ANINHADOS ainda conseguimos ALTERAR.
book.author.name = "João";


console.log(book);





// #F0439 6_Deep freeze

// CONGELAR recursivamente cada propriedade (Função Recursiva é basicamente uma função que chama ela mesma) 
// Resumindo, vamos criar uma função que vai percorrer cada propriedade do objeto para CONGELAR ESSAS PROPRIEDADES

const book2 = {
    title: "Objetos Imutáveis",
    category: "javascript",
    author: {
        name: "Rodrigo",
        email: "rodrigo@gmail.com"
    }
}


function deepFreeze(object) {
    // Obtém um array com todas as propriedades do objeto.
    const props = Reflect.ownKeys(object); // Retorna todas as propriedades do objeto como um Array

    // Itera sobre todas as propriedades do objeto
    for (const prop of props) {
        // Obtém o valor associado à propriedade atual.
        const value = object[prop];

        // Verifica se o valor é um objeto ou função para continuar aplicando o deepFreeze em objetos aninhados.
        if(value && typeof value === "object" || typeof value === "function") {
            // Aplica o deepFreeze para valor retornado do object[prop] 
            deepFreeze(value);
        }
    }

    // Retorna o objeto congelado.
    return Object.freeze(object);
}

// Chamando a função para congelar o objeto com Deep Freeze (Congelamento profundo)
deepFreeze(book2);

// Tentando ALTERAR - Fracassamos miseravelmente
book2.category = "HTML";
book2.author.name = "João";
console.log(book2);





// #F0440 7_Manipulando objetos imutáveis
const book3 = {
    title: "Objetos Imutáveis",
    category: "javascript",
    author: {
        name: "Rodrigo",
        email: "rodrigo@gmail.com"
    }
}

const updatedBook = {
    ...book3,
    title: "Criando um Front-end moderno com HTML",
    category: "html",
    type: "Programming"
}

// Original Intacto
console.log(book3);

// Modificado
console.log(updatedBook);



// Utilizando operador de desestruturação (rest operator) para remover propriedades. Ex: Remover propriedade category
const { category, ...bookWithoutCategory } = book3; //Não pegamos do updatedBook, mas sim do book3 com JS!
console.log(bookWithoutCategory);
console.log(category); // Exibindo ele solitário...