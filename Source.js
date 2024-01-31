document.addEventListener('DOMContentLoaded', function () {
    const fundo = document.getElementById('fundo');
    const corInput = document.getElementById('cor');
    const transparenciaInput = document.getElementById('transparencia');
    const tamanhoInput = document.getElementById('tamanho');
    var borrachaInput = document.getElementById('borracha');
    var desenhando = 0;
    var todosTrails = [];
    corInput.addEventListener('input', atualizarEstilo);
    transparenciaInput.addEventListener('input', atualizarEstilo);
    tamanhoInput.addEventListener('input', atualizarEstilo);
    borrachaInput.addEventListener('input', atualizarEstilo);
    function atualizarEstilo() {
        cor = corInput.value;
        borracha = borrachaInput.checked;
        console.log(borracha);
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
        if (desenhando && borracha == false) {
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
            todosTrails.push(trail);
        }
        if (desenhando && borracha == true) {
            for (var i = 0; i < todosTrails.length; i++) {
                if ((+event.clientX + +tamanho >= +(todosTrails[i].style.left).slice(0, -2) - +(todosTrails[i].style.height).slice(0, -2))) {
                    if ((+event.clientX - +tamanho <= +(todosTrails[i].style.left).slice(0, -2) + +(todosTrails[i].style.height).slice(0, -2))) {
                        if (+event.clientY + +tamanho >= +(todosTrails[i].style.top).slice(0, -2) - +(todosTrails[i].style.height).slice(0, -2)) {
                            console.log("entrou no if");
                            if (+event.clientY - +tamanho <= +(todosTrails[i].style.top).slice(0, -2) + +(todosTrails[i].style.height).slice(0, -2)) {
                                fundo.removeChild(todosTrails[i]);
                                todosTrails.splice(i, 1)
                                console.log("entrou no if 2");
                            }
                        }

                    }

                }
            }
        }
    });

});
