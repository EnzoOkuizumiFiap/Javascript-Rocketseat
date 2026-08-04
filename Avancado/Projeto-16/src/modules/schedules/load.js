import { hoursLoad } from "../form/hours-load";

// #F0502 4_Carregando os horários

// Selecionando o input inteiro de data
const selectedDate = document.getElementById("date");

export function schedulesDay() {
    // Buscar na API os agendamentos para carregar do lado direito da tela
    // E também os horários disponíveis (horário futuo + não agendado) do lado esquerdo (form)

    // Obtém somente a data do input
    const date = selectedDate.value;

    // Renderiza as horas disponíveis.
    hoursLoad({ date });
}