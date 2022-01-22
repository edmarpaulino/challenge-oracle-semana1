function criptografarMensagem() {
	let mensagemCriptografada = "";
	let mensagem = document.querySelector("#text-input").value;
	let output = document.querySelector("#text-output");

	for(let i = 0; i < mensagem.length; i++) {
		if (mensagem[i] === 'a') {
			mensagemCriptografada += 'ai';
		} else if (mensagem[i] === 'e') {
			mensagemCriptografada += 'enter';
		} else if (mensagem[i] === 'i') {
			mensagemCriptografada += 'imes';
		} else if (mensagem[i] === 'o') {
			mensagemCriptografada += 'ober';
		} else if (mensagem[i] === 'u') {
			mensagemCriptografada += 'ufat';
		} else {
			mensagemCriptografada += mensagem[i];
		}
	}
	output.textContent = mensagemCriptografada;
}
