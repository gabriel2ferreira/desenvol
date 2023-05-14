// Seleciona o botão do menu e as linhas que formam o ícone do menu
const menuBtn = document.querySelector('.menu-btn');
const menuLines = document.querySelectorAll('.line');

// Define o estado inicial do menu
let menuOpen = false;

// Adiciona o evento de clique ao botão do menu
menuBtn.addEventListener('click', () => {
  // Inverte o estado do menu
  menuOpen = !menuOpen;
  // Adiciona ou remove a classe "open" do botão do menu
  menuBtn.classList.toggle('open');
  // Adiciona ou remove a classe "active" das linhas do menu
  menuLines.forEach(line => line.classList.toggle('active'));
});
