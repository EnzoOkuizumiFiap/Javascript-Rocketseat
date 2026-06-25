// #F0317 10_Eventos em um elemento específico
const ul = document.querySelector("ul");

ul.addEventListener("scroll", () => {
    // console.log(ul.scrollTop);

    if(ul.scrollTop > 304) {
        console.log("Fim da lista");

        // Scroll para o topo da lista
        ul.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});


// Agora mexendo com o botão! - Comentando para não afetar o código 11_Eventos de formulário

/*
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    event.preventDefault();

    console.log("Clicou!!");
});
*/





// #F0318 11_Eventos de formulário
const form = document.querySelector("form");

// O onSubmit sempre leva em consideração a última função que você criou! Já o addEventListener escuta todos os Eventos

// Teste com onsubmit 
form.onsubmit = (event) => {
    event.preventDefault();
    console.log("Você fez submit no formulário com onSubmit #1");
}

form.onsubmit = (event) => {
    event.preventDefault();
    console.log("Você fez submit no formulário com onSubmit #2");
}

// Teste com addEventListener
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Você fez submit no formulário com addEventListener #3");
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Você fez submit no formulário com addEventListener #4");
})





// #F0319 12_Eventos em input
const input = document.querySelector("input");

// evento keydown - quando uma tecla é pressionada (captura tudo, incluindo CTRL, SHIFT, etc)
/* 
input.addEventListener("keydown", (event) => {
    console.log(event.key);
});
*/

// evento keypress - quando uma tecla do tipo caractere é pressionada (letras, números, pontos, etc. Não captura tudo, CTRL, SHIFT, etc)
input.addEventListener("keypress", (event) => {
    console.log(event.key);
});

// evento change - quando o conteúdo muda do input, exemplo, você estava escrevendo no input e deu tab para o botão adicionar ou saiu dele
input.onchange = (() => inputChange());

function inputChange() {
    console.log("O input mudou!");
}





// #F0322 15_Manipulando valor do input
const inputValor = document.querySelector("input");

inputValor.addEventListener("input", () => {
    const value = input.value
    const regex = /\D+/g;

    // Retorna o padrão encontrado na string
    //console.log(value.match(regex));

    // Testa se atende o padrão
    //const isValid = regex.test(value);
    //console.log(isValid);
});


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const regex = /\D+/g;
    const value = input.value.replace(regex, "");

    if(!regex.test(value)) {
        alert("Valor inválido. Digite corretamente! Valor Incorreto: " + value);
    } else {
        console.log(value); 
    }
});



// #F0324 2_Depurando o código em Projeto-02-debug
