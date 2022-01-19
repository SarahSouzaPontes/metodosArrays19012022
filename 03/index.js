//Utilizando `reduce()` faça um programa que determina o maior valor de um array de números inteiros e imprima o resultado.
const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]
const maiorNumero = numeros.reduce((acumulador, elementoAtual, indice, array) => {
    let maior = acumulador;
    if (elementoAtual > maior) {
        maior = elementoAtual
    }
    return maior;
});
console.log(maiorNumero)