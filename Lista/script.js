function adicionarJogador() {
    // Pegando os valores dos inputs
    const nomeComp = document.getElementById('nomeCompleto').value;
    const nomeCamisa = document.getElementById('nomeCamisa').value;
    const posicao = document.getElementById('posicao').value;
    const numero = document.getElementById('numeroCamisa').value;

    // Validação simples
    if (!nomeComp || !nomeCamisa || !posicao || !numero) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Selecionando o container da lista
    const lista = document.getElementById('listaJogadores');

    // Criando o elemento do card
    const card = document.createElement('div');
    card.classList.add('card-jogador');

    // Inserindo o HTML interno do card
    card.innerHTML = `
        <div class="numero">${numero}</div>
        <div class="nome-camisa">${nomeCamisa}</div>
        <div class="posicao">${posicao}</div>
        <div class="nome-completo">${nomeComp}</div>
    `;

    // Adicionando o card à lista
    lista.appendChild(card);

    // Limpando os campos após adicionar
    limparCampos();
}

function limparCampos() {
    document.getElementById('nomeCompleto').value = '';
    document.getElementById('nomeCamisa').value = '';
    document.getElementById('posicao').value = '';
    document.getElementById('numeroCamisa').value = '';
}