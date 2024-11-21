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

            if (data.length === 0) {
                container.innerHTML = '<p>Nenhum jogador encontrado.</p>';
                return;
            }

         
            data.forEach(jogador => {
                const card = criarCard(jogador);
                container.appendChild(card);


                setTimeout(() => card.classList.add('visible'), 100);
            });
        })
        .catch(error => console.error('Erro ao buscar dados:', error));
}

function criarCard(jogador) {
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
    return card;
}

function formatarNome(nome) {
    return nome
        .toLowerCase()
        .split(' ')
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
        .join(' ');
}

document.addEventListener('DOMContentLoaded', () => {
    const filtroMain = document.getElementById('filtro-main');


    const inputPesquisa = document.createElement('input');
    inputPesquisa.type = 'text';
    inputPesquisa.id = 'pesquisa-nome';
    inputPesquisa.placeholder = 'BUSQUE POR NOME';
    inputPesquisa.style.padding = '1em';
    inputPesquisa.style.maxWidth = '350px';
    inputPesquisa.style.margin = '0 10px';
    inputPesquisa.style.textAlign = 'center';
    inputPesquisa.style.fontFamily = 'Doto';
    inputPesquisa.style.fontWeight = 1000;


    inputPesquisa.addEventListener('keyup', () => {
        console.log('Buscando jogadores:', inputPesquisa.value); // Diagnóstico
        const valorPesquisa = inputPesquisa.value.toLowerCase();
        const container = document.getElementById('cards-container');
        const cards = Array.from(container.querySelectorAll('.card'));
    
        cards.forEach(card => {
            const nomeJogador = card.querySelector('h2 b').textContent.toLowerCase();
            const posicaoJogador = card.querySelector('p').textContent.toLowerCase();
            card.style.display =
                nomeJogador.includes(valorPesquisa) || posicaoJogador.includes(valorPesquisa)
                    ? 'block'
                    : 'none';
        });
    });
    


    filtroMain.appendChild(inputPesquisa);


    buscarDados('https://botafogo-atletas.mange.li/2024-1/all');


    const filtroButtons = filtroMain.querySelectorAll('button');
    filtroButtons.forEach(button => {
        button.addEventListener('click', function () {
            filtroButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    document.querySelector('#filtro-main button').classList.add('active');
});
