//Ex 01

// let idade = prompt('idade:');
// const nacionalidade = prompt('nacionalidade');

// const verificarEligibilidadeVoto = Number(idade) >= 16 && nacionalidade == 'brasileira';

// console.log('Elegível ao voto: ' + verificarEligibilidadeVoto);

//Ex 02

// const salario = Number(prompt('salário: '));
// const scoreCredito = Number(prompt('Score Crédito:'));
// idade = Number(prompt('idade: '));

// const aprovarEmprestimo = salario >= 5000 && scoreCredito >= 700 && idade >= 18;

// console.log('Empréstimo aprovado: ' + aprovarEmprestimo);

//Ex 03

// const navegador = prompt('Navegador');
// const sistemaOperacional = prompt('Sistema Operacional');

// const verificarCompatibilidade =
// 	navegador === 'chrome' ||
// 	(navegador === 'firefox' && sistemaOperacional === 'mac') ||
// 	sistemaOperacional === 'windows';

// console.log('Compatível: ' + verificarCompatibilidade);

//Ex 04

idade = Number(prompt('idade'));
const compraMinima = Number(prompt('Compra minima'));
const isNewClient = Boolean(prompt('Cliente novo?'));

const elegivelParaDesconto = idade >= 60;
