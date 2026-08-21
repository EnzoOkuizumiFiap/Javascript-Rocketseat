// #F0964 6_JSX
// Componentes são basicamente funções que retornam HTML, mas podem ter lógica e estado.
import { Button, Button2, Button3, Button4 } from "./components/button"

export function App() {
    return (
        // #F0968 3_Retornando um Elemento Parent
        <div> {/* div sendo o elemento pai e o que está dentro elementos filhos */}
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
        </div>
    );
}