type Props = {
    name: string,
    onClick?: () => void // Podemos passar métodos como propriedades para o componente, mas não é obrigatório, por isso o ? (opcional)
}



// #F0967 2_Criando um Componente
export function Button(props: Props) { // Passando Props (Propriedades p/ o Componente) e Tipando
    {/* #F0969 4_Passando Propriedades Para O Componente */ }
    return (
        <button>{props.name}</button> // Pegando nome de props / Passado no componente em App.tsx
    );
}



// #F0970 5_Passando Métodos no Componente
// Desestruturando e pegando a propriedade de forma direta
export function Button2({ name, onClick }: Props) { 
    return (
        <button onClick={onClick}>{name}</button> // Método onClick do button e estamos repassando o onClick que chega como propriedade do componente
    );
}



// #F0971 6_Estendendo Propriedades do Botão
type Props2 = React.ComponentProps<"button"> & {
    name: string
}

export function Button3({ name, onClick }: Props2) {
    return (
        <button onClick={onClick}>{name}</button> 
    );
}



// #F0972 7_Rest Operator
// Pegando toda as propriedades do button e repassando para o button
export function Button4({ name, ...rest }: Props2) {
    return (
        <button {...rest}>{name}</button> 
    );
}