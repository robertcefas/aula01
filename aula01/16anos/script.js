function verificarVoto() {
    const idade = document.getElementById('idadeInput').value;
    const resultadoDiv = document.getElementById('resultado');
    
    // Limpar estilos anteriores
    resultadoDiv.className = "resultado";

    if (idade === "") {
        resultadoDiv.innerHTML = "Por favor, digite uma idade.";
        return;
    }

    const nIdade = parseInt(idade);

    if (nIdade < 16) {
        resultadoDiv.innerHTML = "STATUS: NÃO PODE VOTAR";
        resultadoDiv.classList.add('proibido');
    } 
    else if (nIdade >= 16 && nIdade <= 17) {
        resultadoDiv.innerHTML = "STATUS: VOTO OPCIONAL";
        resultadoDiv.classList.add('opcional');
    } 
    else if (nIdade >= 18 && nIdade <= 65) {
        resultadoDiv.innerHTML = "STATUS: VOTO OBRIGATÓRIO";
        resultadoDiv.classList.add('obrigatorio');
    } 
    else {
        // Maiores de 65 anos
        resultadoDiv.innerHTML = "STATUS: VOTO OPCIONAL (Sênior)";
        resultadoDiv.classList.add('opcional');
    }
}