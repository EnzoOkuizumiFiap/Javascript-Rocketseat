// Selecionando os elementos do formulário
const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const expense = document.querySelector("#expense");
const category = document.querySelector("#category");

// Selecionando os elementos da lista
const expenseList = document.querySelector("ul");
const expensesQuantity = document.querySelector("aside header p span");
const expensesTotal = document.querySelector("aside header h2");


// amount - Observando conteúdo que entra no input .value, removendo caracteres .replace() e atribuindo esse valor para o amount
amount.oninput = () => {
    let value = amount.value.replace(/\D/g, ""); 
    value = Number(value) / 100; // valor em centavos
    amount.value = formatCurrencyBRL(value);
}

// Formatando o valor no padrão BRL 
function formatCurrencyBRL(value) {
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    return value;
}

// Capturando o evento de submit do formulário para obter os valores
form.onsubmit = (event) => {
    event.preventDefault();

    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date()
    }

    expenseAdd(newExpense);
}

// Função para adicionar novo item na lista
function expenseAdd(newExpense) {
    try {
        const expenseItem = document.createElement("li");
        expenseItem.classList.add("expense");

        const expenseIcon = document.createElement("img");
        expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`);
        expenseIcon.setAttribute("alt", newExpense.category_name);

        const expenseInfo = document.createElement("div");
        expenseInfo.classList.add("expense-info");

        const expenseName = document.createElement("string");
        expenseName.textContent = newExpense.expense;
        
        const expenseCategory = document.createElement("spean");
        expenseCategory.textContent = newExpense.category_name;

        const expenseAmount = document.createElement("span");
        expenseAmount.classList.add("expense-amount");
        expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount.toUpperCase().replace("R$", "")}`;

        const removeIcon = document.createElement("img");
        removeIcon.classList.add("remove-icon");
        removeIcon.setAttribute("src", "img/remove.svg");
        removeIcon.setAttribute("alt", "remover");

        expenseInfo.append(expenseName, expenseCategory); // Adiciona o Nome e Categoria nas infos
        expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon); // Adiciona as infos no item
        expenseList.append(expenseItem); // Adiciona o item na lista
        updateTotals(); // Atualiza os totais
        formClear(); // Limpa o formulário
    } catch (error) {
        alert("Não foi possível atualizar a lista de despesas!");
        console.log(error);
    }
}

// Função para atualizar valor total despesa
function updateTotals() {
    try {
        const items = expenseList.children;
        expensesQuantity.textContent = `${items.length} ${items.length > 1 ? "despesas" : "despesa"}`;

        // Variáveis para incrementar o total e Percorrendo cada item (li) da lista (ul)
        let total = 0;

        for (let item = 0; item < items.length; item++) {
            const itemAmount = items[item].querySelector(".expense-amount");
            let value = itemAmount.textContent.replace(/[^\d,]/g, "").replace(",", ".");
            value = parseFloat(value);

            total += Number(value);
        }

        const symbolBRL = document.createElement("small");
        symbolBRL.textContent = "R$";
        total = formatCurrencyBRL(total).replace("R$", "");
        expensesTotal.innerHTML = "";
        expensesTotal.append(symbolBRL, total);
    } catch (error) {
        alert("Não foi possível atualizar os totais");
        console.log(error);
    }
}

// Evento que captura o clique e remove os elementos da lista
expenseList.addEventListener("click", function(event) {
    if (event.target.classList.contains("remove-icon")) {
        const item = event.target.closest(".expense"); // closest() busca o ancestral mais próximo que corresponde ao seletor ".expense"
        item.remove();
    }
    updateTotals();
});

function formClear() {
    expense.value = "";
    category.value = "";
    amount.value = "";

    expense.focus();
}