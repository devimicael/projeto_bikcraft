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