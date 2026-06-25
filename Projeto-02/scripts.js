// Visualizar o conteúdo do document
//console.log(document);

// Obter o title da página
console.log(document.title);




// Acessar um elemento pelo Id - GetElementById
const guest = document.getElementById("guest-2");
console.log(guest);

// Acessando todas as propriedades do objeto (guest-2)
console.dir(guest);




// Acessando elemento com class (SELETOR class)
const guestsByClass = document.getElementsByClassName("guest");
console.log(guestsByClass);

// Exibindo o primeiro elemento da lista - 2 formas
console.log(guestsByClass.item(0));
console.log(guestsByClass[1]);




// Selecionar lista de elementos pela tag
const guestsByTag = document.getElementsByTagName("li");
console.log(guestsByTag);




// Outra maneira de acessar os elementos do DOM - querySelector

// Acessa o elemento pelo seletor ID
const guestQuery1 = document.querySelector("#guest-1");
console.log(guestQuery1);

// Acessa o elemento pelo seletor class - só retorna 1, precisamos usar o querySelectorAll para todos
const guestQuery2 = document.querySelector(".guest");
console.log(guestQuery2);

// Retorna todos os elementos encontrados pelo query
const guestQuery3 = document.querySelectorAll(".guest");
console.log(guestQuery3);




// Manipulando conteúdo
const guestManipular = document.querySelector("#guest-1");

console.log(guestManipular.textContent); // Retorna o conteúdo visível e oculto
console.log(guestManipular.innerText); // Retorna somente o conteúdo visível - Recomendado
console.log(guestManipular.innerHTML); // Retorna o HTML como texto




// Alterando estilos via JS
const input = document.querySelector("#name");

// Acessando a classe do elemento e adicionando ou removendo: uma class="input-error"
/* 
input.classList.remove("input-error");

input.classList.remove("input-error");
*/


// Se não tiver a classe adiciona. Se tem, remove.
/* input.classList.toggle("input-error"); */




// Modificar as propriedades CSS do elemento
const button = document.querySelector("button");
button.style.backgroundColor = "red";




// Criando novos Elementos via JS
const guests = document.querySelector("ul");

const newGuest = document.createElement("li");
newGuest.classList.add("guest"); // Adicionando a classe guest para estilização e afins

const guestName = document.createElement("span");
const guestSurname = document.createElement("span");

guestName.textContent = "Enzo"; // add dentro de guestName o texto Enzo
guestSurname.textContext = "Okuizumi";

// Pegando o newGuest e adicionando após o último filho com append
//newGuest.append(guestName); 

// Também podemos add dois argumentos no append 
//newGuest.append(guestName, guestSurname);

// Adiciona antes do primeiro filho
//newGuest.prepend(guestSurname); 


// Usando o appendChild, é mais simples que o append e apenas aceita apenas 1 argumento
newGuest.appendChild(guestName);

//console.log(guestName); 

// Adicionando o meu elemento no topo!! Usando prepend
guests.prepend(newGuest);




// Manipulando Atributos - Mexendo no Input
const inputAlterado = document.querySelector("input");

// Adicionar / Atualizar um atributo

// Desabilitando o input
//input.setAttribute("disabled", true);

// Mudando de texto para file
//input.setAttribute("type", "file");

// Removendo o atributo id
//input.removeAttribute("id");





// #F0316 9_Eventos
// Lidando com eventos no JS
window.addEventListener("load", () => {
    console.log("A página foi carregada!");
});

// Ouvindo Evento de Click do mouse
addEventListener("click", (event) => {
    event.preventDefault();

    // Retorna todas as informações do evento
    //console.log(event);

    // Retorna o elemento clicado
    console.log(event.target);

    // Retorna o textContent do elemento clicado
    console.log(event.target.textContent);
});





// #F0317 10_Eventos em um elemento específico em Projeto-02-atualizado
