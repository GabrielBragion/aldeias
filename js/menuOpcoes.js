const btns = document.querySelectorAll(".info-uteis-item");
const opcoes = document.querySelectorAll(".opcao-selecionada");
const opcoesContainer = document.querySelectorAll(".opcao-container");
const btnsPrev = document.querySelectorAll(".btn-opcao-prev");
const btnsNext = document.querySelectorAll(".btn-opcao-next");

let scrollInterval;

// Função para verificar se há scroll e mostrar ou ocultar os botões
function verificarScroll() {
  opcoesContainer.forEach((container, index) => {
    if (container.scrollWidth > container.clientWidth) {
      btnsNext[index].style.display = "block";
      btnsPrev[index].style.display = "block";
    } else {
      btnsNext[index].style.display = "none";
      btnsPrev[index].style.display = "none";
    }
  });
}


function handleSelecao(e) {
  let btn = e.currentTarget;

  // Verifica se o botão já está ativo
  const isActive = btn.classList.contains("active");

  // Remove a classe "active" de todos os botões
  btns.forEach((btn) => btn.classList.remove("active"));

  if (isActive) {
    // Se o botão estava ativo, desativa e esconde todas as opções
    opcoes.forEach((opcao) => (opcao.style.display = "none"));
  } else {
    // Ativa o botão clicado
    btn.classList.add("active");

    // Mostra a opção correspondente ao botão clicado
    const index = Array.from(btns).indexOf(e.currentTarget);

    opcoes.forEach((opcao, idx) => {
      if (idx === index) {
        opcao.style.display = "block";
      } else {
        opcao.style.display = "none";
      }
    });
  }

  // Atualiza a exibição dos botões de scroll
  verificarScroll();
}


// Inicia o scroll contínuo
function startScroll(e) {
  const btn = e.currentTarget;
  const container = btn.parentNode.querySelector(".opcao-container");

  const scrollAmount = 10;
  const direction = btn.classList.contains("btn-opcao-next") ? 1 : -1;

  scrollInterval = setInterval(() => {
    const newScrollPosition = container.scrollLeft + direction * scrollAmount;
    if (newScrollPosition >= 0 && newScrollPosition <= container.scrollWidth - container.clientWidth) {
      container.scrollLeft = newScrollPosition;
    } else {
      clearInterval(scrollInterval);
    }
  }, 10);

  const stopListeners = () => {
    stopScroll();
    btn.removeEventListener("touchend", stopListeners);
    btn.removeEventListener("touchcancel", stopListeners);
    btn.removeEventListener("mouseup", stopListeners);
    btn.removeEventListener("mouseleave", stopListeners);
  };

  btn.addEventListener("touchend", stopListeners);
  btn.addEventListener("touchcancel", stopListeners);
  btn.addEventListener("mouseup", stopListeners);
  btn.addEventListener("mouseleave", stopListeners);
}

// Para o scroll contínuo
function stopScroll() {
  clearInterval(scrollInterval);
}

// Eventos
btns.forEach((btn) => btn.addEventListener("click", handleSelecao));
btnsNext.forEach((btn) => {
  btn.addEventListener("mousedown", startScroll);
  btn.addEventListener("touchstart", startScroll, { passive: true });
});
btnsPrev.forEach((btn) => {
  btn.addEventListener("mousedown", startScroll);
  btn.addEventListener("touchstart", startScroll, { passive: true });
});

// Ajusta os botões ao redimensionar a tela
window.addEventListener("resize", verificarScroll);
