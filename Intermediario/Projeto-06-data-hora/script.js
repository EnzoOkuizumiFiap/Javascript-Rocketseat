// #F0373 1_Obtendo a data e a hora

// Exibe a data e hora atual
console.log(new Date());
console.log(new Date(0)); // A primeira data que ele usa como referência (considera o fuso horário)

// Exibe o número de milissegundos Data Atual
console.log(new Date().getTime());





// #F0374 2_Definindo uma data e uma hora específica

// Define uma data com ano, mês (0-11), dia...
console.log(new Date(2024, 6, 3)); 


// Define data: ano, mês, dia e hora, minuto, segundo
console.log(new Date(2024, 6, 3, 14, 30, 0));

// Definindo data e hora com String.
console.log(new Date("2024-07-03T14:30:00"));

console.log(new Date("July 3, 2032 13:30:00"));





// #F0375 3_Métodos pra trabalhar com data e hora

let date = new Date("2024-07-02T14:30:10");

// Dia da semana de 0 à 6 (domingo é 0)
console.log(date.getDate()); // Terça-feira

// Dia do mês (0 à 30)
console.log(date.getDate());

// Mês (0 à 11)
console.log(date.getMonth());

// Ano
console.log(date.getFullYear());

// Horas
console.log(date.getHours());

// Minutos
console.log(date.getMinutes());

// Segundos
console.log(date.getSeconds());





// #F0378 6_Convertendo uma data para string

let newDate = new Date("July 3, 2024 14:30:00");


// Modificar o ano
newDate.setFullYear(2030);

// Modificar o mês (Começa com 0 - janeiro)
newDate.setMonth(7);

// Modificar o dia 
newDate.setDate(10);


// Modificar a hora
newDate.setHours(18);

// Modificar o minuto
newDate.setMinutes(15);

// Modificar o segundo
newDate.setSeconds(30);


console.log(newDate);





// #F0377 5_Formatando uma data e uma hora
let date3 = new Date("2024-07-02T14:30:00");

// Formatando uma Data usando o padStart!! Temos que converter ela para uma String primeiro! E formatamos para o dia sempre ter 2 dígitos 
let day = date3.getDate().toString().padStart(2, "0");
//console.log(day);

// Formata para o Mês sempre ter 2 dígitos
let month = (date3.getMonth() + 1).toString().padStart(2, "0")
//console.log(month);

let year = date3.getFullYear();
let hour = date3.getHours();
let minutes = date3.getMinutes();

console.log(`${day}/${month}/${year} às ${hour}:${minutes}`);





// #F0378 6_Convertendo uma data para string
let date4 = new Date("2024-07-02T14:30:00");

// Converte para String... 
console.log(date.toString());

// Retorna somente a data
console.log(date.toDateString());

// Retorna somente a Hora
console.log(date.toTimeString());





// #F0379 7_Exibindo data e hora formatadas de acordo com a lo
let date5 = new Date("2024-07-02T14:00:00");

// Retorna somente a Data no formato local sem horas e minutos
console.log(date5.toLocaleDateString());

// Retorna somente as horas, minutos e segundos no formato local sem a Data 
console.log(date5.toLocaleTimeString());


// Exibe a data e hora no formato escolhido
console.log(date5.toLocaleDateString("en"));
console.log(date5.toLocaleTimeString("en"));





// #F0380 8_Usando o toLocaleString()
let date6 = new Date("2024-07-02T14:30:10");

console.log(date6.toLocaleString());


console.log(date6.toLocaleString("en"));

// Exibe a data e hora em styles diferentes
console.log(date6.toLocaleString("pt-BR", {
        dateStyle: "short",
    })
);

console.log(date6.toLocaleString("pt-BR", {
        dateStyle: "long",
    })
);

console.log(date6.toLocaleString("pt-BR", {
        dateStyle: "medium",
    })
);

console.log(date6.toLocaleString("pt-BR", {
        dateStyle: "full",
    })
);


console.log(date6.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
}));


// Com toLocaleString também conseguimos formatar não só data, mas sim também Moedas!!
let amount = 12.5;
console.log(amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
}));





// #F0381 9_Aprendendo sobre fuso horário

// Timestamp é um valor que representa um ponto específico no tempo, geralmente expresso como uma contagem de segundos ou milissegundos desde um momento de referência!!

// data de referência: 1º de janeiro de 1970, 00:00:00 UTC (Tempo Universal Coordenado).





// #F0382 10_Conhecendo a Intl

// Intl é a API de Internacionalização do ECMAScript

// Obtém Informações da localidade
const currentLocale = Intl.DateTimeFormat().resolvedOptions();

console.log(currentLocale);


// Exibe no formato de acordo com a localidade
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()));
console.log(new Intl.DateTimeFormat("en-US").format(new Date()));


const data = new Date();

// Obtém a diferença em minutos do Time Zone
console.log(data.getTimezoneOffset());

// Obtém a diferença em horas do Time Zone
console.log(data.getTimezoneOffset() / 60);





// #F0383 11_Criando uma data e hora com fuso horário
const dateWithTimezone = new Date("2026-07-09T01:06:54.120+03:00"); // Esse +03:00 é o fuso horário

//console.log(dateWithTimezone.toISOString());

console.log(new Date().toLocaleString());
console.log(dateWithTimezone.toLocaleString());
