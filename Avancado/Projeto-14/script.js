// #F0463 2_O que é uma API

// API (Application Programming Interface) é uma interface que disponibiliza um conjunto de funcionalidades para serem utilizadas. Exemplos: API de cep, previsão de tempo, cotação de moedas, etc.
// JSON (JavaScript Object Notation). É uma notação de OBJETOS utilizado para representar dados.





// #F0464 3_Instalando o json-server / #F0465 4_Instalando uma versão específica / #F0466 5_Criando uma API de exemplo

// Usando o json-server, criei um arquivo chamado server.json, que é o arquivo que vai armazenar os dados da API. E criei também alguns produtos de exemplo.




 
// #F0467 6_Utilizando o fetch
const response = fetch("http://localhost:3333/products") // Faz uma requisição para a API
    .then((response) => response.json()) // Converte a resposta da API para JSON
    .then((data) => console.log(data)); // Retorna os Dados da API

console.log(response); // (Sem o .then(), Retorna uma Promise, que é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante. A Promise é um objeto que pode estar em três estados: pendente, resolvida ou rejeitada.)





// #F0468 7_Utilizando async e await
async function fetchProducts() { // Utilizando o fetch com Async e Await
    const response = await fetch("http://localhost:3333/products"); // Faz uma requisição para a API
    const data = await response.json(); // Converte a resposta da API para JSON 
    console.log(data); // Retorna os Dados da API
}

fetchProducts();





// #F0469 8_Passando parâmetros na requisição
async function fetchProductById(id) {
    const response = await fetch(`http://localhost:3333/products/${id}`); // Faz uma requisição para a API com Id do Product
    const data = await response.json(); // Converte a resposta da API para JSON
    console.log(data); // Retorna os Dados da API
}

fetchProductById(2); // Passando o ID do produto que quero buscar na API





// #F0470 9_Fetch com Post
const productName = document.getElementById("name");
const prodctPrice = document.getElementById("price");
const form = document.getElementsByTagName("form");

addEventListener("submit", async (event) => {
    event.preventDefault();

    await fetch("http://localhost:3333/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ // Serializando... Passando de JSON para Texto
            id: new Date().getTime.toString(),
            name: productName.value,
            price: prodctPrice.value
        })
    });
});

