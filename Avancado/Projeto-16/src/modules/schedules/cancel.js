import { schedulesDay } from "./load";
import { scheduleCancel } from "../../services/schedule-cancel";

// #F0516 9_Selecionando um agendamento para remover
const periods = document.querySelectorAll(".period");

// Gerando um evento de click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
    // Captura o evento de click na lista
    period.addEventListener("click", async (event) => {
        if (event.target.classList.contains("cancel-icon")) {
            const item = event.target.closest("li"); // Obtém a li pai do elemento clicado
            const { id } = item.dataset; // Pega o Id do agendamento para remover
    
            // Confirma que o id foi selecionado
            // #F0517 10_Removendo um agendamento da API
            if (id) {
                // Confirma se usuário quer cancelar
                const isConfirm = confirm("Tem certeza que deseja canceelar o agendamento?");
                
                if (isConfirm) {
                    // Faz a requisição na API para cancelar
                    await scheduleCancel({ id });
                }
            }

        }
    });
});