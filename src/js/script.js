const links = document.querySelectorAll(".header-menu a");

function ativarlinks(link) {
  const url = location.href;
  const href = link.href;

  if(url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarlinks);

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if(elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);


const perguntas = document.querySelectorAll(".perguntas button");


function ativarPergunta(_event) {
  const pergunta = _event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");

  
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativo");
  const ativo = resposta.classList.contains("ativo");
  pergunta.setAttribute("aria-expanded", ativo);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

const containerGaleria = document.querySelector(".bicicleta-img_");
const galeria = document.querySelectorAll(".bicicleta-img_ img");

function trocarImg(_event) {
  const img = _event.currentTarget;

  const media = matchMedia("@media(min-width: 1000px").matches;
  
  if(media) {
    containerGaleria.prepend(img);
  }
}

function eventosGaleria(imagem) {
  imagem.addEventListener("click", trocarImg);
}

galeria.forEach(eventosGaleria);