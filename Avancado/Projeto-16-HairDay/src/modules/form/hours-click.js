// #F0505 7_Selecionando um horário
export function hoursClick() {
    const hours = document.querySelectorAll(".hour-available");
    
    hours.forEach((available) => {

        // Removendo a classe hour-selected de todas as li não selecionadas.
        available.addEventListener("click", (selected) => {
            hours.forEach((hour) => {
                hour.classList.remove("hour-selected");
            });

            // Adicionando a classe hour-selected na li clicada.
            selected.target.classList.add("hour-selected");
        });
    });
}