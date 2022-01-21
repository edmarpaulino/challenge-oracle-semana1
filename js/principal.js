function main() {
	const botaoCripto = document.querySelector("#cripto");
	const botaoDescripto = document.querySelector("#descripto");
	botaoCripto.addEventListener("click", criptografarMensagem);
	botaoDescripto.addEventListener("click", descriptografarMensagem);
}

main();
