const botao = document.getElementById("gerarBotão");

botao.addEventListener("click", function () {
    // 1. Corrigido para "Number" (com m)
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);

    // Validação simples
    if (nota1 === 0 && nota2 === 0 && nota3 === 0) {
        document.getElementById("resultadoTabuada").innerText = "Digite as notas";
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;
    let situacao = media >= 7 ? "Aprovado" : "Reprovado";

    // 2. Removido o "this.DOCUMENT_NODE", usando apenas "document"
    document.getElementById("resultadoTabuada").innerText = 
    `Média: ${media.toFixed(2)} - ${situacao}`;
});