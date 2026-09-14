import "./global.css"
import { useState, useEffect } from "react";
import { Button5 } from "./components/button"

import { useMessage } from "./hooks/useMessage";

import styles from "./app.module.css"

export function App2() {
    const message = useMessage({ name: "Enzo", age: 19 });

    // #F0983 6_UseState na Prática
    // useState é um Hook que permite adicionar estado a um componente funcional. 
    // Ele retorna um array com dois elementos: o valor atual do estado e uma função para atualizá-lo. 
    // O argumento passado para useState é o valor inicial do estado.

    const [count, setCount] = useState(0);

    function handleAdd() {
        setCount((prevState) => prevState + 1);
    }

    function handleRemove() {
        if (count > 0) {
            setCount((prevState) => prevState - 1);
        }
    }

    // #F0984 7_UseEffect na Prática
    // useEffect é um Hook que permite executar efeitos colaterais em componentes funcionais. Ele recebe uma função de efeito e um array de dependências. 
    // A função de efeito é executada após a renderização do componente, e o array de dependências determina quando o efeito deve ser reexecutado. 
    // Se o array estiver vazio, o efeito será executado apenas uma vez, após a primeira renderização.

    useEffect(() => {
        //console.log("Hello World!");

        // #F0986 9_Efeito Colateral
        if (count > 0) {
            console.log("O valor mudou para: ", count);
        }
    }, [count]);

    return (
        <div className={styles.container}>
            <Button5 name="Adicionar" onClick={handleAdd} />
            <span>{count}</span>
            <Button5 name="Remover" onClick={handleRemove} />

            <Button5
                name="Mensagem"
                onClick={() => message.show("Só pra não ficar com aviso chato!")}
            />
        </div>
    );
}