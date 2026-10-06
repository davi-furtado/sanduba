
const html = document.documentElement
const themeToggle = document.getElementById('themeToggle')

// Recupera o tema salvo
const temaSalvo = localStorage.getItem('tema')
if (temaSalvo) {
  html.setAttribute('data-bs-theme', temaSalvo)
}

// Atualiza o ícone do botão
function atualizarIconeTema() {
  const temaAtual = html.getAttribute('data-bs-theme')

  if (temaAtual === 'dark') {
    themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>'
  } else {
    themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>'
  }
}

// Alterna o tema
themeToggle?.addEventListener('click', () => {
  const temaAtual = html.dataset.bsTheme
  const novoTema = temaAtual === 'dark' ? 'light' : 'dark'

  html.dataset.bsTheme = novoTema
  localStorage.setItem('tema', novoTema)
  if (themeToggle) atualizarIconeTema()
})

if (themeToggle) atualizarIconeTema()
