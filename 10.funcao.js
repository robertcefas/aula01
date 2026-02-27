// FUNÇÕES

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro: Divisão por zero";
    }
    return a / b;
}

// Chamando as funções
const resultadoSoma = soma(2, 3);
const resultadoSubtracao = subtracao(5, 3);
const resultadoMultiplicacao = multiplicacao(2, 3);
const resultadoDivisao = divisao(10, 2);

console.log("Soma:", resultadoSoma);
console.log("Subtração:", resultadoSubtracao);
console.log("Multiplicação:", resultadoMultiplicacao);
console.log("Divisão:", resultadoDivisao);