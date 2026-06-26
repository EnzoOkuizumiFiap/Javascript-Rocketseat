// Cotação de moedas do dia
const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
const footer = document.querySelector("main footer");
const description = document.querySelector("#description");
const result = document.querySelector("#result");

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g;

    // Pegando o valor digitado e substituindo Caracteres via Regex para NADA 
    amount.value = amount.value.replace(hasCharactersRegex, "");
});


// Capturando o evento de submit (enviar) do formulário
form.onsubmit = (event) => {
    event.preventDefault();
    
    switch(currency.value) {
        case "USD": 
            convertCurrency(amount.value, USD, "US$");
            break;
        case "EUR": 
            convertCurrency(amount.value, EUR, "€");
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£");
            break;
    }
}


// Função para converter a moeda
function convertCurrency(amount, price, symbol) {
    try {
        // Exibindo a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

        // Calculando e exibindo resultado total
        let total = amount * price;
        result.textContent = `${formatCurrencyBRL(total).replace("R$", "")} Reais`;

        // Aplica a classe que exibe o footer para mostrar o resultado
        footer.classList.add("show-result");
    } catch (error) {
        // Remove a classe do footer removendo ele da tela
        footer.classList.remove("show-result");
        
        console.log(error);
        alert("Não foi possível converter. Tente novamente mais tarde.");
    }
}


// Formata a moeda em Real Brasileiro, está sendo utlizando na função convertCurrency e tendo o seu valor price passado em description.textContent 
function formatCurrencyBRL(value) {
    // Colocamos Number(value) para tipar e dizer que é um número.
    // toLocaleString() para formatar no padrão BRL (R$00,00)
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}
