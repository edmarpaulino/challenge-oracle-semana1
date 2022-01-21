function verificaA(mensagem, i) {
	return (mensagem[i] === 'a' &&
			mensagem[i + 1] === 'i');
}

function verificaE(mensagem, i) {
	return (mensagem[i] === 'e' &&
			mensagem[i + 1] === 'n' &&
			mensagem[i + 2] === 't' &&
			mensagem[i + 3] === 'e' &&
			mensagem[i + 4] === 'r');
}

function verificaI(mensagem, i) {
	return (mensagem[i] === 'i' &&
			mensagem[i + 1] === 'm' &&
			mensagem[i + 2] === 'e' &&
			mensagem[i + 3] === 's');
}

function verificaO(mensagem, i) {
	return (mensagem[i] === 'o' &&
			mensagem[i + 1] === 'b' &&
			mensagem[i + 2] === 'e' &&
			mensagem[i + 3] === 'r');
}

function verificaU(mensagem, i) {
	return (mensagem[i] === 'u' &&
			mensagem[i + 1] === 'f' &&
			mensagem[i + 2] === 'a' &&
			mensagem[i + 3] === 't');
}

function descriptografarMensagem() {
	let mensagemDescriptografada = "";
	let mensagem = document.querySelector("#text-input").value;
	let output = document.querySelector("#text-output");

	for(let i = 0; i < mensagem.length; i++) {
		if (verificaA(mensagem, i)) {
			mensagemDescriptografada += mensagem[i];
			i += 1;
		} else if (verificaE(mensagem, i)) {
			mensagemDescriptografada += mensagem[i];
			i += 4;
		} else if (verificaI(mensagem, i)) {
			mensagemDescriptografada += mensagem[i];
			i += 3;
		} else if (verificaO(mensagem, i)) {
			mensagemDescriptografada += mensagem[i];
			i += 3;
		} else if (verificaU(mensagem, i)) {
			mensagemDescriptografada += mensagem[i];
			i += 3;
		} else {
			mensagemDescriptografada += mensagem[i];
		}
	}
	output.textContent = mensagemDescriptografada;
}
