function sair() {
    localStorage.removeItem('logado');
    window.location.href = 'index.html';
}
function buscarDados(endpoint) {
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('cards-container');
        container.innerHTML = ''; 
        data.forEach(jogador => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${jogador.imagem}" alt="Foto de ${jogador.nome}">
                <div class="container">
                    <h2><b>${formatarNome(jogador.nome)}</b></h2>
                    <p>Posição: ${jogador.posicao}</p>
                    <h4>Veja Mais</h4>
                </div>
            `;
            card.addEventListener('click', () => {
                window.location.href = `detalhes.html?id=${jogador.id}`;
            });
            container.appendChild(card);
            
            setTimeout(() => {
                card.classList.add('visible');
            }, 100);
        });
    })
    .catch(error => console.error('Erro ao buscar dados:', error));
}
document.addEventListener('DOMContentLoaded', () => {
    buscarDados('https://botafogo-atletas.mange.li/2024-1/all');
    const filtroButtons = document.querySelectorAll('#filtro-main button');
    filtroButtons.forEach(button => {
        button.addEventListener('click', function() {
            filtroButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    document.querySelector('#filtro-main button').classList.add('active');
});