const sandubaBasePath = location.pathname.startsWith('/sanduba/')
  ? '/sanduba/'
  : '/'

document.querySelectorAll('[data-home]').forEach((link) => {
  link.href = `${sandubaBasePath}index.html`
})

const themeToggle = document.querySelector('#themeToggle')
const savedTheme =
  localStorage.getItem('tema') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

const renderTheme = (theme) => {
  const isDark = theme === 'dark'
  document.documentElement.setAttribute(
    'data-bs-theme',
    isDark ? 'dark' : 'light'
  )
  themeToggle.innerHTML = isDark
    ? '<i class="bi bi-sun-fill" aria-hidden="true"></i>'
    : '<i class="bi bi-moon-fill" aria-hidden="true"></i>'
  themeToggle.setAttribute(
    'aria-label',
    isDark ? 'Mudar para modo claro' : 'Mudar para modo escuro'
  )
  themeToggle.title = isDark
    ? 'Mudar para modo claro'
    : 'Mudar para modo escuro'
}

if (themeToggle) {
  renderTheme(savedTheme)
  themeToggle.addEventListener('click', () => {
    const nextTheme =
      document.documentElement.dataset.bsTheme === 'dark' ? 'light' : 'dark'
    localStorage.setItem('tema', nextTheme)
    renderTheme(nextTheme)
  })
}
