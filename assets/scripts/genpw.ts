
const symbols = '()`~!@#$%^&*-+=|{}[]:;<>,.?/';
const letters = 'qwertyuiopasdfghjklzxcvbnm';
const numbers = '0123456789';

const chars = letters + letters.toUpperCase() + numbers + symbols;

function randomstr(length: number): string {
	let result = '';
	for(let i = 0; i < length; i++){
		result += chars.charAt(Math.random() * chars.length);
	}
	return result;
}

const button = document.getElementById('generate-button');
button.addEventListener('click', function () {
	const lengthInput = document.getElementById('length') as HTMLInputElement;
	const numInput = document.getElementById('num') as HTMLInputElement;

	const length = parseInt(lengthInput.value, 10);
	const num = parseInt(numInput.value, 10);

	const output = document.getElementById('output');
	output.innerHTML = '';

	for (let i = 0; i < num; i++) {
		const input = document.createElement('input');
		input.type = 'text';
		input.value = randomstr(length);
		output.appendChild(input);
	}
});
