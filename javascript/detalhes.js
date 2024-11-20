function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
function carregarDetalhesJogador(id) {
    fetch(`https://botafogo-atletas.mange.li/2024-1/${id}`)
    .then(response => response.json())
    .then(jogador => {
        console.log('Dados do jogador:', jogador); 
        const container = document.getElementById('jogador-detalhes');
        container.innerHTML = ''; 
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="imagem">
                <img src="${jogador.imagem}" alt="Foto de ${formatarNome(jogador.nome)}">
            </div>
            <div class="container">
                <h2>${formatarNome(jogador.nome)}</h2>
                <p><span>Posição:</span> ${jogador.posicao}</p>
                <p><span>Nome Completo:</span> ${formatarNome(jogador.nome) || 'Não disponível'}</p>
                <p><span>Nascimento:</span> ${jogador.nascimento || 'Não disponível'}</p>
                <p><span>Naturalidade:</span> ${jogador.naturalidade || 'Não disponível'}</p>
                <p><span>Altura:</span> ${jogador.altura || 'Não disponível'}</p>
                <p><span>No Botafogo desde:</span> ${jogador.no_botafogo_desde || 'Não disponível'}</p>
                <p><span>Nº de Jogos:</span> ${jogador.n_jogos || 'Não disponível'}</p>
                <p><span>Descrição:</span> ${jogador.detalhes || 'Não disponível'}</p>
                <button onclick="voltar()">Voltar</button>
            </div>
        `;
        container.appendChild(card);
    })
    .catch(error => console.error('Erro ao carregar detalhes do jogador:', error));
}
function voltar() {
    window.history.back();
}
document.addEventListener('DOMContentLoaded', () => {
    const jogadorId = getQueryParam('id');
    if (jogadorId) {
        carregarDetalhesJogador(jogadorId);
    } else {
        console.error('ID do jogador não encontrado na URL');
    }
});