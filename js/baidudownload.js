
function convertShareText(text) {
	const mt = text.match(/.+?pan\.baidu\.com\/s\/([\w-]+).+?(\w{4}).+?/);
	const fileId = mt[1];
	const filePwd = mt[2];
	return `https://pan.baiduwp.com/s/${fileId}?pwd=${filePwd}`;
}

const inputArea = document.getElementById('input');
inputArea.addEventListener('change', function () {
	const shareText = inputArea.value;
	const shareLink = convertShareText(shareText);
	const output = document.getElementById('output');
	output.innerHTML = `<a href="${shareLink}" target="_blank">Open Download Page</a>`;
});
