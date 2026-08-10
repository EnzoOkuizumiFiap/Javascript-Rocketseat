# Estudos de JavaScript — Rocketseat

Repositório com a minha evolução nos estudos de JavaScript, organizada do nível iniciante ao avançado. Os exercícios combinam explicações comentadas no código com pequenas aplicações de navegador, cobrindo fundamentos da linguagem, DOM, orientação a objetos, assincronismo, APIs e ferramentas modernas de build.

## Tecnologias praticadas

- HTML5 e CSS3 para estrutura e interface das páginas;
- JavaScript moderno (ES6+);
- DOM, eventos e formulários;
- `Intl`, `Date` e `Day.js` para datas, horas e formatação;
- Fetch API, JSON e json-server;
- ES Modules, Babel e Webpack.

## Projetos desenvolvidos

- **Convert:** conversor de dólar, euro e libra para real, com validação de entrada e formatação monetária.
- **Refund:** gerenciador de solicitações de reembolso que adiciona e remove despesas, calcula a quantidade de itens e atualiza o total.
- **API de produtos:** laboratório de comunicação entre navegador e uma API local, consultando, filtrando e cadastrando produtos.
- **Hair Day:** agenda de atendimentos para salão, com horários disponíveis, cadastro e cancelamento de agendamentos por data.

## Organização do repositório

```text
.
├── Iniciante/       # Fundamentos da linguagem e primeiras interações com o DOM
├── Intermediario/   # Objetos, coleções, datas, POO e projeto de reembolso
└── Avancado/        # Recursos modernos, APIs, ferramentas e agenda Hair Day
```

