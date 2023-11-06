/* 
    Exercício 2: Média dos elementos de um vetor

Dado um vetor `notas` com 4 elementos, calcule a média aritmética de todos os valores e armazene o resultado na variável `media`. Utilize o índice para acessar os valores do vetor e realizar os cálculos.
*/

const notas = [17, 28, 39, 96, 55];

let media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / notas.length;

console.log(media);
