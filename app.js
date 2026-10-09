// Semana 04 — Arrays, DOM e Eventos
// Abra o Console do navegador (F12) para acompanhar os resultados.

// ==============================
// BLOCO 1 — ARRAYS E MÉTODOS
// ==============================

console.log("===== BLOCO 1 — ARRAYS =====");

// forEach: percorre os elementos e executa uma ação para cada um.
const nomes = ["Ana", "Pedro", "Mariana"];
nomes.forEach(nome => {
  console.log(`Olá, ${nome}!`);
});

// map: transforma cada elemento e retorna um novo array.
const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
console.log("Nomes em maiúsculas:", nomesMaiusculos);

const precos = [10, 25, 40, 5, 60];

// filter: retorna um novo array apenas com os elementos que passam na condição.
const precosAcimaDe20 = precos.filter(preco => preco > 20);
console.log("Preços acima de 20:", precosAcimaDe20);

// reduce: acumula os valores e retorna um único resultado.
const somaPrecos = precos.reduce((total, preco) => total + preco, 0);
console.log("Soma dos preços:", somaPrecos);

const produtos = [
  { nome: "Caderno", preco: 15 },
  { nome: "Mochila", preco: 45 },
  { nome: "Caneta", preco: 3 },
  { nome: "Fone", preco: 80 }
];

const nomesProdutos = produtos.map(produto => produto.nome);
console.log("Nomes dos produtos:", nomesProdutos);

const produtosAbaixoDe50 = produtos.filter(produto => produto.preco < 50);
console.log("Produtos com preço menor que R$ 50:", produtosAbaixoDe50);

const somaProdutos = produtos.reduce((total, produto) => total + produto.preco, 0);
console.log("Soma dos preços dos produtos:", somaProdutos);

produtos.forEach(produto => {
  console.log(`${produto.nome}: R$ ${produto.preco.toFixed(2)}`);
});


// ==============================
// BLOCO 2 — MANIPULAÇÃO DO DOM
// ==============================

console.log("===== BLOCO 2 — DOM =====");

// Troque "Seu Nome" pelo seu nome antes de entregar.
const titulo = document.querySelector("#titulo");
titulo.textContent = "Blog do Ilan";

const paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach(paragrafo => {
  console.log("Texto do parágrafo:", paragrafo.textContent);
});

const lista = document.querySelector("#lista");

// Inserir dois itens usando innerHTML, conforme solicitado.
lista.innerHTML = "<li>Primeiro item</li><li>Segundo item</li>";

// Criar o terceiro item e aplicar a classe destaque.
const terceiroItem = document.createElement("li");
terceiroItem.textContent = "Terceiro item";
lista.append(terceiroItem);
terceiroItem.classList.add("destaque");
console.log('O terceiro item tem a classe "destaque"?', terceiroItem.classList.contains("destaque"));

// Criar itens para as tarefas.
const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];
tarefas.forEach(tarefa => {
  const item = document.createElement("li");
  item.textContent = tarefa;
  lista.append(item);
});

// Aplicar "feito" ao primeiro <li> da lista e contar todos os itens.
const primeiroItem = lista.querySelector("li");
if (primeiroItem) {
  primeiroItem.classList.add("feito");
}
console.log("Quantidade de itens na lista após o Bloco 2:", lista.querySelectorAll("li").length);


// ==============================
// BLOCO 3 — EVENTOS E DELEGAÇÃO
// ==============================

console.log("===== BLOCO 3 — EVENTOS =====");

const botao = document.querySelector("#botao");
botao.addEventListener("click", () => {
  console.log("Clicou!");
});

botao.addEventListener("mouseover", () => {
  botao.textContent = "Pode clicar!";
});

const campoNome = document.querySelector("#nome");
campoNome.addEventListener("keyup", () => {
  console.log("Nome digitado:", campoNome.value);
});

// Event Delegation: um único listener na lista trata cliques nos <li>,
// inclusive nos elementos que forem adicionados depois.
lista.addEventListener("click", e => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("feito");
    console.log("Item clicado:", e.target.textContent);
  }
});

// Criar um novo item via JavaScript para demonstrar que a delegação funciona.
const itemDinamico = document.createElement("li");
itemDinamico.textContent = "Item criado dinamicamente — clique aqui";
lista.append(itemDinamico);

// Formulário: impede o recarregamento e adiciona apenas tarefas não vazias.
const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", e => {
  e.preventDefault();

  const textoTarefa = campoTarefa.value.trim();
  if (textoTarefa === "") {
    return;
  }

  const novoItem = document.createElement("li");
  novoItem.textContent = textoTarefa;
  lista.append(novoItem);
  campoTarefa.value = "";
  campoTarefa.focus();
});
