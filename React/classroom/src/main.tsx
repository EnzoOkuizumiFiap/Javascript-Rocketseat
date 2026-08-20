import { StrictMode } from 'react' // Strict Mode que vimos em JS
import { createRoot } from 'react-dom/client' // DOM Virtual
import { App } from './App.tsx'

/*
  #F0960 2_Conhecendo o React

  React é uma Biblioteca JS para construção de interfaces, criada e mantida pelo Facebook.
  Ela permite criar interfaces interativas e dinâmicas, com uma abordagem declarativa e baseada em componentes.
  
  O React facilita a construção de componentes reutilizáveis que refletem mudanças de estado.

  Virtual DOM - É uma representação em memória da DOM real, permitindo que o React calcule de maneira eficiente as mudanças necessárias na interface do usuário.

  Quando o estado de um componente muda, o React cria um novo Virtual DOM e o compara com o anterior. Ele então aplica as mudanças necessárias à DOM real de maneira otimizada
*/

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
