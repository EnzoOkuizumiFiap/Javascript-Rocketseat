import { scheduleFetchByDay } from "../../services/schedules-fetch-by-day";
import { hoursLoad } from "../form/hours-load";
import { schedulesShow } from "./show";

// #F0502 4_Carregando os horários

// Selecionando o input inteiro de data
const selectedDate = document.getElementById("date");

export async function schedulesDay() {
    // Obtém somente a data do input
    const date = selectedDate.value;

    // #F0512 5_Buscando os agendamentos na API
    // Buscar na API os agendamentos para carregar na aplicação
    const dailySchedules = await scheduleFetchByDay({ date });

    // #F0513 6_Renderizando os agendamentos do dia
    // Exibe os Agendamentos
    schedulesShow({ dailySchedules });

    // Renderiza as horas disponíveis.
    hoursLoad({ date, dailySchedules });
}