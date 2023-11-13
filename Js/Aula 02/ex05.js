/*
    Exercício 5: Média dos elementos de uma matriz

Dada uma matriz `notas` com 4 linhas e 3 colunas, calcule a média aritmética de todos os valores e armazene o resultado na variável `media`. Utilize o índice para acessar os valores da matriz e realizar os cálculos.
*/

const notas = [
	[17, 28, 11],
	[46, 39, 44],
	[35, 57, 44],
	[48, 39, 88],
];

const media =
	(notas[0][0] +
		notas[0][1] +
		notas[0][2] +
		notas[1][0] +
		notas[1][1] +
		notas[1][2] +
		notas[2][0] +
		notas[2][1] +
		notas[2][2] +
		notas[3][0] +
		notas[3][1] +
		notas[3][2]) /
	12;

console.log(media);
