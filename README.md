# Semana 04 — Arrays, DOM e Eventos

Projeto prático de JavaScript com três blocos: métodos de arrays, manipulação do DOM e eventos no navegador.

## Arquivos

- `index.html`: estrutura da página e elementos usados nos exercícios.
- `app.js`: código JavaScript dos três blocos.
- `README.md`: documentação do projeto.

## Bloco 1 — Arrays

- **`forEach`** percorre cada elemento para executar uma ação, como imprimir uma saudação.
- **`map`** transforma cada elemento e devolve um novo array, sem alterar o array original.
- **`filter`** cria um novo array somente com os elementos que atendem a uma condição.
- **`reduce`** combina os elementos para produzir um único resultado, como a soma dos preços.

## Bloco 2 — Manipulação do DOM

O código usa `querySelector` e `querySelectorAll` para localizar elementos da página. `textContent` altera texto; `innerHTML` insere os dois primeiros itens da lista; `createElement` cria novos elementos; `append` adiciona esses elementos ao documento. `classList.add`, `classList.contains` e `classList.toggle` permitem aplicar, verificar e alternar classes CSS.

Antes da entrega, substitua **`Seu Nome`** em `app.js` pelo seu nome.

## Bloco 3 — Eventos e Event Delegation

`addEventListener` registra ações para `click`, `mouseover`, `keyup` e `submit`. No formulário, `preventDefault()` impede o recarregamento da página, e `trim()` evita adicionar tarefas vazias ou compostas apenas por espaços.

A **Event Delegation** usa um único listener de clique na `#lista`. O código verifica se `e.target.tagName === "LI"` e alterna a classe `feito` no item clicado. Assim, os itens adicionados dinamicamente também funcionam sem precisar registrar um listener individual para cada `<li>`, reduzindo a quantidade de listeners e facilitando a manutenção.

## Como executar

1. Abra `index.html` em um navegador.
2. Pressione **F12** e selecione a aba **Console** para visualizar os resultados.
3. Passe o mouse sobre o botão e clique nele.
4. Digite no campo de nome, clique nos itens da lista e teste o formulário de nova tarefa.

Os arquivos `index.html` e `app.js` ficam na mesma pasta, como solicitado.
