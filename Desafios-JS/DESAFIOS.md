# Desafios de JavaScript

Faça os exercícios em ordem: cada um reaproveita conceitos importantes para o próximo. Tente resolver sem pesquisar a resposta pronta; se travar, use as dicas no fim de cada desafio.

## 1. Mensagem de boas-vindas — Fácil

Crie as variáveis `nome` e `idade`. Exiba no console uma frase como:

```text
Olá, Ana! Você tem 20 anos.
```

**Pratique:** `const`, `let` e template strings.

**Extra:** se a pessoa tiver 18 anos ou mais, mostre também `Você já pode dirigir.`

## 2. Calculadora de média — Fácil

Crie três notas e calcule a média delas. Mostre a média no console e informe se a pessoa foi aprovada (média maior ou igual a 7), está de recuperação (entre 5 e 6.9) ou foi reprovada.

**Pratique:** operadores aritméticos e `if / else if / else`.

**Dica:** calcule a média antes de comparar os valores.

## 3. Tabuada interativa — Fácil

Peça um número usando `prompt()` e mostre sua tabuada de 1 a 10 no console, por exemplo:

```text
5 x 1 = 5
5 x 2 = 10
```

**Pratique:** conversão com `Number()` e laço `for`.

**Extra:** impeça que letras ou um campo vazio gerem uma tabuada.

## 4. Lista de compras — Fácil/Médio

Crie um array com pelo menos cinco itens de mercado. Exiba cada item no console com sua posição na lista, começando em 1. Depois, adicione um item, remova outro e mostre a lista final.

**Pratique:** arrays, `push`, `splice` e `forEach`.

**Extra:** use `join(', ')` para montar uma frase com todos os itens.

## 5. Palavras repetidas — Médio

Receba uma frase pelo `prompt()`. Informe quantas palavras ela possui e quantas vezes cada palavra aparece, desconsiderando letras maiúsculas e minúsculas.

Exemplo: `Eu gosto de café e eu gosto de JavaScript` deve contabilizar `eu` e `gosto` duas vezes.

**Pratique:** `split`, `toLowerCase`, objetos e laços.

**Dica:** use um objeto em que a chave seja a palavra e o valor seja o contador.

## 6. Catálogo de produtos — Médio

Crie um array de objetos. Cada produto deve ter `nome`, `preco` e `emEstoque`. Em seguida:

- Mostre somente os produtos em estoque.
- Crie uma lista apenas com os nomes dos produtos.
- Calcule o valor total dos produtos em estoque.

**Pratique:** objetos, `filter`, `map` e `reduce`.

**Extra:** ordene os produtos do menor para o maior preço sem alterar o array original.

## 7. Validador de senha — Médio

Crie uma função `validarSenha(senha)` que retorne `true` somente se a senha tiver:

- Pelo menos 8 caracteres;
- Uma letra maiúscula;
- Uma letra minúscula;
- Um número.

Mostre uma mensagem clara dizendo quais regras ainda não foram atendidas.

**Pratique:** funções, `return`, métodos de string e expressões regulares.

**Dica:** teste uma regra por vez para conseguir explicar o erro ao usuário.

## 8. Cronômetro — Médio/Difícil

Faça uma página com um contador em segundos e três botões: **Iniciar**, **Pausar** e **Zerar**. O contador não pode criar mais de um intervalo caso a pessoa clique várias vezes em Iniciar.

**Pratique:** DOM, eventos de clique, `setInterval`, `clearInterval` e estado da aplicação.

**Extra:** apresente o tempo no formato `mm:ss`.

## 9. Lista de tarefas — Difícil

Crie uma página onde seja possível adicionar tarefas, marcá-las como concluídas e removê-las. Cada tarefa deve ter um texto e um identificador único.

Regras:

- Não aceitar tarefa vazia;
- Exibir a quantidade de tarefas pendentes;
- Aplicar uma classe CSS diferente às tarefas concluídas;
- Usar delegação de eventos para os botões de concluir e remover.

**Pratique:** formulários, criação de elementos, `dataset`, classes CSS e eventos no DOM.

## 10. Lista de tarefas persistente — Difícil

Evolua o desafio anterior para que as tarefas continuem existindo após atualizar a página.

Regras:

- Salve o array de tarefas no `localStorage`;
- Recupere e renderize as tarefas ao abrir a página;
- Mantenha o estado de concluída ao salvar;
- Inclua um filtro: todas, pendentes e concluídas.

**Pratique:** `localStorage`, `JSON.stringify`, `JSON.parse`, funções de renderização e organização de estado.

**Desafio final:** se o conteúdo salvo estiver inválido, trate o erro sem quebrar a página.

---

Quando terminar um exercício, guarde seu código em uma pasta própria, como `desafio-01`, `desafio-02` e assim por diante. Assim você poderá comparar sua evolução depois.
