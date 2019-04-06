
(function () {
	const symbols = '()`~!@#$%^&*-+=|{}[]:;<>,.?/';
	const letters = 'qwertyuiopasdfghjklzxcvbnm';
	const numbers = '0123456789';

	const chars = letters + letters.toUpperCase() + numbers + symbols;

	function randomstr(length){
		var result = '';
		for(var i = 0; i < length; i++){
			result += chars.charAt(Math.random() * chars.length);
		}
		return result;
	}

	const button = document.getElementById('generate-button');
	button.addEventListener('click', function () {
		const length = parseInt(document.getElementById('length').value, 10);
		const num = parseInt(document.getElementById('num').value, 10);

		const output = document.getElementById('output');
		output.innerHTML = '';

		for(let i = 0; i < num; i++){
			const input = document.createElement('input');
			input.type = 'text';
			input.value = randomstr(length);
			output.appendChild(input);
		}
	});
})();
