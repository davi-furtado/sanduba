const sandubaBasePath = location.pathname.startsWith('/sanduba/')
  ? '/sanduba/'
  : '/'

const appendStylesheet = (href) => {
  const stylesheet = document.createElement('link')
  stylesheet.rel = 'stylesheet'
  stylesheet.href = `${sandubaBasePath}${href}`
  document.head.appendChild(stylesheet)
}

const appendScript = (src) => {
  const script = document.createElement('script')
  script.src = `${sandubaBasePath}${src}`
  document.body.appendChild(script)
}

const icon = document.createElement('link')
icon.rel = 'icon'
icon.href = `${sandubaBasePath}favicon.ico`
document.head.appendChild(icon)
appendStylesheet('css/bootstrap.min.css')
appendStylesheet('css/bootstrap-icons.css')
appendStylesheet('css/style.css')

document.querySelectorAll('[data-home]').forEach((link) => {
  link.href = `${sandubaBasePath}index.html`
})

appendScript('js/bootstrap.bundle.min.js')
appendScript('js/main.js')
