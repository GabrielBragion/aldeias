const btn = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");

// Função para verificar a largura da tela e ajustar o display do menu
function checkScreenWidth() {
    if (window.innerWidth >= 816) {
        menu.style.display = "flex";
        btn.classList.remove("active")
    }else if(window.innerWidth <= 816 && !btn.classList.contains("active")){
        menu.style.display = "none";
        
    }
}

// Adiciona o evento de clique no botão para alternar o menu
btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
});

// Adiciona o evento de redimensionamento da janela para chamar a função
window.addEventListener("resize", checkScreenWidth);

// Chama a função ao carregar a página para garantir o estado inicial
checkScreenWidth();
