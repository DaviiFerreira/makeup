document.addEventListener('DOMContentLoaded', function () {
    const fundo = document.getElementById('fundo');
    const corInput = document.getElementById('cor');
    const transparenciaInput = document.getElementById('transparencia');
    const tamanhoInput = document.getElementById('tamanho');
    var desenhando = 0;
    corInput.addEventListener('input', atualizarEstilo);
    transparenciaInput.addEventListener('input', atualizarEstilo);
    tamanhoInput.addEventListener('input', atualizarEstilo);
    var numeroDeTrails = 0;
    function atualizarEstilo() {
        cor = corInput.value;
        console.log(cor);
        transparencia = transparenciaInput.value;
        tamanho = tamanhoInput.value;
    };
    fundo.addEventListener("mousedown", function (event) {
        if (event.button === 0) {
            desenhando = 1;

        }


    });
    fundo.addEventListener("mouseup", function (event) {
        if (event.button === 0) {
            desenhando = 0;

        }

    });
    fundo.addEventListener("mousemove", function (event) {
        if (desenhando) {
            var trail = document.createElement('div');
            trail.classList.add('trail');
            trail.style.position = 'absolute';
            trail.style.left = event.clientX + 'px';
            trail.style.top = event.clientY + 'px';
            trail.style.background = cor;
            trail.style.height = tamanho + "vh";
            trail.style.width = tamanho + "vh";
            trail.style.opacity = transparencia;
            fundo.appendChild(trail);
            numeroDeTrails++;
        }
    });

});
