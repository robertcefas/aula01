function processar() {
    // Busca os elementos do HTML
    const input1 = document.getElementById("num1");
    const input2 = document.getElementById("num2");
    const output = document.getElementById("resultado");

    // Converte os valores para números
    const n1 = parseFloat(input1.value);
    const n2 = parseFloat(input2.value);

    // Validação: verifica se os números são válidos
    if (isNaN(n1) || isNaN(n2)) {
        output.innerHTML = "<p style='color:red; text-align:center; margin-top:10px;'>Por favor, digite dois números!</p>";
        return;
    }

    // Cálculos
    const soma = n1 + n2;
    const media = soma / 2;
    const produto = n1 * n2;
    const maior = Math.max(n1, n2);
    const menor = Math.min(n1, n2);

    // Exibição (Uma linha para cada resultado)
    output.innerHTML = `
        <div class="item-resultado"><span class="label-res">Média:</span> <span class="valor-res">${media}</span></div>
        <div class="item-resultado"><span class="label-res">Soma:</span> <span class="valor-res">${soma}</span></div>
        <div class="item-resultado"><span class="label-res">Produto:</span> <span class="valor-res">${produto}</span></div>
        <div class="item-resultado"><span class="label-res">Maior:</span> <span class="valor-res">${maior}</span></div>
        <div class="item-resultado"><span class="label-res">Menor:</span> <span class="valor-res">${menor}</span></div>
    `;
}