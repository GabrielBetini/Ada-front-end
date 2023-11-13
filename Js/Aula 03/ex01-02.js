/**
    1. **Criando uma lista de contatos**

Crie uma lista de contatos, essa lista deve ter o seguintes dados:

- Nome
- Telefone
- Endereço
    - Nome da rua
    - Número da residência
    - Nome do bairro
- Data de nascimento

###
 */

var listaContato = {
	nome: 'Gabriel Betini',
	telefone: '11990198888',
	endereco: {
		rua: 'Rio Das Contas',
		numero: '333',
		bairro: 'Jardim Marabá',
	},
	dataNascimento: new Date('2001/01/14'),
};

console.log(listaContato);

/**
 * ### 2. Percorrendo a lista de contato

Crie um laço de repetição que percorra toda a lista de contatos e mostre uma frase contento Nome, Telefone, Endereço e data de nascimento, exemplo:

Bonus: Utilizar template string
 */

let str = '';

for (let i = 0; i <= listaContato.lenght; i++) {
	str = str + listaContato[i] + '';
}

console.log(str);
