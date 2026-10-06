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

  const orderForm = document.querySelector('#order-form')

  orderForm?.addEventListener('submit', (event) => {
    event.preventDefault()
    orderForm.classList.add('was-validated')

    const receivingFeedback = document.querySelector('#receiving-feedback')
    const paymentFeedback = document.querySelector('#payment-feedback')
    const receivingValid = orderForm.querySelector(
      'input[name="recebimento"]:checked'
    )
    const paymentValid = orderForm.querySelector(
      'input[name="pagamento"]:checked'
    )
    receivingFeedback?.classList.toggle('d-block', !receivingValid)
    paymentFeedback?.classList.toggle('d-block', !paymentValid)

    if (!orderForm.checkValidity()) {
      orderForm.querySelector(':invalid')?.focus()
      return
    }

    orderForm.classList.add('is-submitted')
  })

  orderForm?.addEventListener('reset', () => {
    orderForm.classList.remove('was-validated', 'is-submitted')
    document.querySelector('#receiving-feedback')?.classList.remove('d-block')
    document.querySelector('#payment-feedback')?.classList.remove('d-block')
  })
})

if (themeToggle) atualizarIconeTema()
