// #F0456 1_O que são pacotes

// Pacotes (ou bibliotecas) fornecem funcionalidades prontas para serem utilizadas em projetos, evitando que você precise escrever tudo do zero. Eles podem incluir funções, classes, estilos e muito mais, facilitando o desenvolvimento e aumentando a produtividade.





// #F0457 2_Conhecendo o pacote day.js / #F0458 3_Utilizando o day.js pelo browser

// dayjs retorna um objeto { } 
//const now = dayjs();

const now = dayjs().format('DD/MM/YYYY - HH:mm');
console.log(now); 





// #F0459 4_Gerenciadores de pacote

// Gerenciadores de pacotes são ferramentas que ajudam a instalar, atualizar e gerenciar pacotes em projetos. Eles facilitam a integração de bibliotecas externas, garantindo que você tenha as versões corretas e evitando conflitos entre dependências. Alguns exemplos populares incluem npm (Node Package Manager) e Yarn.





// #F0460 5_Conhecendo o node e o npm

// Já tenho instalado o node.js e o NPM.





// #F0461 6_Resolução de dependências

// A resolução de dependências é o processo de identificar e instalar todas as dependências necessárias para que um projeto funcione corretamente. O npm é responsável por gerenciar esse processo, garantindo que todas as dependências sejam instaladas e atualizadas conforme necessário.

// ~ para indicar que a versão do pacote pode ser atualizada automaticamente para versões compatíveis, enquanto ^ indica que apenas atualizações de versão menor são permitidas. Por exemplo, se você especificar "dayjs": "^1.10.0", o npm permitirá atualizações para versões como 1.10.1, 1.11.0, mas não para 2.0.0.

