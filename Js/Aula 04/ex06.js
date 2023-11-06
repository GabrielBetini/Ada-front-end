/*
    Exercício 6: Encontrar o menor valor de uma matriz

Dada uma matriz `valores` com 2 linhas e 4 colunas, encontre o menor valor presente na matriz e armazene-o na variável `menorValor`. Utilize o índice para acessar os valores da matriz e realizar as comparações com `Math.min`.
*/

const valores = [
	[15, 12, 18, 10],
	[14, 9, 16, 11],
];

const min = Math.min(
	valores[0][0],
	valores[0][1],
	valores[0][2],
	valores[0][3],
	valores[1][0],
	valores[1][1],
	valores[1][2],
	valores[1][3]
);

console.log(min);
