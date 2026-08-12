// #F0448 8_Usando classes nos módulos

// Não precisa colocar function, pois classes são funções construtoras, então podemos exportar a classe diretamente.

export class Calc {
    name = "Calculadora";

    sum3(a, b) {
        return a + b;
    }

    multiply3(a, b) {
        return a * b;
    }
}
