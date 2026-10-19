
const html = document.documentElement
const themeToggle = document.getElementById('themeToggle')
const orderForm = document.getElementById('order-form')

// Tema
const temaSalvo = localStorage.getItem('tema')
const temaInicial = ['light', 'dark'].includes(temaSalvo)
  ? temaSalvo
  : 'light'

html.setAttribute('data-bs-theme', temaInicial)

function atualizarIconeTema() {
  if (!themeToggle) return

  const temaAtual = html.dataset.bsTheme
  const icone = temaAtual === 'dark' ? 'sun-fill' : 'moon-fill'

  themeToggle.innerHTML = `<i class="bi bi-${icone}" aria-hidden="true"></i>`
  themeToggle.setAttribute(
    'aria-label',
    temaAtual === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'
  )
}

themeToggle?.addEventListener('click', () => {
  const novoTema =
    html.dataset.bsTheme === 'dark' ? 'light' : 'dark'

  html.dataset.bsTheme = novoTema
  localStorage.setItem('tema', novoTema)

  atualizarIconeTema()
})

atualizarIconeTema()

// Validação do formulário
if (orderForm) {
  const receivingFeedback = document.getElementById(
    'receiving-feedback'
  )
  const paymentFeedback = document.getElementById(
    'payment-feedback'
  )

  function validarGrupo(nome, feedback) {
    const selecionado = orderForm.querySelector(
      `input[name="${nome}"]:checked`
    )

    const invalido = !selecionado

    feedback?.classList.toggle('d-block', invalido)

    orderForm
      .querySelectorAll(`input[name="${nome}"]`)
      .forEach((input) => {
        input.setAttribute('aria-invalid', String(invalido))
      })

    return !invalido
  }

  function validarFormulario() {
    const recebimentoValido = validarGrupo(
      'recebimento',
      receivingFeedback
    )

    const pagamentoValido = validarGrupo(
      'pagamento',
      paymentFeedback
    )

    const camposValidos = orderForm.checkValidity()

    return recebimentoValido && pagamentoValido && camposValidos
  }

  orderForm.addEventListener('submit', (event) => {
    event.preventDefault()

    orderForm.classList.add('was-validated')
    orderForm.classList.remove('is-submitted')

    if (!validarFormulario()) {
      const primeiroCampoInvalido = orderForm.querySelector(':invalid')

      if (primeiroCampoInvalido) {
        primeiroCampoInvalido.focus()
      } else {
        const primeiroGrupoInvalido = [
          ['recebimento', receivingFeedback],
          ['pagamento', paymentFeedback],
        ].find(([nome]) => {
          return !orderForm.querySelector(
            `input[name="${nome}"]:checked`
          )
        })

        if (primeiroGrupoInvalido) {
          orderForm
            .querySelector(`input[name="${primeiroGrupoInvalido[0]}"]`)
            ?.focus()
        }
      }

      return
    }

    orderForm.classList.add('is-submitted')

    // Formulário válido: prossiga com o envio ou processamento do pedido.
  })

  // Atualiza o feedback quando o usuário escolhe uma opção.
  orderForm
    .querySelectorAll(
      'input[name="recebimento"], input[name="pagamento"]'
    )
    .forEach((input) => {
      input.addEventListener('change', () => {
        if (!orderForm.classList.contains('was-validated')) return

        const grupo = input.name
        const feedback =
          grupo === 'recebimento'
            ? receivingFeedback
            : paymentFeedback

        validarGrupo(grupo, feedback)
      })
    })

  // Valida campos individuais durante a edição, após a primeira tentativa.
  orderForm.addEventListener('input', (event) => {
    if (!orderForm.classList.contains('was-validated')) return

    if (event.target.matches('input, select, textarea')) {
      event.target.setAttribute(
        'aria-invalid',
        String(!event.target.checkValidity())
      )
    }
  })

  orderForm.addEventListener('reset', () => {
    // O reset nativo ocorre depois do evento.
    setTimeout(() => {
      orderForm.classList.remove('was-validated', 'is-submitted')

      orderForm
        .querySelectorAll('[aria-invalid]')
        .forEach((input) => input.removeAttribute('aria-invalid'))

      receivingFeedback?.classList.remove('d-block')
      paymentFeedback?.classList.remove('d-block')
    }, 0)
  })
}
