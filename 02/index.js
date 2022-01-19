const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]
const maiorNumero = cidades.reduce((acumulador, elementoAtual, indice, array) => {
    let maior = acumulador;
    if (elementoAtual > maior) {
        maior = elementoAtual
    }
    return maior;
});
console.log(maiorNumero)