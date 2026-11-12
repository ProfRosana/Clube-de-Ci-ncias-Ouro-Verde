/* =========================================================
   CARTÕES QUE ABREM UMA JANELA
   ---------------------------------------------------------
   Este arquivo é usado por todas as páginas com cartões
   (class="card-topico"). Ao clicar em "Ler mais", o texto
   completo do cartão abre numa janela, igual às receitas.

   O estudante NÃO precisa mexer aqui. Basta escrever o
   cartão no HTML seguindo o modelo da página.
========================================================= */

(function () {

    const cartoes = document.querySelectorAll('.card-topico');

    if (cartoes.length === 0) {
        return;
    }

    /* Cria a janela uma única vez */
    const janela = document.createElement('div');
    janela.className = 'modal';
    janela.innerHTML = `
        <div class="modal-conteudo" role="dialog" aria-modal="true">
            <button class="modal-fechar" type="button" aria-label="Fechar">&times;</button>
            <div class="modal-corpo"></div>
        </div>`;
    document.body.appendChild(janela);

    const corpo = janela.querySelector('.modal-corpo');
    const botaoFechar = janela.querySelector('.modal-fechar');

    function abrir(cartao) {
        const etapa = cartao.querySelector('.card-topico-etapa');
        const titulo = cartao.querySelector('h2');
        const imagem = cartao.querySelector('.card-topico-imagem img');
        const texto = cartao.querySelector('.card-topico-texto');

        let html = '';

        if (etapa) {
            html += `<p class="modal-etapa">${etapa.textContent}</p>`;
        }

        html += `<h2 class="modal-titulo">${titulo ? titulo.textContent : ''}</h2>`;

        if (imagem) {
            const legenda = imagem.getAttribute('data-legenda');
            html += `<figure class="modal-imagem">
                        <img src="${imagem.getAttribute('src')}" alt="${imagem.getAttribute('alt') || ''}">
                        ${legenda ? `<figcaption>${legenda}</figcaption>` : ''}
                     </figure>`;
        }

        html += `<div class="modal-texto">${texto ? texto.innerHTML : ''}</div>`;

        corpo.innerHTML = html;
        janela.classList.add('ativo');
        document.body.style.overflow = 'hidden';
        botaoFechar.focus();
    }

    function fechar() {
        janela.classList.remove('ativo');
        document.body.style.overflow = '';
    }

    cartoes.forEach(function (cartao) {
        const botao = cartao.querySelector('.card-topico-botao');
        if (botao) {
            botao.addEventListener('click', function () {
                abrir(cartao);
            });
        }
    });

    botaoFechar.addEventListener('click', fechar);

    /* Fecha ao clicar fora da janela ou apertar Esc */
    janela.addEventListener('click', function (evento) {
        if (evento.target === janela) {
            fechar();
        }
    });

    document.addEventListener('keydown', function (evento) {
        if (evento.key === 'Escape') {
            fechar();
        }
    });

})();
