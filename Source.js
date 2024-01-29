const fundo = document.getElementById('fundo');
const corInput = document.getElementById('cor');
const transparenciaInput = document.getElementById('transparencia');

corInput.addEventListener('input', atualizarEstilo);
transparenciaInput.addEventListener('input', atualizarEstilo);

function atualizarEstilo() {
    const cor = corInput.value;
    const transparencia = transparenciaInput.value;
    fundo.style.backgroundColor = cor;
    fundo.style.opacity = transparencia;
}