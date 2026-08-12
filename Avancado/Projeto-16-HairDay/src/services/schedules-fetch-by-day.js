import dayjs from "dayjs";
import { apiConfig } from "./api-config";

// #F0511 4_Serviço para buscar agendamentos do dia
export async function scheduleFetchByDay({ date }) {
    try {
        // Fazendo a requisição para pegar todos os agendamentos
        const response = await fetch(`${apiConfig.baseURL}/schedules`);

        // Converte para JSON a requisição acima
        const data = await response.json();

        // Filtrando os agendamentos pelo dia selecionado
        const dailySchedules = data.filter(( schedule ) => dayjs(date).isSame(schedule.when, "day"));

        // Retornando todas as datas filtradas
        return dailySchedules;

    } catch (error) {
        console.log(error);
        alert("Não foi possível buscar os agendamentos do dia selecionado");
    }
}