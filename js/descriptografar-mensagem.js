function verificaCifra(mensagem, i, cifra) {
	for(let j = 0; j < cifra.length; j++) {
		if (mensagem[i + j] !== cifra[j]) {
			return false;
		}
	}
	return true;
}

function descriptografarMensagem() {
	let mensagemDescriptografada = "";
	let mensagem = document.querySelector("#text-input").value;
	let output = document.querySelector("#text-output");

	for(let i = 0; i < mensagem.length; i++) {
		if (verificaCifra(mensagem, i, 'ai')) {
			mensagemDescriptografada += mensagem[i];
			i += 1;
		} else if (verificaCifra(mensagem, i, 'enter')) {
			mensagemDescriptografada += mensagem[i];
			i += 4;
		} else if (verificaCifra(mensagem, i, 'imes')) {
			mensagemDescriptografada += mensagem[i];
			i += 3;
		} else if (verificaCifra(mensagem, i, 'ober')) {
			mensagemDescriptografada += mensagem[i];
			i += 3;
		} else if (verificaCifra(mensagem, i, 'ufat')) {
			mensagemDescriptografada += mensagem[i];
			i += 3;
		} else {
			mensagemDescriptografada += mensagem[i];
		}
	}
	output.textContent = mensagemDescriptografada;
}
