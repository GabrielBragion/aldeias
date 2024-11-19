// Função que verifica o localStorage e controla a exibição das animações
function verificarAnimacaoEntrada() {
  // Verifica se o usuário já acessou o site antes
  const usuarioJaAcessou = localStorage.getItem("animacaoExibida");

  if (!usuarioJaAcessou) {
    // Se não acessou, executa a animação e define a chave no localStorage
    document.querySelector(".animacaoEntrada").classList.add("ativa-animacao");
    document.querySelector(".border-bottom-header").classList.add("ativa-animacao");
    document.querySelector(".grid-home").classList.add("ativa-animacao");
    document.querySelector(".carousel-home").classList.add("ativa-animacao");
    document.querySelector(".video-home").classList.add("ativa-animacao");
    document.querySelector(".footer-home").classList.add("ativa-animacao");

    // Define uma chave no localStorage para indicar que o usuário já viu a animação
    localStorage.setItem("animacaoExibida", "true");
  } else {
    // Se já acessou, remove a animação de entrada
    document.querySelector(".animacaoEntrada").style.display = "none";
  }
}

// Executa a verificação assim que a página é carregada
document.addEventListener("DOMContentLoaded", verificarAnimacaoEntrada);