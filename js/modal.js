const modalBtn = document.querySelector(".modal-btn");
const modalContent = document.querySelector(".modal-content");
const modal = document.querySelector(".modal");
const btnFechar = document.querySelector(".btn-fechar")

modalBtn.addEventListener("click", (event) => {
    modal.classList.toggle("active");
    event.stopPropagation();
});


document.addEventListener("click", (event) => {
    if (modal.classList.contains("active") && !modalContent.contains(event.target)) {
        modal.classList.remove("active");
    }
});

btnFechar.addEventListener("click", () => {
    modal.classList.remove("active");
})
