const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]


//crescente
numeros.sort((a, b) => {
    return a - b
});
console.log(numeros);

//decrescente
numeros.sort((a, b) => {
    return b - a
});
console.log(numeros);

//crescente
frutas.sort((a, b) => {
    return a.localeCompare(b);
});
console.log(frutas);

//decrescente
frutas.sort((a, b) => {
    return b.localeCompare(a);
});
console.log(frutas);

//quantidade de caracteres
frutas.sort((a, b) => {
    return a.length - b.length;
});
console.log(frutas);
