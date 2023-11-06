/*
    Exercício 4: Produto dos elementos de uma matriz

Dada uma matriz com 3 linhas e 3 colunas, calcule o produto de todos os valores e armazene o resultado na variável `produto`. Utilize o índice para acessar os valores da matriz e realizar os cálculos.
*/

const matriz = [
	[2, 4, 6],
	[3, 7, 9],
	[5, 8, 10],
];

const produto =
	matriz[0][0] *
	matriz[0][1] *
	matriz[0][2] *
	matriz[1][0] *
	matriz[1][1] *
	matriz[1][2] *
	matriz[2][0] *
	matriz[2][1] *
	matriz[2][2];

console.log(produto);
