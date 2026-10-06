# Sanduba Lanches

Site estático de cardápio e pedidos, desenvolvido com HTML, CSS, JavaScript e Bootstrap.

## Desenvolvimento

O projeto não usa bundler no deploy. Para atualizar os arquivos locais do Bootstrap e iniciar um servidor HTTP:

```bash
npm install
npm run prepare-assets
python -m http.server
```

Depois, acesse `http://localhost:8000`.

As páginas publicadas são `index.html`, `cardapio.html`, `pedido.html` e `404.html`. Os links usam caminhos relativos para funcionar tanto na raiz quanto em uma subpasta do GitHub Pages. O `404.html` detecta o caminho base e injeta dinamicamente os links para estilos, scripts, ícone e página inicial.
