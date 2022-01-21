function criptografarMensagem() {
	let mensagemCriptografada = "";
	let mensagem = document.querySelector("#text-input").value;
	let output = document.querySelector("#text-output");
	const bancoDeTroca = {
			a: 'ai',
			e: 'enter',
			i: 'imes',
			o: 'ober',
			u: 'ufat'
	};

	for(let i = 0; i < mensagem.length; i++) {
		if (mensagem[i] === 'a') {
			mensagemCriptografada += bancoDeTroca.a;
		} else if (mensagem[i] === 'e') {
			mensagemCriptografada += bancoDeTroca.e;
		} else if (mensagem[i] === 'i') {
			mensagemCriptografada += bancoDeTroca.i;
		} else if (mensagem[i] === 'o') {
			mensagemCriptografada += bancoDeTroca.o;
		} else if (mensagem[i] === 'u') {
			mensagemCriptografada += bancoDeTroca.u;
		} else {
			mensagemCriptografada += mensagem[i];
		}
	}
	output.textContent = mensagemCriptografada;
}
