const number = 747;
const isPalindrome = Palindrome(number);

console.log(`${number} é um numero Palindromo? ${isPalindrome}`);

function Palindrome(number) {
	const numberBackwards = parseInt(number.toString().split('').reverse().join(''));

	if (number === numberBackwards) {
		return true;
	} else {
		return false;
	}
}
