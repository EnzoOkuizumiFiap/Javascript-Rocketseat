import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

// No caso, hours é a ul que contém todos os horários disponíveis.
const hours = document.getElementById("hours");

export function hoursLoad({ date }) {
    // Limpa a lista de horários
    hours.innerHTML = "";
    
    // #F0502 4_Carregando os horários
    const opening = openingHours.map((hour) => {
        // Recuperar somente a hora.
        const [scheduleHour] = hour.split(":");

        // Adicionando a hora na date e verificar se está no passado.
        const isHourAvailable = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

        return {
            hour,
            available: isHourAvailable
        }
    });

    // #F0503 5_Renderizando os horários
    // Faz um forEach para percorrer o array de horários e renderizar na tela.
    opening.forEach(({hour, available}) => { // Desestruturação do objeto para pegar a hora e a disponibilidade.
        const li = document.createElement("li");
        li.classList.add("hour");
        li.classList.add(available ? "hour-available" : "hour-unavailable");
        li.textContent = hour;

        // Usando a Função hourHeaderAdd para adicionar o título do período.
        if (hour === "9:00") {
            hourHeaderAdd("Manhã");
        } else if (hour === "13:00") {
            hourHeaderAdd("Tarde");
        } else if (hour === "18:00") {
            hourHeaderAdd("Noite");
        }

        // Adicionando o horário à lista de horários.
        hours.append(li);
    });

    // Adicionando o evento de clique nos horários disponíveis. 
    hoursClick();
}

// #F0504 6_Separando os horários pelo período
function hourHeaderAdd(title) {
    const header = document.createElement("li");
    header.classList.add("hour-period");
    header.textContent = title; // Adicionando o título do período (Manhã, Tarde, Noite) à lista de horários.

    hours.append(header); // Adicionando o header à lista de horários.
}