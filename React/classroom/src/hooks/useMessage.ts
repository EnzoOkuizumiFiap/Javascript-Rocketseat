/* #F0979 2_Compreendendo Hooks

Permite que você use estados e outros recursos do React sem escrever uma classe. Encapsula funcionalidades e facilita o reaproveitamento da sua lógica. 

Exemplos: 
- useState -> Permite adicionar uma variável de estado no componente.

- useEffect -> Utilizado no ciclo de vida do componente e permite trabalhar com side-effects (efeitos colaterais)


Padrão de nomenclatura (camelCase): useNomeDoHook
*/

import { useEffect } from "react";



// #F0980 3_Criando seu próprio Hook
type Props = {
    name: string,
    age: number
}

// O hook useMessage recebe name e age como propriedades fixas (E os mantém disponíveis para a função show). 
// Já a função show recebe message como parâmetro, permitindo que cada chamada envie uma mensagem diferente e mais específica.
export function useMessage({ name, age }: Props) { // Passando Props e Desestruturando
    
    // A mensagem é recebida separadamente para que cada chamada possa ser específica: show("Mensagem personalizada do meu Hook!")
    function show(message: string) {
        console.log("Mensagem do meu próprio Hook!!");

        console.log(name, age, message);
    }

    
    // #F0985 8_useEffect em Outros Contextos
    useEffect(() => {
        console.log("useEffect do useMessage");
    }, []);


    return { show }; // Retornando um objeto com a função show, pois { } permite retornar mais de uma função!
}