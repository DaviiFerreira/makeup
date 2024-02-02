document.addEventListener('DOMContentLoaded', function () {
    const fundo = document.getElementById('fundo');
    const corInput = document.getElementById('cor');
    const transparenciaInput = document.getElementById('transparencia');
    const trocaFundo = document.getElementById('TrocaFundo');
    const tamanhoInput = document.getElementById('tamanho');
    var borrachaInput = document.getElementById('borracha');
    var desenhando = 0;
    var cor;
    var borracha;
    var tamanho = 1;
    var transparencia;
    var todosTrails = [];
    const cursor = document.querySelector('.cursor');
    corInput.addEventListener('input', atualizarEstilo);
    transparenciaInput.addEventListener('input', atualizarEstilo);
    tamanhoInput.addEventListener('input', atualizarEstilo);
    borrachaInput.addEventListener('input', atualizarEstilo);
    trocaFundo.addEventListener('change', trocadorDeFundo);
    function trocadorDeFundo() {
        // Obter o valor selecionado
        var fundoSelecionado = trocaFundo.value;
        console.log(trocaFundo.value);

        // Mudar o fundo da página
        // Adicionar um parâmetro de consulta único para evitar o cache
        var timestamp = new Date().getTime();
        var urlFundo = 'url(Fundo' + fundoSelecionado + '.jpeg' + '?' + timestamp + ')';
        fundo.style.backgroundImage = urlFundo;
        while (todosTrails.length) {
            fundo.removeChild(todosTrails[0]);
            todosTrails.splice(0, 1)
        }

    };
    document.addEventListener('mouseout', function () {
        cursor.style.transition = 'transform 0.15s ease'; // Adicionar a transição de volta
    });
    function atualizarEstilo() {
        cor = corInput.value;
        borracha = borrachaInput.checked;
        console.log(borracha);
        transparencia = transparenciaInput.value;
        tamanho = tamanhoInput.value;
    };
    function addTrail(event) {
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
    };
    function Apaga(event) {
        for (var i = 0; i < todosTrails.length; i++) {
            if ((+event.clientX + +tamanho >= +(todosTrails[i].style.left).slice(0, -2) - +(todosTrails[i].style.height).slice(0, -2)) &&
                ((+event.clientX - +tamanho <= +(todosTrails[i].style.left).slice(0, -2) + +(todosTrails[i].style.height).slice(0, -2))) &&
                (+event.clientY + +tamanho >= +(todosTrails[i].style.top).slice(0, -2) - +(todosTrails[i].style.height).slice(0, -2)) &&
                (+event.clientY - +tamanho <= +(todosTrails[i].style.top).slice(0, -2) + +(todosTrails[i].style.height).slice(0, -2))) {

                fundo.removeChild(todosTrails[i]);
                todosTrails.splice(i, 1)

            }

        }
    }

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
    document.addEventListener("mousemove", function () {
        cursor.style.transition = 'none';
        cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        cursor.style.height = tamanho + 'vh';
        cursor.style.width = tamanho + 'vh';
        cursor.style.border = "2px solid " + cor;
    });
    fundo.addEventListener("mousemove", function (event) {

        if (desenhando) {
            if (borracha == false) {
                addTrail(event);
            }
            if (borracha == true) {
                Apaga(event);
            }
        }
    }
    );

});
