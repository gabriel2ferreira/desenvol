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
$(document).ready(function() {
  // Adiciona a classe "active" ao link da página atual no menu
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/')+1);
  $('nav a[href="' + filename + '"]').addClass('active');

  // Ativa o menu hamburguer
  $('.menu-toggle').click(function() {
    $(this).toggleClass('active');
    $('nav').toggleClass('active');
  });

  // Fecha o menu quando um link for clicado
  $('nav a').click(function() {
    $('.menu-toggle').removeClass('active');
    $('nav').removeClass('active');
  });

  // Ativa o scroll suave
  $('a[href^="#"]').click(function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
  });
});
