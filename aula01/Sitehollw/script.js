function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resDiv = document.getElementById("resultado");

    if (isNaN(num1) || isNaN(num2)) {
        resDiv.innerHTML = "<p style='color: #ff4d4d; margin-top:15px;'>Faltam números, viajante!</p>";
        return;
    }

    // Processamento
    const soma = num1 + num2;
    const media = soma / 2;
    const produto = num1 * num2;
    const maior = Math.max(num1, num2);
    const menor = Math.min(num1, num2);

    // Saída com estilo Hollow Knight
    resDiv.innerHTML = `
        <div style="margin-top: 20px;">
            <div class="linha-res"><span>Média:</span> <strong>${media.toFixed(1)}</strong></div>
            <div class="linha-res"><span>Soma:</span> <strong>${soma}</strong></div>
            <div class="linha-res"><span>Produto:</span> <strong>${produto}</strong></div>
            <div class="linha-res"><span>Maior:</span> <strong>${maior}</strong></div>
            <div class="linha-res"><span>Menor:</span> <strong>${menor}</strong></div>
        </div>
    `;
}