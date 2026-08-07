import { apiConfig } from "./api-config";

// #F0517 10_Removendo um agendamento da API
export async function scheduleCancel({ id }) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
            method: "DELETE",
        });

        alert("Agendamento cancelado com sucesso!");
    } catch (error) {
        console.log(error);
        alert("Não foi possível cancelar o agendamento.");
    }
}