Os projetos sem `package.json` são exemplos estáticos: basta abrir o respectivo `index.html` no navegador. Os projetos que precisam de Node.js possuem instruções específicas na seção [Como executar](#como-executar).

## Nível iniciante

1. [Projeto 01](./Iniciante/Projeto-01/) — Fundamentos de JavaScript

   Estudo de declaração e reatribuição de variáveis com `var`, `let` e `const`; escopo global, de bloco e de função; hoisting; tipos primitivos e não primitivos; coerção de tipos; operadores aritméticos, relacionais, de atribuição e lógicos. Também pratica condicionais (`if`, `else if` e `switch`), valores truthy/falsy, tratamento de exceções com `try...catch`, funções, parâmetros padrão, retorno, JSDoc, funções anônimas, callbacks e arrow functions.

2. [Projeto 02](./Iniciante/Projeto-02/) — Manipulação inicial do DOM

   Explora seleção de elementos com `getElementById`, `getElementsByClassName`, `getElementsByTagName`, `querySelector` e `querySelectorAll`. O código altera textos, estilos, classes e atributos, além de criar e inserir elementos com `createElement`, `append`, `prepend` e `appendChild`. Inclui a introdução a eventos de clique.

3. [Projeto 02 atualizado](./Iniciante/Projeto-02-atualizado/) — Lista de convidados interativa

   Evolução do exercício de DOM para uma interface que recebe nomes por formulário e adiciona convidados à lista. Pratica eventos específicos de elementos, `addEventListener`, prevenção do comportamento padrão do formulário, eventos de teclado e entrada, leitura/limpeza de `input.value`, validação com expressões regulares e controle de scroll da lista.

4. [Projeto 02 debug](./Iniciante/Projeto-02-debug/) — Depuração no navegador

   Versão usada para praticar a identificação de falhas no DevTools, usando breakpoints e inspeção do estado durante a execução.

5. [Projeto 03 — Convert](./Iniciante/Projeto-03-convert-template/) — Conversor de moedas

   Aplicação de conversão para real a partir de USD, EUR e GBP. Restringe o campo de valor a números com RegExp, intercepta o envio do formulário, escolhe a cotação via `switch`, calcula o resultado e o apresenta formatado em BRL com `toLocaleString`. Também controla a exibição do resultado por classe CSS e trata possíveis erros da conversão.

## Nível intermediário

1. [Projeto 04](./Intermediario/Projeto-04/) — Objetos, strings e arrays

   Pratica criação, acesso e alteração de objetos por notação de ponto e colchetes, métodos e funções construtoras. Nos textos, cobre `toUpperCase`, `toLowerCase`, `length`, `replace`, `slice`, `trim`, `padStart`, `padEnd`, `split`, `join`, `indexOf` e `includes`. Nos arrays, trabalha construção, índice, `length`, conversão de string, `push`, `unshift`, `pop`, `shift`, `splice` e coleções com valores de diferentes tipos.

2. [Projeto 05](./Intermediario/Projeto-05/) — Estruturas de repetição

   Exercícios de `while`, `do...while` e `for`, incluindo tabuada. Compara `for...in` para propriedades de objetos e `for...of` para valores iteráveis, além de usar `break` para encerrar e `continue` para pular iterações.

3. [Projeto 06](./Intermediario/Projeto-06/) — Datas, horas e internacionalização

   Estudo da API `Date`: criação de datas, getters e setters, timestamp, conversões para texto e formatação manual. Usa `toLocaleDateString`, `toLocaleTimeString`, `toLocaleString` e `Intl.DateTimeFormat` para adaptar datas e moeda ao locale, além de abordar fuso horário e ISO 8601.

4. [Projeto 07](./Intermediario/Projeto-07/) — Classes, herança e erros

   Cria classes com construtor, propriedades e métodos de instância; compara métodos estáticos com dados da instância; aplica herança com `extends` e sobrescrita de métodos. Também explora cadeia de protótipos, `try...catch`, `Error`, `RangeError`, `instanceof` e uma classe de erro personalizada.

5. [Projeto 08 — Refund](./Intermediario/Projeto-08-refund/) — Controle de solicitações de reembolso

   Aplicação completa de despesas no navegador. O formulário recebe descrição, categoria e valor; o campo monetário é normalizado enquanto o usuário digita; cada despesa gera dinamicamente um item com ícone correspondente. A aplicação calcula quantidade e total em BRL, limpa e reposiciona o formulário após o cadastro e usa delegação de eventos para remover itens da lista. A interface também é responsiva para telas menores.

## Nível avançado

1. [Projeto 09](./Avancado/Projeto-09/) — Recursos modernos de arrays e objetos

   Estuda `"use strict"`, suas restrições e erros antes silenciosos. Pratica desestruturação de arrays e objetos, parâmetros rest, spread, callbacks e métodos funcionais: `map`, `filter`, `findIndex`, `find`, `every`, `some` e `reduce`.

2. [Projeto 10](./Avancado/Projeto-10/) — Imutabilidade

   Demonstra a diferença entre referência e cópia em objetos e arrays. Aplica spread para cópias imutáveis, diferencia shallow copy de deep copy em estruturas aninhadas, usa `Object.freeze` e implementa um `deepFreeze` recursivo com `Reflect.ownKeys`. Finaliza atualizando objetos sem alterar o original e removendo propriedades com rest destructuring.

3. [Projeto 11](./Avancado/Projeto-11/) — ES Modules e temporizadores

   Organiza uma calculadora em módulos com exports nomeados, default, renomeados e importação por namespace. Também exporta e instancia uma classe `Calc`. O arquivo principal usa `type="module"` e apresenta `setTimeout`, `setInterval` e `clearInterval`.

4. [Projeto 12](./Avancado/Projeto-12/) — Assincronismo e Event Loop

   Exercícios com operações assíncronas simuladas por `Promise`, consumo com `.then()`/`.catch()` e a sintaxe `async`/`await`. O material também observa a ordem de execução entre código síncrono, timers e a fila de tarefas do Event Loop.

5. [Projeto 13](./Avancado/Projeto-13/) — Pacotes e Day.js

   Introduz o papel de bibliotecas e gerenciadores de pacotes. Usa Day.js no navegador para criar e formatar datas, e registra os conceitos de Node.js, npm e resolução de dependências.

6. [Projeto 14](./Avancado/Projeto-14/) — API local com json-server

   Este projeto simula o front-end de um catálogo de produtos conectado a uma API local. O `server.json` funciona como banco de dados simples e o json-server disponibiliza a rota `/products` na porta `3333`.

   No código, pratiquei GET para listar produtos, busca de um item pelo ID e POST para cadastrar um produto a partir do formulário. A mesma requisição é apresentada primeiro com Promises (`.then()`) e depois com `async`/`await`, reforçando o ciclo completo de solicitar, converter a resposta para JSON e trabalhar com os dados recebidos.

7. [Projeto 15](./Avancado/Projeto-15/) — Babel e Webpack

   Projeto voltado à preparação de uma aplicação JavaScript para desenvolvimento e produção. O Babel transforma recursos modernos da linguagem para versões compatíveis com os navegadores definidos em `babel.config.js`.

   Depois, o Webpack recebe `src/js/index.js` como ponto de entrada, reúne módulos JavaScript e CSS, gera o HTML final e entrega tudo na pasta `dist`. Também foi configurado um servidor de desenvolvimento, permitindo acompanhar alterações sem montar os arquivos manualmente.

8. [Projeto 16 — Hair Day](./Avancado/Projeto-16/) — Agenda de atendimento

   Projeto final que simula a agenda de uma barbearia/salão. O usuário escolhe uma data, informa o cliente e seleciona um horário; a aplicação impede o agendamento de horários passados ou já ocupados e organiza os atendimentos em manhã, tarde e noite.

   A interface consulta a API local ao carregar e a cada troca de data. Ao confirmar um agendamento, envia um POST para `/schedules`; ao clicar no ícone de cancelamento, envia um DELETE. Depois de atualizar os dados, a tela é renderizada novamente para refletir a agenda disponível.

   A arquitetura separa responsabilidades em `modules` (eventos e renderização), `services` (requisições HTTP), `utils` (horários de atendimento), `libs` (configuração do Day.js) e `styles`. O estado é recalculado após cada carregamento para manter a lista, os horários disponíveis e a seleção de data consistentes.

## Como executar

### Projetos estáticos

Abra o `index.html` do exercício desejado no navegador. Para desenvolvimento com recarregamento automático, pode-se usar uma extensão como Live Server no editor.

### Projeto 14 — API de produtos

Em um terminal, inicie a API local:

```bash
cd Avancado/Projeto-14
npm install
npm run server
```

Com o servidor em execução na porta `3333`, abra `index.html` no navegador.

### Projeto 15 — Babel e Webpack

```bash
cd Avancado/Projeto-15
npm install
npm run build          # Compila script.js com Babel
npm run build:webpack  # Gera o bundle de produção em dist/
npm run dev:webpack    # Inicia o servidor de desenvolvimento
```

### Projeto 16 — Hair Day

São necessários dois terminais: um para a API e outro para a interface.

```bash
cd Avancado/Projeto-16
npm install
npm run server
```

Em outro terminal, na mesma pasta:

```bash
npm run dev
```

A API é servida em `http://localhost:3333` e o Webpack abre a interface na porta configurada pelo projeto (`3000`).

## Próximos estudos consolidados neste repositório

- Escrever código modular e reutilizável;
- Manipular interfaces sem frameworks, entendendo o DOM por baixo;
- Consumir e persistir dados por APIs HTTP;
- Tratar entradas do usuário, erros e estados de interface;
- Preparar aplicações front-end para desenvolvimento e distribuição com Babel e Webpack.
