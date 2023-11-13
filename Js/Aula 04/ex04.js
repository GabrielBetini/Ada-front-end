const ano = 2032;
const isLeapYear = LeapYear(ano);

console.log(`${ano} é um ano bissexto? ${isLeapYear}`);

function LeapYear(year) {
	if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
		return true;
	} else {
		return false;
	}
}
