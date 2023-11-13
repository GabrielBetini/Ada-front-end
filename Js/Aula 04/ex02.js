const number = 2;
const isNumberEven = EvenOrOdd(5);

console.log(`Is ${number} an even number: ${isNumberEven}`);

function EvenOrOdd(number) {
	if (number % 2 == 0) {
		return true;
	} else {
		return false;
	}
}
