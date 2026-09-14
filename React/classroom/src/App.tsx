// #F0964 6_JSX
// Componentes são basicamente funções que retornam HTML, mas podem ter lógica e estado.
import { Button, Button2, Button3, Button4, Button5 } from "./components/button"
import { useMessage } from "./hooks/useMessage";

/* #F0975 3_CSS Global */
import "./global.css"

/* #F0974 2_Importando CSS */
import styles from "./app.module.css"

export function App() {
    /* #F0980 3_Criando seu próprio Hook
        Chamando o Hook useMessage e desestruturando a função show que está dentro do objeto retornado pelo Hook
    */
    const { show } = useMessage({ name: "Enzo", age: 19 }); // Passando como objeto e diretamente as propriedades (props) name e age para o Hook useMessage, que são desestruturadas dentro do Hook e utilizadas na função show! (Como Objeto, pois a ordem não importa)

    return (
        // #F0968 3_Retornando um Elemento Parent
        <div className={styles.container}> {/* div sendo o elemento pai e o que está dentro elementos filhos */}
            <h1>Hello, World!</h1>


            {/* #F0969 4_Passando Propriedades Para O Componente */}
            <Button name="Criar" />
            <Button name="Editar" />
            <Button name="Remover" />


            {/* #F0970 5_Passando Métodos no Componente */}
            {/* Passando Propriedade onClick, o conteúdo (arrow function) está sendo repassada no Componente */}
            <Button2 name="Criar" onClick={() => alert("Criar")} />


            {/* #F0971 6_Estendendo Propriedades do Botão */}
            <Button3 name="Criar" onClick={() => alert("Criar")} />

            {/* #F0972 7_Rest Operator */}
            <Button4 name="Criar" onClick={() => alert("Criar")} />

            {/* #F0976 4_CSS Modules */}
            <Button5 name="Criar" onClick={() => alert("Criar")} />
            <Button5 name="Editar" onClick={() => alert("Editar")} />
            <Button5 name="Remover" onClick={() => alert("Remover")} />

            {/* #F0977 5_Convertendo para CSS Module */}
            <Button5 name="Adicionar" onClick={() => alert("Adicionar")} />
            <span>0</span>
            <Button5 name="Remover" onClick={() => alert("Remover")} />



            {/* #F0980 3_Criando seu próprio Hook */}
            <Button5
                name="Adicionar"
                onClick={() => show("Mensagem personalizada do meu Hook!")} // Passando a Mensagem Personalizada para -> Hook useMessage -> Passando especificamente para a Function show (Para um dos métodos do Hook useMessage)
            />
        </div>
    );
}