import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";

const html = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

// Recupera o tema salvo
const temaSalvo = localStorage.getItem("tema");
if (temaSalvo) {
	html.setAttribute("data-bs-theme", temaSalvo);
}

// Atualiza o ícone do botão
function atualizarIconeTema() {
	const temaAtual = html.getAttribute("data-bs-theme");

	if (temaAtual === "dark") {
		themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
	} else {
		themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
	}
}

// Alterna o tema
themeToggle.addEventListener("click", () => {
	const temaAtual = html.getAttribute("data-bs-theme");
	const novoTema = temaAtual === "dark" ? "light" : "dark";

	html.setAttribute("data-bs-theme", novoTema);
	localStorage.setItem("tema", novoTema);
	atualizarIconeTema();
});

atualizarIconeTema();
