let color = 'Preto bem Pretao';

switch (color) {
	case 'red':
		color = 'Vermelho';
		break;
	case 'blue':
		color = 'Azul';
		break;
	case 'green':
		color = 'Verde';
		break;
	case 'yellow':
		color = 'Amarelo';
		break;
	case 'black':
		color = 'Preto';
		break;
	default:
		color = 'Não é válida.';
		break;
}

console.log(`Cor inserida: ${color}`);
