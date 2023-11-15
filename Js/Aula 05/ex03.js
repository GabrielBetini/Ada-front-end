let numerosPrimos = [];
let i = 1;

while (i <= 100) {
	if (i % 2 != 0) {
		numerosPrimos.push(i);
	}

	i++;
}

console.log(`${numerosPrimos.length} números primos: ${numerosPrimos}`);
