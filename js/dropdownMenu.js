const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", (event) => {
    dropdown.classList.toggle("active");
    event.stopPropagation();
});


document.addEventListener("click", (event) => {
    if (dropdown.classList.contains("active") && !dropdown.contains(event.target)) {
        dropdown.classList.remove("active");
    }
});
