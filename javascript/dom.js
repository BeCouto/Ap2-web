document.addEventListener('DOMContentLoaded', () => {
    const logado = localStorage.getItem('logado');
    
    const filtroMain = document.getElementById('filtro-main');
    const cardsContainer = document.getElementById('cards-container');
    const mensagemNaoAutenticado = document.getElementById('mensagem-nao-autenticado');
    const jogadorDetalhes = document.getElementById('jogador-detalhes');
    
    const exibirConteudo = (logadoStatus) => {
        if (logadoStatus === '1') {
            if (filtroMain) filtroMain.style.display = 'flex';
            if (cardsContainer) cardsContainer.style.display = 'grid';
            if (jogadorDetalhes) jogadorDetalhes.style.display = 'block';
            if (mensagemNaoAutenticado) mensagemNaoAutenticado.style.display = 'none';
        } else {
            if (filtroMain) filtroMain.style.display = 'none';
            if (cardsContainer) cardsContainer.style.display = 'none';
            if (jogadorDetalhes) jogadorDetalhes.style.display = 'none';
            if (mensagemNaoAutenticado) mensagemNaoAutenticado.style.display = 'block';
        }
    };

    exibirConteudo(logado);
});
