// #F0451 3_Conhecendo funções assíncronas - CONTEÚDO IMPORTANTE

/*
    - Quando uma função assíncrona é chamada, ela retorna uma Promise.
    - Quando a função assíncrona retorna um valor, a Promise será resolvida com o valor retornado.
    - Quando a função assíncrona lança uma exceção ou algum valor, a Promise será rejeitada com o valor lançado.
*/

/*
    Uma função assíncrona pode conter a expressão await, que pausa a execução da função assíncrona e Espera pela resolução da Promise passada, e depois retoam a execução da função assíncrona e retorna o valor resolvido.
*/





// #F0452 4_Conhecendo promises

// Função que retorna uma Promise
function asyncFunction() {
    return new Promise((resolve, reject) => {
        // Simula uma operação assíncrona
        setTimeout(() => {
            const isSuccess = true;

            if (isSuccess) {
                resolve("A operação foi concluída com sucesso!");
            } else {
                reject("Algo deu errado!");
            }
        }, 3000); // setTimeout -> Simula uma operação que leva 3 segundos.
    });
}

// Visualizando que o retorno é uma promise

//console.log(asyncFunction());
//const response = asyncFunction();
//console.log(response);

// Chamamos a Função asyncFunction()... O .then() -> Executa quando a Promise for resolvida... O .catch() -> Executa quando a Promise for rejeitada. 
console.log("Executando Função Assíncrona...");

asyncFunction().then((response) => {
    console.log("\nFunção Assíncrona Concluída! Ela está executando depois do #F0455, pois o Event Loop está verificando a Call Stack e a Callback Queue, e como a Promise é uma Microtask, ela será executada antes do setTimeout que é uma Macrotask.\n");
    console.log("Sucesso:", response);
}).catch((error) => {
    console.log("Erro:", error)
}).finally(() => {
    console.log("Fim da Execução!");
});





// #F0453 5_Conhecendo async e await

// Função assíncrona que utiliza await para esperar a resolução da Promise retornada pela função asyncFunction()
async function fetch() {
    try {
        const response = await asyncFunction();
        console.log("Sucesso 2:", response);
    } catch (error) {
        console.log("Erro 2:", error);
    } finally {
        console.log("Fim da Execução 2!");
    }
}

/* Com Arrow Function

const fetch = async () => {
    const response = await asyncFunction();
    console.log("Sucesso 2:", response);
};

*/

fetch();





// #F0454 6_Conhecendo o event loop - CONTEÚDO IMPORTANTE

/*
    Características do JS: 
    - Single Threaded -> Executa uma coisa por vez.
    - No-Blocking -> Não trava o contexto da execução.
    - Asynchronous -> Por ser no-blocking precisa utilizar um paradigma assíncrono para lidar com a execução das coisas.
    - concurrent -> As Tarefas que executam assíncronamente concorrem uma com as outras pelo processamento.

    Concorrência e Event Loop
    - O JS possui um modelo de concorrência baseado em um loop de eventos, chamado Event Loop, responsável por gerenciar a execução de código assíncrono e eventos em um único thread, permitindo que o JS seja Não Bloqueante.

    Event Loop
    - Tudo passa pela Call Stack, que é uma pilha de execução. Algumas tarefas serão resolvidas nele mesmo e outras somente irá passar pela Call Stack sem fazer nada e será resolvida em alguma WebAPI.
    - O Event Loop é quem fica checando constantemente a Call Stack e Callback Queue.

    Micro e Macro Tasks
    - Microtasks: São tarefas de alta prioridade que são executadas antes das Macrotasks. (Sendo Promises, MutationObserver e process.nextTick).
    - Macrotasks: São tarefas de menor prioridade, como Callbacks de eventos, setTimeout e setInterval.


    Resumo
    1. Execução de código: O código assíncrono é executado de cima para baixo, empilhando e desempilhando funções conforme necessário.
    2. Eventos Assíncronos: Quando ocorrem eventos assíncronos, como uma requisição concluída, o callback correspondente é enfileirado na fila de callback.
    3. Verificação do Event Loop: O Event Loop verifica a pilha de chaamadas e a fila de callback. Se a pilha estiver vazia, ele move um callback da fila para a pilha de chamadas e o executa.
    4. Microtasks e Macrotasks: Antes de verificar novamente a fila de callback, o Event Loop processa todas as microtasks pendentes. Isso garante que as microtasks sejam executadas antes das macrotasks.

*/





// #F0455 7_Prioridade e ordem de execução - Event Loop - CONTEÚDO IMPORTANTE

// Exemplo de Prioridade e Ordem de Execução com Event Loop

console.log(1); // (1) Impresso Imediatamente no console.

// (3) Microtask são executadas antes de temporizadores e promessas.
queueMicrotask(() => {
    console.log(2);
});

// (5) Macrotask que aguarda o evento de temporizador ser acionado. 
setTimeout(() => {
    console.log(3);
}, 1000);

console.log(4); // (2) Execução Síncrona.

// (4) Adiciona uma microtask. Sendo ela abaixo uma Promise, ela será executada antes do setTimeout.
Promise.resolve(true).then(() => {
    console.log(5);
});


/*
    Resumo da Execução:
    (1) -> console.log(1) - Impresso Imediatamente no console. console.log() é síncrono, então ele é executado imediatamente.
    (2) -> console.log(4) - Execução Síncrona. (Execução Síncrona -> funções normais sem setTimeout, Promise, async)
    
    (5) -> queueMicrotask(() => console.log(2)) - Microtask são executadas logo após o código síncrono, antes de qualquer macrotask. E queueMicrotask() tem prioridade ligeiramente maior que Promise.resolve().then()
    (4) -> Promise.resolve().then(() => console.log(5)) - Microtask. Promises sempre executam antes de setTimeout.

    (5) -> setTimeout(() => console.log(3), 1000) - Macrotask que aguarda o evento de temporizador ser acionado. Executa somente depois que todo o código síncrono e microtasks forem processadas.

    Pois o Event Loop verifica a Call Stack e a Callback Queue, e como a Promise é uma Microtask, ela será executada antes do setTimeout que é uma Macrotask.
    
*/

