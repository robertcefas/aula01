document.getElementById('retirementForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura de dados
    const codigoInput = document.getElementById('codigo');
    const nascimentoInput = document.getElementById('nascimento');
    const tempoInput = document.getElementById('tempoTrabalho');
    
    // Convertendo inputs para números
    const codigo = parseInt(codigoInput.value);
    const anoNascimento = parseInt(nascimentoInput.value);
    const tempoTrabalho = parseInt(tempoInput.value);
    
    // Cálculo da idade usando o ano atual (2026 neste exemplo)
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;

    // Lógica principal (Operação OU / OR)
    // Requisito: Ter 65 anos OU ter 30 anos de trabalho
    const podeAposentar = (idade >= 65) || (tempoTrabalho >= 30);

    // Preparando elementos de exibição
    const resCodigo = document.getElementById('resCodigo');
    const resIdade = document.getElementById('resIdade');
    const resTempo = document.getElementById('resTempo');
    const statusBox = document.getElementById('statusBadge');
    const resultDiv = document.getElementById('resultado');

    // Preenchendo os dados
    resCodigo.textContent = codigo;
    resIdade.textContent = idade;
    resTempo.textContent = tempoTrabalho;
    
    // Exibindo o resultado
    resultDiv.classList.remove('hidden');

    // Configurando a mensagem e o estilo da badge
    if (podeAposentar) {
        statusBox.textContent = "Pronto para a Aposentadoria (Yeeaah!)";
        statusBox.className = "badge success"; // Estilo verde
    } else {
        statusBox.textContent = "Ainda não pode aposentar (Continue servindo Hambúrgueres!)";
        statusBox.className = "badge danger"; // Estilo vermelho
    }
});