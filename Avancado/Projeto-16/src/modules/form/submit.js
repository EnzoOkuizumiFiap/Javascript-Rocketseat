import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");

// Date atual para formatar o input - #F0500 2_Definindo a data atual
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual e define a data mínima como sendo a data atual.
selectedDate.value = inputToday;
selectedDate.min = inputToday;

// #F0506 8_Enviando um horário selecionado para a API
form.onsubmit = async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    try {
        // Recuperando o nome do cliente
        const name = clientName.value.trim();

        if (!name) {
            return alert("Informe o nome do cliente!");
        }

        // Recuperando o horário selecionado.
        const hourSelected = document.querySelector(".hour-selected");

        if (!hourSelected) {
            return alert("Selecione um horário!");
        }

        // Recuperando somente a hora
        const [hour] = hourSelected.innerText.split(":");
        
        // Inserindo a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour");

        // Gera um ID
        const id = new Date().getTime();

        // #F0510 3_Registrando um novo agendamento na API
        await scheduleNew({ 
            id, 
            name, 
            when
        });

    } catch (error) {
        alert("Não foi possível realizar o agendamento.");
        console.log(error);
    }
}