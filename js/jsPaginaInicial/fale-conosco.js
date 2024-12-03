document.querySelectorAll("input, textarea").forEach((field) => {
  field.oninvalid = function () {
    this.setCustomValidity("Por favor, preencha este campo corretamente!");
  };

  field.oninput = function () {
    this.setCustomValidity("");
  };
});

const button = document.getElementById("botao-receber");

// Adiciona o evento de clique
button.addEventListener("click", () => {
  // Alterna a classe "active"
  button.classList.toggle("receberAtivo");

  // Alterna o texto do botão
  if (button.classList.contains("receberAtivo")) {
    button.textContent = "RECEBER EMAIL";
  } else {
    button.textContent = "NÃO RECEBER EMAIL";
  }
});

document.getElementById("formBase").addEventListener("submit", function (event) {
  const emailInput = document.getElementById("email").value.trim();

  // Expressão regular para validar o e-mail
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailPattern.test(emailInput)) {
      event.preventDefault();
      alert("E-mail inválido! Verifique o formato.");
  }
});


const formulario = document.getElementById('formBase');
    formulario.addEventListener('submit', function() {

      setTimeout(() => {
        formulario.reset();
      }, 500);
    });