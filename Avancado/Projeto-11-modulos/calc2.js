// #F0445 5_Exportação padrão ou nomeada

// default export - é a função padrão fornecida pelo módulo. Tanto faz o nome que você passar na importação!
export default function sum2(a, b) {
    return a + b;
}

// named export - cada método é importado pelo seu PRÓPRIO nome de exportação.
export function multiply2(a, b) {
    return a * b;
}





// #F0446 6_Renomeando as exportações
function divide(a, b) {
    const result = a / b;
    return Number(result.toFixed(2));
}

export { divide as dividir };