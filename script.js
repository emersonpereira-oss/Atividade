// Botão voltar ao topo
document.querySelectorAll("#voltarTopo").forEach(btn => {
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Rolar até seção
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Interatividade no formulário
const form = document.getElementById("formContato");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    alert(`Obrigado pelo contato, ${nome}! Entraremos em breve em contato.`);
    form.reset();
  });
}
