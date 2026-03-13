function calcularFichas() {
    const input = document.getElementById('quantidade');
    const display = document.getElementById('resultado');
    
    // Converte o valor para número inteiro
    const quantidade = parseInt(input.value);

    // Validação de segurança
    if (isNaN(quantidade) || quantidade <= 0) {
        display.innerText = "INVALID";
        display.style.color = "#ff0000";
        return;
    }

    // Regra de preço: R$1,30 se < 12 | R$1,00 se >= 12
    let preco;
    if (quantidade < 12) {
        preco = 1.30;
    } else {
        preco = 1.00;
    }

    const total = quantidade * preco;

    // Formata o valor final para R$
    display.style.color = "#ffff00";
    display.innerText = "R$ " + total.toFixed(2).replace('.', ',');
}