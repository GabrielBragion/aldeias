const password = document.getElementById("password-registo");
const confirmPassword = document.getElementById("confirmpassword");
const errorMessage = document.getElementById("error-message");

function validatePassword() {
  // Verifica se os valores dos dois campos são iguais
  if (password.value === confirmPassword.value) {
    errorMessage.style.display = "none";  // Oculta a mensagem de erro
  } else {
    errorMessage.style.display = "inline"; // Exibe a mensagem de erro
    errorMessage.textContent = "As senhas não coincidem";
  }
}

// Executa a validação a cada vez que o usuário digita nos campos
confirmPassword.addEventListener("change", validatePassword);
confirmPassword.addEventListener("blur", validatePassword);
