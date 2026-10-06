const sandubaBasePath = location.pathname.startsWith('/sanduba/')
  ? '/sanduba/'
  : '/'

document.querySelectorAll('[data-home]').forEach((link) => {
  link.href = `${sandubaBasePath}index.html`
})
