function verificarCaracter(caracter) {
	return ((caracter >= 97 && caracter <= 122) || caracter == 32)
}

function verificarEntrada(mensagem) {
	for(let i = 0; i < mensagem.length; i++) {
		if (!verificarCaracter(mensagem.charCodeAt(i))) {
			return false;
		}
	}
	return true;
}

function criptografarMensagem() {
	let mensagemCriptografada = "";
	let mensagem = document.querySelector("#text-input").value;
	if (!verificarEntrada(mensagem)) {
		alert('Apenas letras minúsculas e sem acento')
		return ;
	}
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
