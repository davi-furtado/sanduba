(() => {
  const basePath = location.pathname.startsWith('/sanduba/') ? '/sanduba/' : '/'
  document.querySelectorAll('[data-base-href]').forEach((link) => {
    link.href = `${basePath}${link.dataset.baseHref || ''}`
  })
  document.querySelectorAll('[data-home]').forEach((link) => {
    link.href = `${basePath}index.html`
  })
})()
