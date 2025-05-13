// Seleciona os botões
const modoClaro = document.getElementById('modoClaro');
const modoEscuro = document.getElementById('modoEscuro');

// Adiciona o modo claro ao clicar no botão
modoClaro.addEventListener('click', () => {
  document.body.classList.add('modo-claro');
  document.body.classList.remove('modo-escuro');
});

// Adiciona o modo escuro ao clicar no botão
modoEscuro.addEventListener('click', () => {
  document.body.classList.add('modo-escuro');
  document.body.classList.remove('modo-claro');
});
