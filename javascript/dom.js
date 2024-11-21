document.addEventListener('DOMContentLoaded', () => {
    // Verifica se o usuário está logado
    const logado = localStorage.getItem('logado');
    
    // Seleciona os elementos relevantes da página
    const filtroMain = document.getElementById('filtro-main');
    const cards = document.getElementById('cards-container');
    const mensagemNaoAutenticado = document.getElementById('mensagem-nao-autenticado');
    const jogadorDetalhes = document.getElementById('jogador-detalhes');
    
    // Função para exibir ou ocultar os elementos com base no estado de login
    const exibirConteudo = (logadoStatus) => {
        if (logadoStatus === '1') {
            // Se logado, exibe os elementos relevantes
            if (filtroMain) filtroMain.style.display = 'block';
            if (cards) cards.style.display = 'flex';
            if (jogadorDetalhes) jogadorDetalhes.style.display = 'block';
            if (mensagemNaoAutenticado) mensagemNaoAutenticado.style.display = 'none';
        } else {
            // Se não logado, exibe a mensagem de não autenticado
            if (filtroMain) filtroMain.style.display = 'none';
            if (cards) cards.style.display = 'none';
            if (jogadorDetalhes) jogadorDetalhes.style.display = 'none';
            if (mensagemNaoAutenticado) mensagemNaoAutenticado.style.display = 'block';
        }
    };

    // Chama a função para exibir conteúdo baseado no status de login
    exibirConteudo(logado);
});
